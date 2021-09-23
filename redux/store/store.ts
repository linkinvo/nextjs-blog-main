import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
// import { fromJS } from 'immutable';
import { cloneDeep, merge } from 'lodash';

import {rootWatcher} from '../saga/index'
import identity from './identity'

import { SET_ALL_DATA_SCHEMA } from 'redux/saga/action';


const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const initialEntities = cloneDeep({});  

function entities(state = initialEntities, action: any) {
    switch (action.type) {
        
        case SET_ALL_DATA_SCHEMA:
            // const { data } = action;
            if (action.response && action.response.entities) {

                const { response: { entities } } = action;

                if (entities) {
                    Object.keys(entities).map((entityName) => {
                        let list = state[entityName];
                        if (list && list.size > 0) {
                            Object.keys(entities[entityName]).map((id) => list = list.remove(id));
                        }
                        const newState = cloneDeep(state);
                        newState[entityName] = { ...list };
                    });
                    return merge(state, entities);
                }
            }
            break;
    }
    return state;
}


const appReducer = combineReducers({
    identity,
    entities,
})

let isHydrated = false;

function nextReducer(state, action) {
    if (action.type.includes('@@redux/INIT')) {
        isHydrated = false;
    }
    switch (action.type) {
        case HYDRATE: {
            if (!isHydrated) {
                isHydrated = true;
                return { ...state, ...action.payload }
            }
            return state;
        }
        default:
            return state
    }
}

function rootReducer(state, action) {
    const intermediateState = appReducer(state, action);
    const finalState = nextReducer(intermediateState, action);
    return finalState;
}

// const rootSaga = function* root() {
//     const sagaAll = Entity.getSagaAll()
//     yield all(sagaAll)
// }



export const makeStore = (ctx) => {
    const sagaMiddleware = createSagaMiddleware()

    const store: any = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

    store.sagaTask = sagaMiddleware.run(rootWatcher)

    store.runSaga = () => sagaMiddleware.run(rootWatcher)

    return store
}


export const wrapper = createWrapper(makeStore)
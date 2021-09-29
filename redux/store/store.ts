import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { fromJS, Map } from 'immutable';
import _, { cloneDeep, merge } from 'lodash';
import {rootWatcher} from '../saga/index'
import identity from './identity'
import { serialize, deserialize } from 'json-immutable';

import { SET_ALL_DATA_SCHEMA } from 'redux/saga/action';


const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

// const initialEntities = cloneDeep({});  

// function entities(state = initialEntities, action: any) {
//     switch (action.type) {    
//         case SET_ALL_DATA_SCHEMA:
//             if (action.response && action.response.entities) {
//                 const { response: { entities } } = action;

//                 if (entities) {
//                     Object.keys(entities).map((entityName) => {
//                         let list = state[entityName];
//                         if (list && list.size > 0) {
//                             Object.keys(entities[entityName]).map((id) => list = list.remove(id));
//                         }
//                         const newState = cloneDeep(state);
//                         newState[entityName] = { ...list };
//                     });
//                     return  entities;
//                 }
//             }
//             break;
//     }
//     return state;
// }

export interface AppState {
    entities: Map<string, Map<string, any>>,
}

const initialEntities = fromJS({});  

function entities(state = initialEntities, action: any) {
    switch (action.type) {    
        case SET_ALL_DATA_SCHEMA:
            if (action.response && action.response.entities) {
                const { response: { entities } } = action;
                if (entities) {
                    Object.keys(entities).map((entityName) => {
                        let list = state.get(entityName);
                        console.log("LIST.GET", list)
                        if (list && list.size > 0) {
                            Object.keys(entities[entityName]).map((id) => list = list.remove(id));
                        }
                        state = state.set(entityName, list);
                    });
                    state = state.mergeDeep(fromJS(entities));
                }
            }
            break;
    }
    return state;

}

// const initialEntities = fromJS({});

// function entities(state = initialEntities, action: any) {
//     if ('glob' in action) {
//         const { glob: { crud, entity } } = action;
//         switch (crud) {
//         default:
//         case SET_ALL_DATA_SCHEMA:
//             if (action.response && action.response.entities) {
//                 const { response: { entities } } = action;
//                 if (entities) {
//                     Object.keys(entities).map((entityName) => {
//                         let list = state.get[entityName];
//                         if (list && list.size > 0) {
//                             Object.keys(entities[entityName]).map((id) => list = list.remove(id));
//                         }
//                         state = state.set(entityName, list);
//                     });
//                     state = state.mergeDeep(fromJS(entities));
//                 }
//             }
//             break;
//         }
//     }
//     return state;
// }

const appReducer = combineReducers({
    identity,
    entities,
})

let isHydrated = false;

function nextReducer(state: AppState, action) {
    
    if (action.type.includes('@@redux/INIT')) {
        isHydrated = false;
    }
    switch (action.type) {
        case HYDRATE: {
            if (action.payload.entities.size <= 0) {
                return { ...state };
            }
            return { ...state, ...action.payload };
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




export const makeStore = (ctx) => {
    const sagaMiddleware = createSagaMiddleware()

    const store: any = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

    store.sagaTask = sagaMiddleware.run(rootWatcher)

    // store.runSaga = () => sagaMiddleware.run(rootWatcher)

    return store
}


// export const wrapper = createWrapper(makeStore)
 const wrapper = createWrapper(makeStore,  { 
    serializeState: state => {
        return state === Object(state) ? serialize(state) : state;
    },
    deserializeState: state => {
        return state === Object(state) ? state : deserialize(state);
    }
});

export default wrapper; 
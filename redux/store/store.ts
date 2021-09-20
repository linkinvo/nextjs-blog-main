import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

import  rootWatcher  from '../decorators_saga/index'
import users from './users'
import properties from './properties'
import identity from './identity'
import reviews from './reviews'

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const appReducer = combineReducers({
    users,
    properties,
    identity,
    reviews,
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





export const makeStore = (ctx) => {
    const sagaMiddleware = createSagaMiddleware()

    const store: any = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

    store.sagaTask = sagaMiddleware.run(rootWatcher)

    return store
}

export const wrapper = createWrapper(makeStore)
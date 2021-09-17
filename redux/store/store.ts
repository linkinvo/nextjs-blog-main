import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

import  rootWatcher  from '../decorators_saga/index'
import userReducer from './userReducer'
import propertiesReducer from './propertiesReducer'

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const appReducer = combineReducers({
    userReducer,
    propertiesReducer
})

let isHydrated = false;
function nextReducer(state, action) {
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
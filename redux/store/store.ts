import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import { rootWatcher } from 'redux/decorators_saga';

import userReducer from './userReducer'
import propertiesReducer from './propertiesReducer'

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const rootReducer = combineReducers({
    userReducer,
    propertiesReducer
})

export const makeStore = (ctx) => {
    console.log('CONTEXT====' , ctx)
    const sagaMiddleware = createSagaMiddleware()

    const store: any = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

    store.sagaTask = sagaMiddleware.run(rootWatcher)

    return store
}

export const wrapper = createWrapper(makeStore, { debug: true })
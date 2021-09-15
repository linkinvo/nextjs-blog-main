import createSagaMiddleware, {Task} from 'redux-saga'
import { createStore, applyMiddleware, compose, Store } from 'redux';
import {serialize, deserialize} from 'json-immutable'
import Entity from './models/Entity';
import nextConfig from 'next.config';
import rootReducer from './reducer';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { AppState } from 'redux/reducer';
import { all } from 'redux-saga/effects'
import './models/User';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}



const rootSaga = function* root() {
    const sagaList = Entity.getSagaList()
    yield all(sagaList);
};

export interface SagaStore extends Store {
    sagaTask?: Task;
    runSaga: () => void;
}

export const makeStore: MakeStore<AppState> = () => {
    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancers = (nextConfig.public.IS_DEV && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
        // @ts-ignore
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(sagaMiddleware)
        // other store enhancers if any
    );

    const store = createStore(rootReducer, { entities: undefined }, enhancer) as SagaStore;
    store.sagaTask = sagaMiddleware.run(rootSaga);
    // Entity.store = store;
    store.runSaga = () => sagaMiddleware.run(rootSaga);
    
    return store;
};




const wrapper = createWrapper<AppState>(makeStore, { 
    serializeState: state => {
        return state === Object(state) ? serialize(state) : state;
    },
    deserializeState: state => {
        return state === Object(state) ? state : deserialize(state);
    }
});

export default wrapper;
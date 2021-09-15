import { IIdentity } from './../src/common';
import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import { CLEAR_IDENTITY, GET_IDENTITY, SET_IDENTITY } from './action';
import { fromJS, Map } from 'immutable';
import { REQUEST_RESULT } from './models/Entity';


export interface AppState {
    entities: Map<string, Map<string, any>>,
}

export const nextReducer = (
    state: AppState,
    action: AnyAction
) => {
    switch (action.type) {
        case HYDRATE:
            if (action.payload.entities.size <= 0) {
                return { ...state };
            }
            return { ...state, ...action.payload };
        case 'APP':
            return { ...state, app: action.payload };
        case 'PAGE': {
            return { ...state, page: action.payload };
        }
        default:
            return state
    }
}
const initialIdentity: IIdentity = {
    firstName: 'user7',
    lastName: 'user7',
    role: 'ADMIN',
    id: 'user7',
    email: 'user7',
    token: null
}

const identity = (state = initialIdentity, action: any) => {
    switch (action.type) {
        case GET_IDENTITY: {
            if(action.user) {
                return {...state, user: {...action.user }};
            }
            return {...state };
        }
        case SET_IDENTITY: {
            if (action.user) {
                return {...state, ...action.user };
            }
            delete(action.type);
            return {...state, ...action}
        }
        case CLEAR_IDENTITY: {
            return {...state, ...initialIdentity}
        }
        default: {
            return state;
        }
    }
}

const initialEntities = fromJS({});

function entities(state = initialEntities, action: any) {
    switch (action.type) {
        case REQUEST_RESULT:
            const { data } = action;

            if (data.entities) {
                Object.keys(data.entities).map((entityName) => {
                    let list = state.get(entityName);
                    if (list && list.size > 0) {
                        Object.keys(data.entities[entityName]).map((id) => list = list.remove(id));
                    }
                    state = state.set(entityName, list);
                });
                state = state.mergeDeep(fromJS(data.entities));
            }
            break;
    }
    return state;
}

const appReducer = combineReducers({
    identity,
    entities
});

function rootReducer(state, action) {
    const intermediateState = appReducer(state, action);
    const finalState = nextReducer(intermediateState, action)
    return finalState;
}

export default rootReducer




// import { Entity } from 'redux/models/Entity';
import { all, call, put, select, take } from 'redux-saga/effects';
import { action } from 'redux/store/actions';
import { xRead } from 'src/request';
import { ENTITIES, IIdentity } from '../../src/common';
import Entity from './Entity';
import { schema } from 'normalizr';
import { normalize } from 'normalizr';

export interface User {
    userToken?: string;
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    role: string;
}

// ================================================

// export class UserEntity extends Entity {
//     constructor() {
//         super(ENTITIES.USERS, {
//             idAttribute: 'id'
//         })}
// }

// export const userEntity = new UserEntity();

export const userSchema = new schema.Entity(ENTITIES.USERS)

// const normalizedData = normalize(data,userSchema);
// ================================================




export const GET_USERS = 'GET_USERS';
export const SET_USERS = 'SET_USERS';

export const getUsers = () => action(GET_USERS);
export const setUsers = (users: Array<IIdentity>) => action(SET_USERS, {users});

export function* sagaGetUsers() {
    while(true) {
        yield take (GET_USERS);
        let users = yield select(state => state.users.items);
        const result = yield call(xRead, '/user/', {});
        if(result.success === true && result.response.error === false) {
            const arraysAreSame =  JSON.stringify(users) === JSON.stringify(result.response.data);
            if(!arraysAreSame) {
                yield put(setUsers(result.response.data))
            }
        }
    }
}

export default function* sagas() {
    yield all([
        call(sagaGetUsers),
    ])
}
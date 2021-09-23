// import { Entity } from 'redux/models/Entity';
import { all, call, put, select, take } from 'redux-saga/effects';
import { action } from 'redux/store/actions';
import { xRead } from 'src/request';
import { ENTITIES, IIdentity } from '../../src/common';
import Entity from './Entity';
import { schema, normalize } from 'normalizr';
import { setAllData } from 'redux/saga/action';

export const usersSchema = new schema.Entity(ENTITIES.USERS)

export const GET_USERS = 'GET_USERS';
export const SET_USERS = 'SET_USERS';

export const getUsers = () => action(GET_USERS);
export const setUsers = (users: Array<IIdentity>) => action(SET_USERS, {users});

export function* sagaGetUsers() {
    while(true) {
        yield take (GET_USERS);
        let users = yield select(state => state.users);
        const result = yield call(xRead, '/user/', {});
        if(result.success === true && result.response.error === false) {
            const normalizedData = normalize(result.response.data, [usersSchema]);
            const arraysAreSame =  JSON.stringify(users) === JSON.stringify(result.response.data);
            if(!arraysAreSame) {
                yield put(setAllData(normalizedData))
            }
        }
    }
}

export default function* sagas() {
    yield all([
        call(sagaGetUsers),
    ])
}
import { all, call, put, select, take } from 'redux-saga/effects';
import { action } from 'redux/store/actions';
import { ENTITIES, IIdentity } from '../../src/common';
import Entity from './Entity';
import { schema, normalize } from 'normalizr';
import { setAllDataAC } from 'redux/saga/action';


export const GET_USERS = 'GET_USERS';
export const SET_USERS = 'SET_USERS';

export const getUsers = () => action(GET_USERS);
export const setUsers = (users: Array<IIdentity>) => action(SET_USERS, { users });
class UserEntity extends Entity {
    constructor() {
        super(ENTITIES.USERS, {
        })
        this.sagaGetUsers = this.sagaGetUsers.bind(this);
        Entity.addAction(this.sagaGetUsers);
    }


    public * sagaGetUsers() {
        while (true) {
            yield take(GET_USERS);
            yield call(this.xRead, '/user/', {});
        }
    }
}

const userEntity = new UserEntity();
export default userEntity;
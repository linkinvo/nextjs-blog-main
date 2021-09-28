// import { Entity } from 'redux/models/Entity';
import { all, call, put, select, take } from 'redux-saga/effects';
import { action } from 'redux/store/actions';
import { xRead } from 'src/request';
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
        this.xRead = this.xRead.bind(this);
        this.normalizeEntity = this.normalizeEntity.bind(this);
    }


    public * sagaGetUsers() {
        while (true) {
            yield take(GET_USERS);
            const result = yield call(xRead, '/user/', {});
            console.log("result",result);
            const { normalizedData } = yield call(this.normalizeEntity, result);
            console.log("normalizedData, entName", normalizedData, this.getEntityName());
            yield put(setAllDataAC(this.getEntityName(), normalizedData));
        }
    }
}

const userEntity = new UserEntity();
export default userEntity;
import { all, call, put, select, take } from "redux-saga/effects";

import Router from "next/router";
import { xSave } from "src/request";

export const BTN_LOGIN_CLICK = 'BTN_LOGIN_CLICK'
export const SET_USER_INFO = 'SET_USER_INFO'


export function btnLoginClick(payload: any) {
    return {
        type: BTN_LOGIN_CLICK,
        payload,
    }
}

export function setUserInfo(payload: any, token: string) {
    return {
        type: SET_USER_INFO,
        payload,
        token
    }
}

export function*  sagaLoginWatcher() {
    while(true) {
        const data = yield take(BTN_LOGIN_CLICK);
        const result = yield call(xSave, '/users/login', data.payload);
        if(result.success === true && result.response.error === false) {
            yield put(setUserInfo(result.response.identity.payload, result.response.identity.token))
            yield call(Router.push, '/');
        }
    }
}

export default function* sagas() {
    yield all([
        call(sagaLoginWatcher)
    ])
}
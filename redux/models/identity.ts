import { all, call, put, select, take } from "redux-saga/effects";
import {action} from 'redux/store/actions'
import Router from "next/router";
import { xSave } from "src/request";
import { IIdentity } from "src/common";

export const BTN_LOGIN_CLICK = 'BTN_LOGIN_CLICK'
export const SET_USER_INFO = 'SET_USER_INFO'


export function btnLoginClick(payload: any) {
    return {
        type: BTN_LOGIN_CLICK,
        payload,
    }
}

// export function setUserInfo(payload: any, token: string) {
//     return {
//         type: SET_USER_INFO,
//         payload,
//         token
//     }
// }

export const setUserInfo = (identity:IIdentity, token: string) => action(SET_USER_INFO, {identity, token})


export function* sagaLoginWatcher() {
  while (true) {
    let identity = yield select((state) => state.identity);
    const data = yield take(BTN_LOGIN_CLICK);
    if (identity.userToken === "") {
      const result = yield call(xSave, "/users/login", data.payload);
      if (result.success === true && result.response.error === false) {
        yield put(
          setUserInfo(
            result.response.identity.payload,
            result.response.identity.token
          )
        )
        yield call(Router.push, "/");
      }
    }
  }
}

export default function* sagas() {
    yield all([
        call(sagaLoginWatcher)
    ])
}
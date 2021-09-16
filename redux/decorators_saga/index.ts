
import { xSave } from './../../src/request';
import { all, call, put, take, takeLatest } from "redux-saga/effects"
import { actionTypes } from "redux/store/actions";
import { handleClickBtnWatcher } from "./handleClickBtn";
import { loadDataSaga } from "./loadData";

export function* handleClickBtnWatcher1() {
    console.log('init BTN_CLICK')
    while (true) {
        const data = yield take(actionTypes.BTN_CLICK)
        const result = yield call(xSave, '/users/login', data.data);
        console.log('result', result);
    }

}

export function* rootWatcher() {
    console.log('rootWatcher')
    yield all([
        loadDataSaga,
        call(handleClickBtnWatcher1)
    ])
}
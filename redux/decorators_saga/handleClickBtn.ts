
import { put, take, takeEvery } from "redux-saga/effects"
import { failure, } from "redux/store/actions"



export function* handleClickBtn() {
    console.log('handleClickBtn run')
    yield take('BTN_CLICK');
    console.log('sclick form saga')
}

export function* handleClickBtnWatcher() {
    yield takeEvery('BTN_CLICK', handleClickBtn)
    console.log('handleClickBtnWatcher')
}
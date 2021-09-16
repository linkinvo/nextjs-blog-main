
import { put } from "redux-saga/effects"
import { failure, loadDataSuccess } from "redux/store/actions"

export function* loadDataSaga() {
    try {
        const res = yield fetch('https://jsonplaceholder.typicode.com/users')
        const data = yield res.json()
        yield put(loadDataSuccess(data))
    } catch (err) {
        yield put(failure(err))
    }
}
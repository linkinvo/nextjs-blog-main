
import { xSave, xRead } from './../../src/request';
import { all, call, put, take, select } from "redux-saga/effects"
import { actionTypes, setUserInfo , setPropertiesInfo, setSinglePropertyInfo } from "redux/store/actions";
import { useSelector } from 'react-redux';
import { HTTP_METHOD } from 'src/common';

// export function* handleClickBtnWatcher1() {
//     console.log('init BTN_CLICK')
//     while (true) {
//         const data = yield take(actionTypes.BTN_LOGIN_CLICK)
//         const result = yield call(xSave, '/users/login', data.data);
//         console.log('result-LOGIN', result);
//     }

    
// }

export const getMyState = (state) => state;

export function* loginWatcher() {
    while(true) {
        const data = yield take(actionTypes.BTN_LOGIN_CLICK);
        const result = yield call(xSave, '/users/login', data.payload);
        console.log("result", result)

        if(result.success === true && result.response.errors !== true){
            yield put(setUserInfo(result.response.identity.payload, result.response.identity.token))
        }
    }
}


    export function* getProperties() {
        while (true) {
            yield take(actionTypes.GET_PROPERTIES_INFO);
            let state = yield select(getMyState);
            const result = yield call(xRead, '/properties/', {});
            if (result.success === true && result.response.error === false) {
                yield put(setPropertiesInfo(result.response.data))
            }
        }
    }
    export function* getAndSetSingleProperties() {
        console.log('getAndSetSingleProducts')
        while (true) {
            const data = yield take(actionTypes.GET_SINGLE_PROPERTY_INFO);
            const id = data.payload;
            let state = yield select(getMyState);
            console.log(id);
            const result = yield call(xRead, '/properties/' + id, {});
            if (result.success === true && result.response.error === false) {
                yield put(setSinglePropertyInfo(result.response.data))
            }
        }
    }

export function* rootWatcher() {
    console.log('rootWatcher')
    yield all([
        call(loginWatcher),
        call(getProperties),
        call(getAndSetSingleProperties),

    ])
}

function setSingleProductInfo(data: any): any {
    throw new Error('Function not implemented.');
}

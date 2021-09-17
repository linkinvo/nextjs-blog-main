import { all, call, put, take, select } from "redux-saga/effects"
import { action } from "redux/store/actions"
import { IProperty } from "src/common"
import { xRead } from "src/request"

export const SET_PROPERTIES_INFO = 'SET_PROPERTIES_INFO'
export const GET_PROPERTIES_INFO = 'GET_PROPERTIES_INFO'
export const GET_SINGLE_PROPERTY_INFO = 'GET_SINGLE_PROPERTY_INFO'
export const SET_SINGLE_PROPERTY_INFO = 'SET_SINGLE_PROPERTY_INFO'

export const FIND_PROPERTY_BY_ID = 'FIND_PROPERTY_BY_ID'



export const findPropertyById = (id: string) => action(FIND_PROPERTY_BY_ID, { id });
export const getPropertiesInfo = () => action(GET_PROPERTIES_INFO);
export const setPropertiesInfo = (payload: Array<IProperty>) => action(SET_PROPERTIES_INFO, { payload });
export const getSinglePropertyInfo = (id: number) => action(GET_SINGLE_PROPERTY_INFO, { id });
export const setSinglePropertyInfo = (payload: IProperty) => action(SET_SINGLE_PROPERTY_INFO, { payload });


export function* sagaGetProperties() {
    while (true) {
        yield take(GET_PROPERTIES_INFO);
        let properties = yield select(state => state.propertiesReducer.properties);
    if (properties.length <= 0) {
        const result = yield call(xRead, '/properties/', {});
        if (result.success === true && result.response.error === false) {
            yield put(setPropertiesInfo(result.response.data))
        }
    }
    }
}

export function* sagaGetAndSetSingleProperty() {
    while (true) {
        const data = yield take(GET_SINGLE_PROPERTY_INFO);
        // const id = data.payload;
        const id = data.id;
        const result = yield call(xRead, '/properties/' + id, {});
        if (result.success === true && result.response.error === false) {
            console.log("sagaGetAndSetSingleProperties--")
            yield put(setSinglePropertyInfo(result.response.data))
        }
    }
}

export default function* sagas() {
    yield all(
        [
            call(sagaGetProperties),
            call(sagaGetAndSetSingleProperty),
        ]
    )
}
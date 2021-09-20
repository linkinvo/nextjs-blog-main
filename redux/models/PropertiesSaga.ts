import { all, call, put, take, select } from "redux-saga/effects"
import { action } from "redux/store/actions"
import { IProperty } from "src/common"
import { xRead } from "src/request"

export const GET_SINGLE_PROPERTY_INFO = 'GET_SINGLE_PROPERTY_INFO'
export const SET_SINGLE_PROPERTY_INFO = 'SET_SINGLE_PROPERTY_INFO'
export const FIND_PROPERTY_BY_ID = 'FIND_PROPERTY_BY_ID'

export const SET_ALL_PROPERTIES = 'SET_ALL_PROPERTIES';
export const GET_ALL_PROPERTIES = 'GET_ALL_PROPERTIES';
export const GET_PROPERTY_BY_ID = 'GET_PROPERTY_BY_ID';
export const SET_PROPERTY_BY_ID = 'SET_PROPERTY_BY_ID';

export const getAllProperties = () => action(GET_ALL_PROPERTIES);
export const setAllProperties = (properties: Array<IProperty>) => action(SET_ALL_PROPERTIES, {properties});
export const getPropertyById = (id: number) => action(GET_PROPERTY_BY_ID, {id});
export const setPropertyById = (property: IProperty) => action(SET_PROPERTY_BY_ID, {property});

export const findPropertyById = (id: string) => action(FIND_PROPERTY_BY_ID, { id });
export const getSinglePropertyInfo = (id: number) => action(GET_SINGLE_PROPERTY_INFO, { id });
export const setSinglePropertyInfo = (payload: IProperty) => action(SET_SINGLE_PROPERTY_INFO, { payload });


export function* sagaGetAllProperties() {
    while(true) {
        yield take(GET_ALL_PROPERTIES);
        let properties = yield select(state => state.properties.items);
        console.log('properties!!!!!!!!!!!23', properties)
        const result = yield call(xRead, '/properties/', {});
        if (result.success === true && result.response.error === false) {
            if(properties.length !== result.response.data.length) {
                yield put(setAllProperties(result.response.data))
            }
        }
    }
}

export function* sagaGetPropertyById() {
    while(true) {
        const data = yield take(GET_PROPERTY_BY_ID);
        const id = data.id;
        const properties = yield select(state => state.properties.items);
        let property = undefined;
        if(!isNaN(id)){
            if(properties.length !== 0) {
                property = properties.find(prop => {
                    return Number(prop.id) === Number(id)
                })
            }
            if(property === undefined) {
                const result = yield call(xRead, '/properties/' + id, {});
                if (result.success === true && result.response.error === false) {
                    yield put(setPropertyById(result.response.data))
                }
            }
        }
    }
}



export default function* sagas() {
    yield all(
        [
            // call(sagaGetProperties),
            // call(sagaGetAndSetSingleProperty),
            call(sagaGetAllProperties),
            call(sagaGetPropertyById),
        ]
    )
}
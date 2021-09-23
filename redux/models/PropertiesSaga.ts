import { normalize, schema } from "normalizr"
import { all, call, put, take, select } from "redux-saga/effects"
import { setAllData } from "redux/saga/action"
import { action } from "redux/store/actions"
import { ENTITIES, IProperty } from "src/common"
import { xRead } from "src/request"
import Entity from "./Entity"
import { reviewsSchema } from "./ReviewsSaga"
import { usersSchema } from "./UsersSaga"

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


export const propertySchema = new schema.Entity(ENTITIES.PROPERTIES, {
    user: usersSchema,
    reviews: [reviewsSchema]
});


export function* sagaGetAllProperties() {
    while(true) {
        yield take(GET_ALL_PROPERTIES);

        const result = yield call(xRead, '/properties/', {});
        if (result.success === true && result.response.error === false) {
                const normalizedData = normalize(result.response.data, [propertySchema]);
                yield put(setAllData(normalizedData))
        }
    }
}

export function* sagaGetPropertyById() {
    while (true) {
        const data = yield take(GET_PROPERTY_BY_ID);
        const id = data.id;
        const result = yield call(xRead, '/properties/' + id, {});
        if (result.success === true && result.response.error === false) {
            const normalizedData = normalize(result.response.data, propertySchema);
            yield put(setAllData(normalizedData))
        }
    }
}

export default function* sagas() {
    yield all(
        [
            call(sagaGetAllProperties),
            call(sagaGetPropertyById),
        ]
    )
}
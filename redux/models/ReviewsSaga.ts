import { normalize, schema } from "normalizr";
import { all, call, put, take, select } from "redux-saga/effects"
import { setAllData } from "redux/saga/action";
import { action } from "redux/store/actions";
import { ENTITIES, IReview } from "src/common";
import { xRead } from "src/request";
import  productSchema  from "./PropertiesSaga";
import { usersSchema } from "./UsersSaga";


export const GET_REVIEWS_BY_PROPERTY_ID = 'GET_REVIEWS_B;Y_PROPERTY_ID';
export const SET_REVIEWS_BY_PROPERTY_ID = 'SET_REVIEWS_BY_PROPERTY_ID';

export const getReviewsByPropertyId = (propertiId: number) => action(GET_REVIEWS_BY_PROPERTY_ID, {propertiId});
export const setReviewsByPropertyId = (reviews: Array<IReview>) => action(SET_REVIEWS_BY_PROPERTY_ID, {reviews});


export const reviewsSchema = new schema.Entity(
    ENTITIES.REVIEWS,
  {
    // user: usersSchema,
    // propertiId: productSchema
  }
);


export function* sagaGetReviewsByPropertyId() {
    while(true) {
        const data = yield take(GET_REVIEWS_BY_PROPERTY_ID);

        let propertiId = data.propertiId;
        console.log('sagaGetReviewsByPropertyId', propertiId)
        // let reviews = yield select(state => state.reviews);
        const result = yield call(xRead, '/reviews/by_property_id/' + propertiId, {})

        if(result.success === true && result.response.error === false){
            const normalizedData = normalize(result.response.data, [reviewsSchema]);
                yield put(setAllData(normalizedData))
        } 
    }
}


export default function* sagas() {
    yield all([
        call(sagaGetReviewsByPropertyId)
    ])
}

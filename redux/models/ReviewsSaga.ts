import { all, call, put, take, select } from "redux-saga/effects"
import { action } from "redux/store/actions";
import { IReview } from "src/common";
import { xRead } from "src/request";


export const GET_REVIEWS_BY_PROPERTY_ID = 'GET_REVIEWS_B;Y_PROPERTY_ID';
export const SET_REVIEWS_BY_PROPERTY_ID = 'SET_REVIEWS_BY_PROPERTY_ID';

export const getReviewsByPropertyId = (propertiId: number) => action(GET_REVIEWS_BY_PROPERTY_ID, {propertiId});
export const setReviewsByPropertyId = (reviews: Array<IReview>) => action(SET_REVIEWS_BY_PROPERTY_ID, {reviews});

export function* sagaGetReviewsByPropertyId() {
    while(true) {
        const data = yield take(GET_REVIEWS_BY_PROPERTY_ID);
        let propertiId = data.propertiId;
        let reviews = yield select(state => state.reviews.items);
        const result = yield call(xRead, '/reviews/by_property_id/' + propertiId, {})
        if(result.success === true && result.response.error === false){
            const arraysAreSame = JSON.stringify(reviews) === JSON.stringify(result.response.data);
            if(!arraysAreSame) {
                yield put(setReviewsByPropertyId(result.response.data))
            }
        } 
    }

}

export default function* sagas() {
    yield all([
        call(sagaGetReviewsByPropertyId)
    ])
}

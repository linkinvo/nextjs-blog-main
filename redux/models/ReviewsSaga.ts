import { call, take } from "redux-saga/effects"
import { action } from "redux/store/actions";
import { ENTITIES, IReview } from "src/common";

import Entity from "./Entity";
import userEntity from "./UsersSaga";

export const GET_REVIEWS_BY_PROPERTY_ID = 'GET_REVIEWS_B;Y_PROPERTY_ID';
export const SET_REVIEWS_BY_PROPERTY_ID = 'SET_REVIEWS_BY_PROPERTY_ID';

export const getReviewsByPropertyId = (propertiId: number) => action(GET_REVIEWS_BY_PROPERTY_ID, { propertiId });
export const setReviewsByPropertyId = (reviews: Array<IReview>) => action(SET_REVIEWS_BY_PROPERTY_ID, { reviews });

class ReviewEntity extends Entity {
    constructor() {
        super(ENTITIES.REVIEWS, {
            user: userEntity.getSchema(),
        });
        this.sagaGetReviewsByPropertyId = this.sagaGetReviewsByPropertyId.bind(this);
        Entity.addAction(this.sagaGetReviewsByPropertyId);
        this.xRead = this.xRead.bind(this);
    }

    public * sagaGetReviewsByPropertyId() {
        while (true) {
            const data = yield take(GET_REVIEWS_BY_PROPERTY_ID);
            let propertiId = data.propertiId;
            yield call(this.xRead, '/reviews/by_property_id/' + propertiId, {})
        }
    }
}

const reviewEntity = new ReviewEntity();
export default reviewEntity;
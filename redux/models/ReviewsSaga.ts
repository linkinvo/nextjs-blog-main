import { normalize, schema } from "normalizr";
import { all, call, put, take, select } from "redux-saga/effects"
import { setAllDataAC } from "redux/saga/action";
import { action } from "redux/store/actions";
import { ENTITIES, IReview } from "src/common";
import { xRead } from "src/request";
import Entity from "./Entity";
import userEntity from "./UsersSaga";

export const GET_REVIEWS_BY_PROPERTY_ID = 'GET_REVIEWS_B;Y_PROPERTY_ID';
export const SET_REVIEWS_BY_PROPERTY_ID = 'SET_REVIEWS_BY_PROPERTY_ID';

export const getReviewsByPropertyId = (propertiId: number) => action(GET_REVIEWS_BY_PROPERTY_ID, { propertiId });
export const setReviewsByPropertyId = (reviews: Array<IReview>) => action(SET_REVIEWS_BY_PROPERTY_ID, { reviews });


// export const reviewsSchema = new schema.Entity(
//     ENTITIES.REVIEWS,
//     {
//         // user: usersSchema,    
//         // propertiId: productSchema
//     }
// );
class ReviewEntity extends Entity {
    constructor() {
        super(ENTITIES.REVIEWS, {
            user: userEntity.getSchema(),
        });
        this.sagaGetReviewsByPropertyId = this.sagaGetReviewsByPropertyId.bind(this);
        Entity.addAction(this.sagaGetReviewsByPropertyId);
        this.xRead = this.xRead.bind(this);
        this.normalizeEntity = this.normalizeEntity.bind(this);
    }

    public * sagaGetReviewsByPropertyId() {
        while (true) {
            const data = yield take(GET_REVIEWS_BY_PROPERTY_ID);
            let propertiId = data.propertiId;
            console.log('sagaGetReviewsByPropertyId', propertiId)
            const result = yield call(xRead, '/reviews/by_property_id/' + propertiId, {})
            console.log("result", result);
            const { normalizedData, entName } = yield call(this.normalizeEntity, result);
            console.log("normalizedData, entName", normalizedData, this.getEntityName());
            yield put(setAllDataAC(this.getEntityName(), normalizedData));
        }
    }
}

const reviewEntity = new ReviewEntity();
export default reviewEntity;
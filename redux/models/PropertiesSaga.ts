import { call, take } from "redux-saga/effects"
import { action } from "redux/store/actions"
import { ENTITIES, IProperty } from "src/common"
import Entity from "./Entity"
import reviewEntity from "./ReviewsSaga"
import userEntity from "./UsersSaga" 

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

 class PropertyEntity extends Entity {
    constructor() {
        super(ENTITIES.PROPERTIES, {
            reviews: [reviewEntity.getSchema()],
            user: userEntity.getSchema(),
        });
        this.sagaGetAllProperties = this.sagaGetAllProperties.bind(this);
        this.sagaGetPropertyById = this.sagaGetPropertyById.bind(this);
        Entity.addAction(this.sagaGetAllProperties);
        Entity.addAction(this.sagaGetPropertyById);
    }
    

     public * sagaGetAllProperties() {
         while (true) { 
             yield take(GET_ALL_PROPERTIES);
             yield call(this.xRead, '/properties/');
         }
     }

     public * sagaGetPropertyById() {
         while (true) {
             const data = yield take(GET_PROPERTY_BY_ID);
             const id = data.id;
             yield call(this.xRead, '/properties/' + id);
          
         }
     }
}

const propertyEntity = new PropertyEntity();
export default propertyEntity;

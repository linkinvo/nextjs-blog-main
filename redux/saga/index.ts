import { all, call, fork, take } from "redux-saga/effects"
import properties from 'redux/models/PropertiesSaga'
import identity from '../models/identity';
import users from '../models/UsersSaga'
import reviews from '../models/ReviewsSaga'
import Entity from "redux/models/Entity";


export const saga = (entity: Entity) => () => {
    const entityName = entity.constructor.name;
    console.log('Entity-Name', entityName)

    if (entityName in Entity.action) {
        const methods = Entity.action[entityName];
    Object.keys(methods).map(method => {

        const fu = entity[method].bind(entity);

        const sagaFu = function* () {
            while (true) {
                const data = yield take(method.toUpperCase());
                yield fork(fu, data);
            }
        };
        Entity.action[entityName][method].saga = sagaFu;
    })
    }
}


export default function* rootWatcher() {
    yield all([
        call(identity),
        // call(properties),
        call(users),
        call(reviews),
    ])
}
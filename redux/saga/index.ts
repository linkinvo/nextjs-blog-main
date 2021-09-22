import { all, call, fork, take } from "redux-saga/effects"
import properties from 'redux/models/PropertiesSaga'
import identity from '../models/identity';
import users from '../models/UsersSaga'
import reviews from '../models/ReviewsSaga'
import Entity from "redux/models/Entity";



export  function* rootWatcher() {
    yield all([
        call(identity),
        call(properties),
        call(users),
        call(reviews),
    ])
}









//  const saga = (entity: Entity) => () => {
//     const entityName = entity.constructor.name;
//     console.log('Entity-Name', entityName)

//     if (entityName in Entity.actions) {
//         const methods = Entity.actions[entityName];
//     Object.keys(methods).map(method => {

//         const target = entity[method].bind(entity);

//         const sagaFu = function* () {
//             while (true) {
//                 const data = yield take(method.toUpperCase());
//                 yield fork(target, data);
//             }
//         };
//         Entity.actions[entityName][method].payload = sagaFu;
//     })
//     }
// }

// export default saga

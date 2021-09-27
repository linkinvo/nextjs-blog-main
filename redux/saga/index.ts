import { all, call, fork, take } from "redux-saga/effects"
import properties from 'redux/models/PropertiesSaga'
import identity from '../models/identity';
import users from '../models/UsersSaga'
import reviews from '../models/ReviewsSaga'
import Entity from "redux/models/Entity";


// export  function* rootWatcherr() {
//     yield all(
//     //     [
//     //     call(identity),
//     //     call(propertyEntity.sagas),
//     //     call(users),
//     //     call(reviews),
//     // ]
//     [Entity.actions.forEach(action => {
//         call(action)        
//     })]
//     )
// }


export const rootWatcher = function* root() {
  const sagaAll = Entity.getActions();
  console.log("sagaAll", sagaAll) //test
  yield all(sagaAll.map(saga => call(saga))) 
}
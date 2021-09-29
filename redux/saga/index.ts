import { all, call, fork, take } from "redux-saga/effects"
import Entity from "redux/models/Entity";

export const rootWatcher = function* root() {
  const sagaAll = Entity.getActions();
<<<<<<< HEAD
  console.log("sagaAll", sagaAll) //test
  const tmp = sagaAll.map(saga => call(saga));
  // console.log("tmp",tmp);
  
  yield all(tmp) 
=======
  yield all(sagaAll.map(saga => call(saga))) 
>>>>>>> master
}
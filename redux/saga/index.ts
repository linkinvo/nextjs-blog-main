import { all, call} from "redux-saga/effects"
import Entity from "redux/models/Entity";

export const rootWatcher = function* root() {
  const sagaAll = Entity.getActions();
  yield all(sagaAll.map(saga => call(saga))) 
}
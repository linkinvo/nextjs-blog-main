
import { all, call, put, take, select } from "redux-saga/effects"
import properties from 'redux/models/PropertiesSaga'
import identity from './identity';

export default function* rootWatcher() {
    yield all([
        call(identity),
        call(properties),
    ])
}
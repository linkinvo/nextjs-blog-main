
import { all, call } from "redux-saga/effects"
import properties from 'redux/models/PropertiesSaga'
import identity from '../models/identity';
import users from '../models/UsersSaga'
import reviews from '../models/ReviewsSaga'

export default function* rootWatcher() {
    yield all([
        call(identity),
        call(properties),
        call(users),
        call(reviews),
    ])
}
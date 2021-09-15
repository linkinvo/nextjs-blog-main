import { call, put } from "redux-saga/effects";
import action from "redux/decorators_saga/action";
import { setIdentity } from "redux/action";
import Entity, { HTTP_METHOD } from "./Entity";

export class Identity extends Entity {
    static triggers(): any {
        throw new Error("Method not implemented.");
    }
    constructor() {
        super('Identity');
    }


@action()
    public * loginUser(data: any) {
        const { response } = yield call(this.xFetch, '/login', HTTP_METHOD.POST, data);      
        yield put(setIdentity(response.data));
    }

}

const identity = new Identity();
export default identity;
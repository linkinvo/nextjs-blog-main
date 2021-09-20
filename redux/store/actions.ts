import { Action } from "redux";

export const actionTypes = {
}

export function action(type: string, payload = {}): Action {
    return { type, ...payload };
}


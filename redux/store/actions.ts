import { Action } from "redux";

export const actionTypes = {
}

export function action(type: string, payload = {}): Action {
    return { type, ...payload };
}

export const SET_ALL_DATA_SCHEMA = 'SET_ALL_DATA_SCHEMA';

export const setAllDataAC = (entityName: string, response: any) => action(SET_ALL_DATA_SCHEMA, { entityName, response });
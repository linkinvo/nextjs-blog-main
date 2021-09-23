import { Action } from 'redux';


export function action(type: string, payload = {}): Action {
    return { type, ...payload };
}

export const actionTypes = {
}

export const SET_ALL_DATA_SCHEMA = 'SET_ALL_DATA_SCHEMA';

export const setAllData = (response: any) => action(SET_ALL_DATA_SCHEMA, { response });

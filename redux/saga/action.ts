import { Action } from 'redux';


export function action(type: string, payload = {}): Action {
    return { type, ...payload };
}

export const actionTypes = {
}

export const GET_ALL_DATA_SCHEMA = 'GET_ALL_DATA_SCHEMA';
export const SET_ALL_DATA_SCHEMA = 'SET_ALL_DATA_SCHEMA';



export const getAllDataAC = (data:any) => action(GET_ALL_DATA_SCHEMA, { data });
export const setAllDataAC = (entityName: string, response: any) => action(SET_ALL_DATA_SCHEMA, { entityName, response });
//response: any
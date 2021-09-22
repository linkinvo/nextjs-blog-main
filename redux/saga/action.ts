import { Action } from 'redux';
import Entity from 'redux/models/Entity';


export function action(type: string, payload = {}): Action {
    return { type, ...payload };
}

export const actionTypes = {
}

export const SET_ALL_DATA_SCHEMA = 'SET_ALL_DATA_SCHEMA';

export const setAllData = (response: any) => action(SET_ALL_DATA_SCHEMA, { response });







// export const action = () => {
//     return (takeTarget: any) => {
//         const entityName = takeTarget.constructor.name;
//         const entityItem = entityName in Entity.actions ? Entity.actions[entityName] : {};
//         Entity.actions[entityName] = entityItem;
//     };
// };
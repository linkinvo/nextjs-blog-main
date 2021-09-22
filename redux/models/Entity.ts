import { action } from "redux/store/actions";
import { schema } from "normalizr";
import { cloneDeep, merge } from 'lodash';

export interface IActionSaga {[entity: string]: {[action: string]: {payload?: () => void; }}}
   //{ payload: any | void }

// export const REQ_RESULT = "REQ_RESULT";
// export const requestResult = (entityName: string, data: any) => action(REQ_RESULT, { entityName, data });

export default class Entity {
  private schema;
  private entityName;
  public static actions: IActionSaga = {};

  constructor(name: string, options: any = {}) {
    this.schema = new schema.Entity(name, options);
    this.entityName = name;
  }


  public static getSagaAll() {
    const list = [];
    Object.keys(Entity.actions).map((entity) => Object.keys(Entity.actions[entity])
        .filter((method) => typeof action[entity][method].saga)      
        .map((method) => list.push(Entity.actions[entity][method].payload()))
    );
    return list;
  }
}

// const initialEntities = cloneDeep({});

// // Updates an entity cache in response to any action with response.entities.
// export function entities(state = initialEntities, action: any) {
//     switch (action.type) {
//         case REQ_RESULT:
//             const { data } = action;
//             console.log("DATA", data)
//             if (data.action.response && data.action.response.entities) {
//                 const { response: { entities } } = action;
//                 if (entities) {
//                     Object.keys(entities).map((entityName) => {
//                         let list = state[entityName];
//                         if (list && list.size > 0) {
//                             Object.keys(data.entities[entityName]).map((id) => list = list.remove(id));
//                         }
//                         const newState = cloneDeep(state);
//                         newState[entityName] = { ...list };
//                     });
//                     return merge(state, data.entities);
//                 }
//             }
//             break;
//     }
//     return state;
// }


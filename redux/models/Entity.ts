import { action } from "redux/store/actions";
import { schema } from "normalizr";

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
        .filter((method) => typeof action[entity][method].payload) 
        .map((method) => list.push(Entity.actions[entity][method].payload()))
    );
    return list;
  }
}

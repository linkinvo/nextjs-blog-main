import { put, select } from 'redux-saga/effects';
import { normalize, schema } from "normalizr";
import { HTTP_METHOD } from "src/common";
import config from '../../config';
import { setAllData, action  } from 'redux/saga/action';

export default class Entity {
  private schema;
  private entityName;
  public static actions: any = [];

  constructor(name: string, options: any = {}) {

    this.schema = new schema.Entity(name, options);
    this.entityName = name;

    this.xFetch = this.xFetch.bind(this);
    this.actionRequest = this.actionRequest.bind(this);
    this.xRead = this.xRead.bind(this);
    this.xSave = this.xSave.bind(this);
    Entity.addAction = Entity.addAction.bind(this);
    Entity.getActions = Entity.getActions.bind(this);
  }

  private xFetch = (endpoint: string, method: HTTP_METHOD, data = {}, token?: string) => {
    let fullUrl = 'http://localhost:3000' + '/api' + endpoint; 
    // config.baseUrl 

    const params: any = {
      method,
      credentials: 'include',
      headers: {
        Authorization: 'bearer ' + token, // get token from cookies
      },
    };

    if (method !== HTTP_METHOD.GET) {
      params['headers']['content-type'] = 'application/json';
      params['body'] = JSON.stringify(data);

    } else {
      const opts = Object.entries(data).map(([key, val]) => key + '=' + val).join('&');
      fullUrl += (opts.length > 0 ? '?' + opts : '');
    }

    return fetch(fullUrl, params)
      .then((response) => {
        return response.json().then((json) => ({ json, response }));
      })
      .then(({ json, response }) =>
        Promise.resolve({
          success: response.ok ? true : false,
          response: json
        })
      );
  }


  protected static addAction(saga) {
    Entity.actions.push(saga);
    console.log("SAGA", saga)
  }

  public static getActions() {
    let sagaList = [];
    
    Entity.actions.push((entity) => {
      Entity.actions[entity]
    }).map((mapV) => sagaList.push(Entity.actions[entity][mapV].saga()))
    
    return sagaList;
  }

  public * actionRequest(endpoint?: string, method?: HTTP_METHOD, data?: any, token?: string){
    const UserToken = token
    console.log("actionRequest")

    // let result = response.data;
        // let result = this.entityName 
    // if (result.success === true && result.response.error === false) {

                const normalizedData = normalize(data, this.schema);
                yield put(setAllData( this.entityName, normalizedData))

            // }

            // if (result.success === true && result.response.error === false) {
            //     const normalizedData = normalize(result.response.data, propertySchema);
            //     yield put(setAllData(normalizedData))
            // }

    // return this.xFetch(endpoint, method, data, UserToken)
    return this.xFetch(endpoint, method, data, UserToken,  );
  }

  public xSave(point: string, data: any = {}, token?: string){
    return this.actionRequest(point, HTTP_METHOD.POST, data, token);
  }

  public xRead(point: string, data: any = {}, method: HTTP_METHOD = HTTP_METHOD.GET, token?: string){
    return this.actionRequest(point, method, data, token);
  }

  public xDelete(point: string, data: any = {}){
    return this.actionRequest(point, HTTP_METHOD.DELETE, data);
  }

  // public static getSagaAll() {
  //   const list = [];
  //   Object.keys(Entity.actions).map((entity) => Object.keys(Entity.actions[entity])
  //       .filter((method) => typeof action[entity][method].payload) 
  //       .map((method) => list.push(Entity.actions[entity][method].payload()))
  //   );
  //   return list;
  // }
}

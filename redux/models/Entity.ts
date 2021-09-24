import { action } from "redux/store/actions";
import { schema } from "normalizr";

import { HTTP_METHOD } from "src/common";
import config from '../../config';

// export interface IActionSaga {[entity: string]: {[action: string]: {payload?: () => void; }}}
   //{ payload: any | void }


export default class Entity {
  private schema;
  private entityName;
  // public static actions: IActionSaga = {};

  constructor(name: string, options: any = {}) {
    this.schema = new schema.Entity(name, options);
    this.entityName = name;
  }


  private xFetch = (endpoint: string,  method: HTTP_METHOD, data = {}, token?: string) => {
  let fullUrl = config.baseUrl + '/api' + endpoint;

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
      fullUrl += (opts.length > 0?'?' + opts:'');
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

// const identity = new Identity();

    public actionRequest = (endpoint: string,  method: HTTP_METHOD, data = {}, token?: string) => {
      
      const UserToken = token

  

      return this.xFetch(endpoint, method, data, UserToken);
    }

    public xSave = (point: string, data: any = {}, token?: string) => {
      return this.actionRequest(point, HTTP_METHOD.POST, data, token);
    }

    public xRead = (point: string, data: any = {}, method: HTTP_METHOD = HTTP_METHOD.GET, token?: string) => {
      return this.actionRequest(point, method, data, token);
    }

    public xDelete = (point: string, data: any = {}) => {
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

import { HTTP_METHOD } from "./common";

const SERVER_URL = 'http://localhost:3000';

// export class Identity  {
//     constructor() {
//         super('Identity');
//     }
// }

function xFetch(endpoint: string,  method: HTTP_METHOD, data = {}, token?: string) {
    let fullUrl = SERVER_URL + '/api' + endpoint;

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

const identity = new Identity();


function actionRequest(endpoint: string,  method: HTTP_METHOD, data = {},) {
    
    const token = identity?.token;  // ??? cookies!

    // document.cookie

    return xFetch(endpoint, method, data, token);
}

export const xSave = (point: string, data: any = {}) => {
    return actionRequest(point, HTTP_METHOD.POST, data);
}

export const xRead = (point: string, data: any = {}, method: HTTP_METHOD = HTTP_METHOD.GET) => {
    return actionRequest(point, method, data);
}

export const xDelete = (point: string, data: any = {}) => {
    return actionRequest(point, HTTP_METHOD.DELETE, data);
}

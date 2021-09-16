export const actionTypes = {
    FAILURE: 'FAILURE',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',

    LOAD_DATA: 'LOAD_DATA',
    LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
    
    HYDRATE: 'HYDRATE',
     //LOGIN_INTERFACE
     BTN_LOGIN_CLICK: 'BTN_LOGIN_CLICK',

//userReducer
    SET_USER_INFO: 'SET_USER_INFO',

      //propertiesReducer
      SET_PROPERTIES_INFO: 'SET_PROPERTIES_INFO',
      GET_PROPERTIES_INFO: 'GET_PROPERTIES_INFO',
      GET_SINGLE_PROPERTY_INFO : 'GET_SINGLE_PROPERTY_INFO',
      SET_SINGLE_PROPERTY_INFO : 'SET_SINGLE_PROPERTY_INFO',
}

export function failure(error) {
    return {
        type: actionTypes.FAILURE,
        error,
    }
}

export function increment() {
    return { type: actionTypes.INCREMENT}
}

export function decrement() {
    return { type: actionTypes.DECREMENT}
}

export function loadData() {
    return { type: actionTypes.LOAD_DATA}
}

export function loadDataSuccess(data) {
    return { type: actionTypes.LOAD_DATA_SUCCESS, data}
}
 

export function setUserInfo(payload: any, token: string) {
    return {
        type: actionTypes.SET_USER_INFO,
        payload,
        token
    }
}

export function btnLoginClick(payload: any) {
    return {
        type: actionTypes.BTN_LOGIN_CLICK,
        payload,
    }
}

export function getPropertiesInfo() {
    return {
        type: actionTypes.GET_PROPERTIES_INFO,
    }
}

export function setPropertiesInfo(payload: any) {
    return {
        type: actionTypes.SET_PROPERTIES_INFO,
        payload
    }
}

export function getSinglePropertyInfo(payload: any) {
    console.log("$$$$$$", payload)
    return {
        type: actionTypes.GET_SINGLE_PROPERTY_INFO,
        payload,
    }
}
export function setSinglePropertyInfo(payload: any) {
    return {
        type: actionTypes.SET_SINGLE_PROPERTY_INFO,
        payload,
    }
}
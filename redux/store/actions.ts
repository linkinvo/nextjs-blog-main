export const actionTypes = {
    FAILURE: 'FAILURE',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',

    LOAD_DATA: 'LOAD_DATA',
    LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
    
    HYDRATE: 'HYDRATE',
    BTN_CLICK: 'BTN_CLICK' 
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
 

export function btnClick(data: any) {
    return { type: actionTypes.BTN_CLICK,
        data
    }
}
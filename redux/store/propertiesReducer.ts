import { SET_PROPERTIES_INFO, SET_SINGLE_PROPERTY_INFO } from './../models/PropertiesSaga';

const initialState = {
    properties: [],
    property: '',
}

function propertiesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROPERTIES_INFO: {
            return {
                ...state,
                properties: action.payload
            }
        }
        case SET_SINGLE_PROPERTY_INFO: {
            return {
                ...state,
                property: action.payload
            }
        }

        default:
            return state
    }
}

export default propertiesReducer;
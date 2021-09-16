import { actionTypes } from "./actions";

const initialState = {
    properties: [],
    property: '',
}

function propertiesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_PROPERTIES_INFO: {
            return {
                ...state,
                properties: action.payload
            }
        }
        case actionTypes.SET_SINGLE_PROPERTY_INFO: {
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
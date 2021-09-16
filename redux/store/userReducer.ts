import { actionTypes } from "./actions";

const initialState = {
    id: '',
    email: '',
    role: '',
    phone: '',
    firstName: '',
    lastName: '',
    error: false,
    userToken: ''
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_USER_INFO: {
            return {
                ...state,
                ...action.payload,
                userToken: action.token
            }
        }

        default:
            return state
    }
}

export default userReducer;
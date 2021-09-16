import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    error: false,
    lastUpdate: 0,
    light: false,
    placeholderData: null,
}

function fetchUsersReducer(state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload }
        }

        case actionTypes.FAILURE:
            return {
                ...state,
                ...{ error: action.error },
            }

        case actionTypes.LOAD_DATA_SUCCESS:
            return {
                ...state,
                ...{ placeholderData: action.data },
            }

        default:
            return state
    }
}

export default fetchUsersReducer
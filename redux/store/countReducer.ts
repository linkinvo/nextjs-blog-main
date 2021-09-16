import { HYDRATE } from "next-redux-wrapper";
import { actionTypes } from './actions'

const initialState = {
    count: 0,
    error: false,
    lastUpdate: 0,
}

function countReducer(state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload }
        }
        case actionTypes.FAILURE:
            return {
                ...state,
                ...{ error: action.error },
            }
        case actionTypes.INCREMENT:
            return {
                ...state,
                ...{ count: state.count + 1 },
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                ...{ count: initialState.count },
            }

        default:
            return state
    }
}

export default countReducer
import { IProperty } from 'src/common';
import { SET_ALL_PROPERTIES, SET_PROPERTY_BY_ID } from '../models/PropertiesSaga';

// interface IPropertyState {
//     items: Array<IProperty>
// }

// const initialState: IPropertyState = {
//     items: []
// }

// function properties(state = initialState, action) {
//     switch (action.type) {
//         case SET_ALL_PROPERTIES: {
//             return {
//                 ...state,
//                 items: [...action.properties]
//             }
//         }
//         case SET_PROPERTY_BY_ID: {
//             return {
//                 ...state,
//                 items: [...state.items, action.property]
//             }
//         }

//         default:
//             return state
//     }
// }

// export default properties;
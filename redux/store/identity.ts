import { SET_USER_INFO } from "redux/models/identity";
import { IIdentity } from "src/common";

const initialState: IIdentity = {
  id: -1,
  email: "",
  role: "",
  phone: "",
  firstName: "",
  lastName: "",
  userToken: "",
};

function identity(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO: {
      return {
        ...state,
        ...action.identity,
        userToken: action.token,
      };
    }
    default:
      return state;
  }
}

export default identity;

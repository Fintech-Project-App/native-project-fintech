import {USER_LOGIN} from '../actions/actionTypes';
const initialValues = {
  token: '',
  isLogin: false,
  dataProfile: {},
};

export default function userData(state = initialValues, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogin: true,
        ...action.payload,
      };
    default:
      return state;
  }
}

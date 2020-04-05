import {
  USER_LOGIN,
  USER_LOGOUT,
  UPDATE_PROFILE,
  HISTORY_TOPUP,
} from '../actions/actionTypes';
const initialState = {
  token: '',
  isLogin: false,
  dataProfile: {},
  dataHistory: [],
};

export default function userData(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogin: true,
        ...action.payload,
      };
    case USER_LOGOUT:
      return initialState;
    case UPDATE_PROFILE:
      return {
        ...state,
        dataProfile: action.payload,
      };
    case HISTORY_TOPUP:
      return {
        ...state,
        dataHistory: action.payload,
      };
    default:
      return state;
  }
}

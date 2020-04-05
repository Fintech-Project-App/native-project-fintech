import { HISTORY_TOPUP, HISTORY_TRANSACTION, CLEAR_HISTORY } from '../actions/actionTypes';
const initialState = {
  dataHistory: [],
  dataTransaction: [],
};

export default function historyData(state = initialState, action) {
  switch (action.type) {
    case HISTORY_TOPUP:
      return {
        ...state,
        dataHistory: action.payload,
      };
    case HISTORY_TRANSACTION:
      return {
        ...state,
        dataTransaction: action.payload,
      };
    case CLEAR_HISTORY:
      return initialState
    default:
      return state;
  }
}

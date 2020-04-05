import { combineReducers } from 'redux';
import userData from '../reducers/userDataReducers';
import historyData from '../reducers/historyData';
export default combineReducers({ userData, historyData });

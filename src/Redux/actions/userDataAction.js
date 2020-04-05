import {
  USER_LOGIN,
  USER_LOGOUT,
  UPDATE_PROFILE,
  USER_CHANGE_PASSWORD,
  HISTORY_TOPUP,
  HISTORY_TRANSACTION,
} from './actionTypes';
import { getData, submitData, patchData } from '../../Helpers/CRUD';

export const userLogin = (data) => async (dispatch) => {
  try {
    const response = await submitData('login', data);
    if (response.data && response.data.success) {
      await dispatch({
        type: USER_LOGIN,
        payload: response.data.data,
      });
    }
    return response;
  } catch (err) {
    throw err;
  }
};
export const userLogout = () => async (dispatch) => {
  await dispatch({
    type: USER_LOGOUT,
  });
};
export const updateProfile = () => async (dispatch) => {
  try {
    const response = await getData('profile');
    if (response.data && response.data.success) {
      await dispatch({
        type: UPDATE_PROFILE,
        payload: response.data.data,
      });
    }
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const changePassword = (data) => async (dispatch) => {
  try {
    const response = await patchData('profile', data);
    if (response.data && response.data.success) {
      await dispatch({
        type: USER_CHANGE_PASSWORD,
        payload: response.data,
      });
    }
    return response;
  } catch (err) {
    throw err;
  }
};

export const historyTopup = () => async (dispatch) => {
  try {
    const response = await getData(`history-topup`);
    console.log('data', response.data.data);
    if (response.data && response.data.success) {
      await dispatch({
        type: HISTORY_TOPUP,
        payload: response.data.data,
      });
    }
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const historyTransaction = () => async (dispatch) => {
  try {
    const response = await getData(`history-transaction`);
    if (response.data && response.data.success) {
      await dispatch({
        type: HISTORY_TRANSACTION,
        payload: response.data.data,
      });
    }
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

import { USER_LOGIN, USER_LOGOUT, UPDATE_PROFILE } from './actionTypes';
import { getData, submitData } from '../../Helpers/CRUD';

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

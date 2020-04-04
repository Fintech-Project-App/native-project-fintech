import { USER_LOGIN, USER_LOGOUT, USER_CHANGE_PASSWORD } from './actionTypes';
import { submitData } from '../../Helpers/CRUD';

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

import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import { store } from '../Redux/store';

function getConfig() {
  const config = {};
  const token = store.getState().userData.token;
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return config;
}

export const getData = async (dataUrl, formData) => {
  try {
    const url = API_URL + dataUrl;
    const response = await axios.get(url, getConfig());
    return response;
  } catch (err) {
    throw err;
  }
};
export const submitData = async (dataUrl, formData) => {
  try {
    const url = API_URL + dataUrl;
    const response = await axios.post(url, formData, getConfig());
    return response;
  } catch (err) {
    throw err;
  }
};

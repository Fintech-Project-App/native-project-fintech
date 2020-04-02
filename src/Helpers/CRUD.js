import axios from 'axios';
import {API_URL} from 'react-native-dotenv';

export const submitData = async (dataUrl, formDta) => {
  try {
    const url = API_URL + dataUrl;
    const response = await axios.post(url, formDta);
    return response;
  } catch (err) {
    throw err;
  }
};

export const getData = async (dataUrl, formDta) => {
  try {
    const url = API_URL + dataUrl;
    const response = await axios.get(url);
    return response;
  } catch (err) {
    throw err;
  }
};

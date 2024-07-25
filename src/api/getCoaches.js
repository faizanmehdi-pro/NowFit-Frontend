import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const getCoaches = async () => {
  let result = await api.get(`commission/get_coaches/`);
  return result.data;
};

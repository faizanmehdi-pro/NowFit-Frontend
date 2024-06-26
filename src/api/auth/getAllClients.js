import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const getAllClients = async () => {
  let result = await api.get(`user/users/`);
  return result.data;
};

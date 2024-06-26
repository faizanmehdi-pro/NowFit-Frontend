import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const updateClient = async (credentials) => {
  
  let result = await api.put(`user/users/${credentials.userId}/`, {
    name: credentials.name,
  });
  return result.data;
};


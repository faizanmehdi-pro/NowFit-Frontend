import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const getCommissionClients = async () => {
  const userID = localStorage.getItem("user_id");
  let result = await api.get(`commission/get_clients/?user_id=${userID}`);
  return result.data;
};

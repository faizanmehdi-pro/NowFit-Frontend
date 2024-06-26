import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const stripe = async (credentials) => {
  
console.log("object", credentials)

  let result = await api.post('commission/connect_stripe/', {
    user_id: credentials.userID,
    return_url: credentials.currentURL
  });
  return result.data;
};


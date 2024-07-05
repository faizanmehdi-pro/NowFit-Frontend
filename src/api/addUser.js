import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const addUser = async (credentials) => {
  
console.log("object", credentials)

  let result = await api.post('user/users/', {
    name: credentials.name,
    email: credentials.email,
    phone: credentials.phone,
    account_name: credentials.business_name,
    commission_rate: credentials.commission_rate,
    description: credentials.description,
    password: credentials.password,
    is_coach: credentials.is_coach
  });
  return result.data;
};


import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 


export const addClient = async (credentials) => {
  
console.log("object", credentials)

  let result = await api.post('commission/create_client/', {
    user_id: credentials.user_id,
    email: credentials.email,
    phone: credentials.phone,
    first_name: credentials.first_name,
    last_name: credentials.last_name,
    date_of_birth: credentials.date_of_birth,
    address: credentials.address,
    city: credentials.city,
    state: credentials.state,
    country: credentials.country,
    postal_code: credentials.postal_code
  });
  return result.data;
};


import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
});

export const addCoach = async (credentials) => {
  
  const token = localStorage.getItem('token')
  console.log("object", credentials);

  let formData = new FormData();
  formData.append('first_name', credentials.first_name);
  formData.append('last_name', credentials.last_name);
  formData.append('email', credentials.email);
  formData.append('phone', credentials.phone);
  formData.append('commission_rate', credentials.commissionPercentage);
  formData.append('password', credentials.password);
  formData.append('type', credentials.userType);
  formData.append('role', credentials.userRole);
  formData.append('locations', credentials.multiSelectField);

  try {
    let result = await api.post('commission/create_coaches/', formData, {
      headers: {
        // 'Authorization': token,
        'Content-Type': 'multipart/form-data',
        'Accept': '*/*'
      }
    });
    
    console.log("API Response:", result);
    return result.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

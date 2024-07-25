import axios from 'axios';

const baseURL = 'https://rest.gohighlevel.com/v1/';

const api = axios.create({
    baseURL: baseURL,
}); 

export const deleteCoach = async (id) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiWlJHOEJaRkpsUkdUd3BXdkR6UXciLCJ2ZXJzaW9uIjoxLCJpYXQiOjE3MTkyMDc5MTUxNDgsInN1YiI6IlpVSjhJQkpGZW5vTk5IUU5hU0tPIn0.UeFQVc_VF4YsGDcpF3RehXjKnXtOU8EbcW6cg2eXehY';
  console.log("token", token);
  try {
    const response = await api.delete(`users/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'PostmanRuntime/7.40.0',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting coach:', error.response ? error.response.data : error.message);
    throw error;
  }
};

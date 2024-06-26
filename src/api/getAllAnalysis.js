import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const getAllAnalysis = async () => {
  let result = await api.get(`commission/admin_dashboard_analytics/`);
  return result.data;
};

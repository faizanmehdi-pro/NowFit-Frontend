// utils/auth.js
export const isTokenValid = () => {
    const token = localStorage.getItem('token');
    // Add logic to validate the token
    return token !== null && token !== ''; // Simplified for example
  };
  
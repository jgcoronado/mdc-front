import axios from 'axios';

const API_URL = `http://localhost:3000/login`;

export const login = async (credentials) => {
  console.log("🚀 ~ login ~ credentials:", credentials)
  const response = await axios.post(`${API_URL}`, credentials);
  console.log("🚀 ~ login ~ response.data:", response.data)
  if (response.data.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};
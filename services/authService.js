// import api from '../utils/api';

export const login = async (credentials) => {
  // const response = await api.post('/auth/login', credentials);
  // return response.data;
};

export const logout = () => {
  localStorage.removeItem('authToken');
};

export const changePassword = async (data) => {
  // const response = await api.put('/auth/password', data);
  // return response.data;
};
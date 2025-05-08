// src/api/api.js
import axios from 'axios';

const BASE_URL = 'http://192.168.1.20:9090'; // Replace with your API base URL

// Set up axios instance (optional but good practice)
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add Authorization here if needed:
    // Authorization: `Bearer ${token}`
  },
});

// API functions
export const userLogin = (data) => apiClient.post('/api/auth/login', data);
export const getUsers = () => apiClient.get('/users');
export const getUserById = (id) => apiClient.get(`/users/${id}`);
export const createUser = (data) => apiClient.post('/api/users', data);
export const updateUser = (id, data) => apiClient.put(`/users/${id}`, data);
export const deleteUser = (id) => apiClient.delete(`/users/${id}`);

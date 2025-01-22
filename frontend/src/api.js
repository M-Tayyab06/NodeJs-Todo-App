import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getTodos = async () => {
  const response = await axios.get(`${API_URL}/todos`);
  return response.data;
};

export const addTodo = async (task) => {
  const response = await axios.post(`${API_URL}/todos`, { task });
  return response.data;
};
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

export const getAllItems = async () => {
  const response = await axios.get(`${BASE_URL}/planets`);
  return response.data;
};

export const addItem = async (item) => {
  const response = await axios.post(`${BASE_URL}/planets`, item);
  return response.data;
};

export const editItem = async (item) => {
  const response = await axios.put(`${BASE_URL}/planets/${item._id}`);
  return response.data;
};

export const deleteItem = async (itemId) => {
  const response = await axios.delete(`${BASE_URL}/planets/${itemId}`);
  return response.data;
};

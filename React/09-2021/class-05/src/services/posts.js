import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const axiosAllPosts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const fetchAllPosts = async () => {
  const initResponse = await fetch(BASE_URL);
  const trueResponse = await initResponse.json();
  return trueResponse;
};

export const fetchAddPost = async (post) => {
  const initResponse = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  const trueResponse = await initResponse.json();
  return trueResponse;
};

export const axiosAddPost = async (post) => {
  const response = await axios.post(BASE_URL, post);
  return response.data;
};

import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) =>
  axios.post(`${URL}/posts/update`, payload);
// get prodcut
// get, post, delete, update cart
// get bill
// get,post, update information user
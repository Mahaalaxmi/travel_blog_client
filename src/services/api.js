import axios from "axios";
const API = import.meta.env.VITE_API;
const getBlogs = () => axios.get(`${API}/blogs/`);
const getBlogbyID = (id) => axios.get(`${API}/blogs/view/${id}`);
const addBlog = (blogdata) => axios.post(`${API}/blogs/`, blogdata);
const editBlog = (id, blogdata) =>
  axios.put(`${API}/blogs/update/${id}`, blogdata);
const deleteBlog = (id) => axios.delete(`${API}/blogs/delete/${id}`);
const signup = (userdata) => axios.post(`${API}/users/register`, userdata);
const login = (credentials) => axios.post(`${API}/users/login`, credentials);
export { getBlogs, getBlogbyID, addBlog, editBlog, deleteBlog, signup, login };

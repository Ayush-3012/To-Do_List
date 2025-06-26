import axios from "axios";

export const getAllTodos = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}`);
  return res.data;
};

export const saveTodo = async ({ title }) => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}`, {
    title,
  });
  return res.data;
};

export const updateTodo = async (id) => {
  const res = await axios.put(`${import.meta.env.VITE_API_URL}/${id}`);
  return res.data;
};

export const deleteTodo = async (id) => {
  const res = await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
  return res.data;
};

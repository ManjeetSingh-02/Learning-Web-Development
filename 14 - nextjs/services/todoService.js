import axios from 'axios';

const API_URL = '/api/todos';

export const todoService = {
  getAllTodos: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getTodoByTitle: async title => {
    try {
      const response = await axios.get(`${API_URL}/${title}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createTodo: async todo => {
    try {
      const response = await axios.post(API_URL, todo);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

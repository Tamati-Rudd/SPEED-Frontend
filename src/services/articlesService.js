import axios from "axios";

/**
 * Helper functions to call the backend
 * @param {*}  
 * @returns reusable functions
 */
export const addArticle = async (article) => {
  return axios.post("http://localhost:4000/moderate", article);
};

export const getArticle = async () => {
  return axios.get("http://localhost:4000/moderate");
};

export const moderateArticle = async (id) => {
  return axios.put(`http://localhost:4000/moderate/moderateArticles${id}`);
};

export const deleteArticle = async (id) => {
  return axios.delete(`http://localhost:4000/moderate/moderateArticles${id}`);
};

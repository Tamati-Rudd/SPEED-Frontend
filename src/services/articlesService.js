import axios from "axios";

/**
 * Helper functions to call the backend
 * @param {*}  
 * @returns reusable functions
 */
export const addArticle = async (article) => {
  return axios.post("https://speed-backend-team7.herokuapp.com/moderate", article);
};

export const getArticle = async () => {
  return axios.get("https://speed-backend-team7.herokuapp.com/moderate");
};

export const moderateArticle = async (id) => {
  return axios.put(`https://speed-backend-team7.herokuapp.com/moderate/moderateArticles${id}`);
};

export const deleteArticle = async (id) => {
  return axios.delete(`https://speed-backend-team7.herokuapp.com/moderate/moderateArticles${id}`);
};

import axios from "axios";

export const addArticle = async (article) => {
  return axios.post("http://localhost:4000/moderate", article);
};

export const getArticle = async () => {
  return axios.get("http://localhost:4000/moderate");
};

export const moderateArticle = async (id) => {
  return axios.get(
    `http://localhost:4000/moderate/moderateArticles/accepted/${id}`
  );
};

export const deleteArticle = async (id) => {
  return axios.get(
    `http://localhost:4000/moderate/moderateArticles/rejected/${id}`
  );
};

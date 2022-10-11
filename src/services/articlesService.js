import axios from "axios";
import {config} from "../Config";

export const addArticle = async (article) => {
  return axios.post("http://localhost:4000/moderate", article);
};

export const getArticle = async () => {
  return axios.get("http://localhost:4000/moderate");
};

export const moderateArticle = async (id) => {
  return axios.put(
    `${config.expressUrls.REJECT_ARTICLE}/${id}`
  );
};

export const deleteArticle = async (id) => {
  return axios.get(
    `${config.expressUrls.REJECT_ARTICLE}/${id}`
  );
};

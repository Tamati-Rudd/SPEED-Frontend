import axios from "axios";
import { config } from "./Config"
/**
 * This file exports reusable functions used to call the backend
 * @param {*} articleData 
 * @returns 
 */

export async function submitArticle(articleData) {
    try {
        let response = await axios.post(config.expressUrls.SUBMIT_ARTICLE, articleData, { timeout: 10000 });
        if (response.status === 201) {
            return 0;
        }
    } catch (error) { //500 or other error
        console.error(error);
        console.error("Network or server error");
        return 1;
    }
}

export async function ViewArticle(year) {
    try {
        let response = await axios.get(`${config.expressUrls.VIEW_ARTICLE}/${year}`, { timeout: 10000 });
        if (response.status === 200) {
            return response;
        }
    } catch (error) { //500 or other error
        if (error.response.status === 404) {
            alert(error.response.message);
            return 1;
        } else {
            alert("Network or server error");
            return 2;
        }

    }
}

export async function moderateArticle(articleData) {
    let data = { "title": articleData }
    try {
        let response = await axios.get(config.expressUrls.MODERATE_VIEW_ARTICLE, data, { timeout: 10000 });
        if (response.status === 201) {
            return 0;
        }
    } catch (error) { //500 or other error
        console.error(error);
        console.error("Network or server error");
        return 1;
    }
}
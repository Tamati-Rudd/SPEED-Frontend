import axios from "axios";
import { config } from "../Config"

//This file exports reusable functions used to call the backend

/**
 * Submit an article for moderation
 * @param {*} articleData article to submit
 * @returns whether the article was submitted for moderation
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

/**
 * Retrieve article data for viewing
 * @param {*} year 
 * @returns article, or an error state
 */
export async function ViewArticle() {
    try {
        let response = await axios.get(`${config.expressUrls.VIEW_ARTICLE}`, { timeout: 10000 });
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

/**
 * Retrieve all accepted articles for analysis
 * @returns accepted article array, or an error state
 */
export async function retrieveAcceptedArticles() {
    try {
        let response = await axios.get(config.expressUrls.ANALYSE_RETRIEVE_ARTICLES, { timeout: 10000 });
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) { //500 or other error
        console.error(error);
        if (error.response.status === 404) {
            alert(error.response.data);
            return 1;
        } else {
            alert("Network or server error");
            return 2;
        }
    }
}

/**
 * Submit an analysed article, making it viewable (searchable) on SPEED
 * @param {*} articleData analysed article data
 * @returns whether the article is now viewable
 */
export async function submitAnalysis(articleData) {
    try {
        let response = await axios.post(config.expressUrls.ANALYSE_SUBMIT, articleData, { timeout: 10000 });
        if (response.status === 201) {
            return 0;
        }
    } catch (error) { //500 or other error
        console.error(error);
        alert(error.response.message);
        return 1;
    }
}
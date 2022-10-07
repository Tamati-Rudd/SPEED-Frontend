//Set configuration for communication with the express backend based on app environment

//URL roots
const prodRoot = 'https://speed-backend-team7.herokuapp.com';
const devRoot = 'http://localhost:4000';

//Full URLs for Heroku express backend
const prod = {
    expressUrls: {
        SUBMIT_ARTICLE: `${prodRoot}/submit/save`,
        MODERATE_VIEW_ARTICLE: `${prodRoot}/moderate/moderateArticles`,
        ACCEPT_ARTICLE: `${prodRoot}/moderate/moderateArticles/accepted`,
        REJECT_ARTICLE: `${prodRoot}/moderate/moderateArticles/rejected`,
        VIEW_ARTICLE: `${prodRoot}/articles/view`
    }
};

//Full URLs for development express backend
const dev = {
	expressUrls: {
        SUBMIT_ARTICLE: `${devRoot}/submit/save`,
        MODERATE_VIEW_ARTICLE: `${devRoot}/moderate/moderateArticles`,
        ACCEPT_ARTICLE: `${devRoot}/moderate/moderateArticles/accepted`,
        REJECT_ARTICLE: `${devRoot}/moderate/moderateArticles/rejected`,
        VIEW_ARTICLE: `${devRoot}/articles/view`
    }
};

//Export depending on app environment
export const config = process.env.NODE_ENV === 'development' ? dev : prod;
import axios from "axios";

export async function submitArticle(articleData) {
    let data = {"title":articleData}
    try {
        let response = await axios.post("http://localhost:4000/submit/save", data, { timeout: 10000 });
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
            let response = await axios.get(`http://localhost:4000/articles/view/${year}`, { timeout: 10000 });
            if (response.status === 200) {
                return response;
            } 
        } catch (error) { //500 or other error
            if (error.response.status === 404) {
                alert(error.response.message);
            return 1;
        }else{
            alert("Network or server error");
            return 2;
        }

    }
}

    export async function moderateArticle(articleData) {
        let data = {"title":articleData}
        try {
            let response = await axios.get("http://localhost:4000/moderate/moderateArticles", data, { timeout: 10000 });
            if (response.status === 201) {
                return 0;
            } 
        } catch (error) { //500 or other error
            console.error(error);
            console.error("Network or server error");
            return 1;
        }
}
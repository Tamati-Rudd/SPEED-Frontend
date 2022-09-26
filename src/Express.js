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

    export async function ViewArticle(articleData) {
        let data = {"title":articleData}
        try {
            let response = await axios.get("http://localhost:4000/articles/view", data, { timeout: 10000 });
            if (response.status === 201) {
                return 0;
            } 
        } catch (error) { //500 or other error
            console.error(error);
            console.error("Network or server error");
            return 1;
        }
    }
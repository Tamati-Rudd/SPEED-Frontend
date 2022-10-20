
// example of a user uploads a file to the site
let userUpload = "file.bibtex";

// checking if the user has uplad a file and it is not empty
function uploadArticlesTester() {
    if(uploadArticles(userUpload) !== '') {
        console.log("✔ Test Passed"); // if test has passed
    }else{
        console.error("❌ Test Failed"); // if test has failed
    }
}
// simple check if the user has uploaded a file and returns
function uploadArticles(uploadInput) {
    return uploadInput;
}


// unit testing making sure that the simple test works properly
uploadArticlesTester();

//export the file so that jest can test the file contents
module.exports = uploadArticles;
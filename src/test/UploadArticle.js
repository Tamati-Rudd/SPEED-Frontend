
// example of a user input to the serach bar
let userUpload = "userupload";

// checking if the user has input field
function uploadArticlesTester() {
    if(uploadArticles(userUpload) !== '') {
        console.log("✔ Test Passed"); // if test has passed
    }else{
        console.error("❌ Test Failed"); // if test has failed
    }
}
// function to check that the usre has input and return the user input
function uploadArticles(uploadInput) {
    return uploadInput;
}


// unit testing making sure that the simple test works properly
uploadArticlesTester();

//export the file so that jest can test the file contents
module.exports = uploadArticles;
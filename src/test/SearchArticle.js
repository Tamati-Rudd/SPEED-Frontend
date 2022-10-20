
// example of a user input to the serach bar
let publicationYearInput = "2019";

// checking if the user has input field
function serachArticlesTester() {
    if(serachArticles(publicationYearInput) !== '') {
        console.log("✔ Test Passed"); // if test has passed
    }else{
        console.error("❌ Test Failed"); // if test has failed
    }
}
// function to check that the user has input and reuturn the user input
function serachArticles(publicationYearUserInput) {
    return publicationYearUserInput;
}


// unit testing making sure that the simple test works properly
serachArticlesTester();

//export the file so that jest can test the file contents
module.exports = serachArticles;
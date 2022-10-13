
// example of a user input to the serach bar
let userinput = "articlename";

// checking if the user has input field
function serachArticlesTester() {
    if(serachArticles(userinput) !== '') {
        console.log("✔ Test Passed"); 
    }else{
        console.error("❌ Test Failed");
    }
}

function serachArticles(input) {
    return input;
}


// unit testing making sure that the simple test works properly
serachArticlesTester();

module.exports = serachArticles;
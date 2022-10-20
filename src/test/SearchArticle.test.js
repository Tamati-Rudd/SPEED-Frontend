//using the searchArticle file 
const serachArticles = require('./SearchArticle');


//Search: test is to search for the year in the articles
//serach article is example of the users input
//toMatch is to check in the database and see if there is a match with the user input
test("Year is found",() => {
expect(serachArticles("2019")).toMatch('2019');
})


//using the searchArticle file 
const serachArticles = require('./SearchArticle');


//title: would be where the article would be outputted 
// tobedefied is making sure that the searchArticle has data comming out
// and that the function used has data
test("article is found",() => {
expect(serachArticles("title: Today")).toBeDefined();
})


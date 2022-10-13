//using the serachartucle file 
const serachArticles = require('./test/SearchArticle');


//title: would be where the article would be outputted 
// tobedefied is making sure that the serachartucle has data comming out
// and that the function used has data
test("article is found",() => {
expect(serachArticles("title: Today")).toBeDefined();
})


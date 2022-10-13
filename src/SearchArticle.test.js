const serachArticles = require('./test/SearchArticle');

test("article is found",() => {
expect(serachArticles("title: Today")).toBeDefined();
})


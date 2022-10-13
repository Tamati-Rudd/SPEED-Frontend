//using the uploadArticle file 
const uploadArticles = require('./UploadArticle');


//file: would be if the user upload the articles
// tobedefied is making sure that the file has been uploaded
test("article is uploaded",() => {
expect(uploadArticles("file")).toBeDefined();
})

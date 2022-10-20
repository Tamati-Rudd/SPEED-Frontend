//using the uploadArticle file 
const uploadArticles = require('./UploadArticle');


//file: would be if the user upload the articles
//upload article is when the user uploads a file ot the site
// tobedefied is making sure that the file has been uploaded
test("article is uploaded",() => {
expect(uploadArticles("file.bibtex")).toBeDefined();
})

const books = [
   {
      author: "A1",
      title: "Book1",
      pages: 1000,
      publishedAt: "2018-09-03T08:25:42.175Z"
   },
   {
      author: "A1",
      title: "Book2",
      pages: 1000,
      publishedAt: "2019-09-03T08:25:42.175Z"
   },
   {
      author: "A1",
      title: "Book3",
      pages: 1000,
      publishedAt: "2020-09-03T08:25:42.175Z"
   },
   {
      author: "A2",
      title: "Book1",
      pages: 1000,
      publishedAt: "2020-09-03T08:25:42.175Z"
   }
];

// group the collection of books by author name
const groupedData = groupBy(books, "author")


//complete the following function
function groupBy(collection, field) {
const unique = [...new Set(collection.map(item => item[field]))]; 
  let requiredArray=[]; 
  for (let i = 0; i<unique.length; i++){
   for (let j=0; j<collection.length; j++){
    if(collection[j][field] == unique[i])
    	console.log("Author "+ (i+1) +" book")
      console.log(collection[j].title)
   }
  }
  
}
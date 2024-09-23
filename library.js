const library = [];

function Book(title) {
  this.title = title;
}

function addBookToLibrary(book, target) {
  target.push(book);
}

const book = new Book("The Lord of the Rings");
const anotherBook = new Book("The Hobbit");

addBookToLibrary(book, library);
addBookToLibrary(anotherBook, library);

console.log(library);

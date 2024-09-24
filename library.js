const library = [];

function Book(title) {
  this.title = title;
}

function addBookToLibrary(book, library) {
  library.push(book);
}

const book = new Book("The Lord of the Rings");
const anotherBook = new Book("The Hobbit");

addBookToLibrary(book, library);
addBookToLibrary(anotherBook, library);

function render() {
  const container = document.querySelector("#library");
  for (let book of library) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = book.title;
    container.appendChild(card);
  }
}

render();

const dialog = document.querySelector("dialog");
const openDialog = document.querySelector("#open-dialog");
openDialog.addEventListener("click", () => {
  dialog.showModal();
});

const closeDialog = document.querySelector("#close-dialog");
closeDialog.addEventListener("click", () => {
  dialog.close();
});

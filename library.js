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

function renderLibrary() {
  const template = document.querySelector("#book-template");
  const container = document.querySelector("#library");
  container.innerHTML = "";

  library.forEach((book, i) => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".title").textContent = book.title;
    clone.querySelector(".author").textContent = book.author;
    clone.querySelector(".pages").textContent = book.pages;
    clone.querySelector(".toggle").dataset.index = i;
    clone.querySelector(".remove").dataset.index = i;

    container.appendChild(clone);
  });
}

renderLibrary();

const dialog = document.querySelector("dialog");
const openDialog = document.querySelector("#open-dialog");
openDialog.addEventListener("click", () => {
  dialog.showModal();
});

const closeDialog = document.querySelector("#close-dialog");
closeDialog.addEventListener("click", () => {
  dialog.close();
});

const library = [
  {
    title: "The Fellowship of the Ring",
    author: "J. R. R. Tolkien",
    pages: 423,
    status: true,
  },
  {
    title: "The Two Towers",
    author: "J. R. R. Tolkien",
    pages: 352,
    status: true,
  },
  {
    title: "The Return of the King",
    author: "J. R. R. Tolkien",
    pages: 416,
    status: false,
  },
  { title: "The Hobbit", author: "J. R. R. Tolkien", pages: 310, status: true },
];

function Book(title, author, pages, status = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(book, library) {
  library.push(book);
}

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

const form = document.querySelector("#book-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const status = formData.get("status") === "on";

  const book = new Book(title, author, pages, status);
  addBookToLibrary(book, library);

  renderLibrary();
});

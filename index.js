const myLibrary = [];
const grid = document.querySelector(".grid");
const btn = document.querySelector("#btn");

const colors = ["#e63946", "#f1faee", "#a8dadc", "#457b9d", "#1d3557"];
let colorChooser = 0;

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}
// function addBookToDisplay(book) { }

function addBookToLibrary(book) {
  myLibrary.push(book);
  const div = document.createElement("div");
  div.classList = "book";
  div.style.backgroundColor = colors[colorChooser % 5];
  if (colorChooser % 5 == 1 || colorChooser % 5 == 2) {
    div.style.color = "black";
  } else {
    div.style.color = "white";
  }

  colorChooser++;

  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const pagesDiv = document.createElement("div");

  titleDiv.textContent = "Title :" + book.title;
  authorDiv.textContent = "Author :" + book.author;
  pagesDiv.textContent = "Pages :" + book.pages;
  div.appendChild(titleDiv);
  div.appendChild(authorDiv);
  div.appendChild(pagesDiv);
  grid.appendChild(div);
}

btn.addEventListener("click", () => {
  const title = document.querySelector("#name");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");

  let book1 = new Book(title.value, author.value, pages.value);

  addBookToLibrary(book1);
  console.log(myLibrary, book1, title, author, pages);
});

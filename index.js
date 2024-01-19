const myLibrary = [
  // {
  //   title: "Harry Potter",
  //   author: "J K Rownling",
  //   pages: 300,
  // },
  // {
  //   title: "To Kill a Mocking Bird",
  //   author: "Harper Lee",
  //   pages: 500,
  // },
  // {
  //   title: "The Great Gatsby",
  //   author: "F.Scott Fitzgerald",
  //   pages: 400,
  // },
];

// let sizeOfLibrary = 2;
const grid = document.querySelector(".grid");
const btn = document.querySelector("[formmethod]");
const addBook = document.querySelector("#btn");
const dialog = document.querySelector("dialog");
const title = document.querySelector("#name");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

function removeBook(button) {
  console.log("removeBtn.forEach((button)");
  button.addEventListener("click", (event) => {
    let name = event.target.dataset.name;
    for (let i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i][title] == name) {
        myLibrary.splice(i, 1);
        grid.removeChild(button.parentNode);
      }
    }
  });
}

const colors = ["#e63946", "#f1faee", "#a8dadc", "#457b9d", "#1d3557"];
let colorChooser = 0;

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

// add books in librart array to display
for (let i = 0; i < myLibrary.length; i++) {
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
  titleDiv.textContent = "Title :" + myLibrary[i].title;
  authorDiv.textContent = "Author :" + myLibrary[i].author;
  pagesDiv.textContent = "Pages :" + myLibrary[i].pages;
  div.appendChild(titleDiv);
  div.appendChild(authorDiv);
  div.appendChild(pagesDiv);
  grid.appendChild(div);
}

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
  // div.dataset.booknumber = sizeOfLibrary;
  // sizeOfLibrary++;

  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const pagesDiv = document.createElement("div");
  const remove = document.createElement("button");
  const read = document.createElement("button");

  titleDiv.textContent = "Title :" + book.title;
  authorDiv.textContent = "Author :" + book.author;
  pagesDiv.textContent = "Pages :" + book.pages;
  remove.textContent = "Remove";
  read.textContent = "Read";
  remove.dataset.name = book.title;
  remove.classList = "remove";
  read.dataset.name = book.title;
  read.classList = "read";
  div.appendChild(titleDiv);
  div.appendChild(authorDiv);
  div.appendChild(pagesDiv);
  div.appendChild(remove);
  div.appendChild(read);
  grid.appendChild(div);
  // removeBook(remove);

  remove.addEventListener("click", (event) => {
    console.log("hie");
    console.log(event);
    console.log(event.target);
    console.log(event.target.dataset);
    console.log(event.target.dataset.name);
    let name = event.target.dataset.name;
    for (let i = 0; i < myLibrary.length; i++) {
      console.log(i);
      if (myLibrary[0]["title"] == name) {
        console.log("hi");
        myLibrary.splice(0, 1);
        break;
      }
    }
    grid.removeChild(event.target.parentNode);
  });
}

addBook.addEventListener("click", () => {
  dialog.setAttribute("open", "");
  title.value = "hello";
});
btn.addEventListener("click", () => {
  const title = document.querySelector("#name");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");

  let book1 = new Book(title.value, author.value, pages.value);

  addBookToLibrary(book1);
  console.log(myLibrary, book1, title, author, pages);
  dialog.removeAttribute("open");
});

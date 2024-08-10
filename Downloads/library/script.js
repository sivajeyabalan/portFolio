const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
};

function addBookToLibrary(book) {
  library.push(book);
  displayBooks();
}

function displayBooks() {
  const libraryDiv = document.getElementById('Library');
  libraryDiv.innerHTML = '';

  library.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.dataset.index = index;

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? 'Yes' : 'No'}</p>
      <button onclick="toggleRead(${index})">Toggle Read Status</button>
      <button onclick="removeBook(${index})">Remove Book</button>
    `;

    libraryDiv.appendChild(bookCard);
  });
}

function removeBook(index) {
  library.splice(index, 1);
  displayBooks();
}

function toggleRead(index) {
  library[index].toggleRead();
  displayBooks();
}

document.getElementById('newbook').addEventListener('click', () => {
  const form = document.getElementById('bookform');
  form.classList.toggle('hidden');
});

document.getElementById('bookform').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  document.getElementById('addform').reset();
  document.getElementById('bookform').classList.add('hidden');
});

addBookToLibrary(new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, true));
addBookToLibrary(new Book('Moby Dick', 'Herman Melville', 635, false));
addBookToLibrary(new Book('1984', 'George Orwell', 328, true));

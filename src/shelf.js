function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(book, shelf) {
  splice(shelf.indexOf(book.title), 1);
}

function listTitles() {}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles
  // searchShelf
};

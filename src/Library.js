function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
  return library;
}

function addBook(library, book) {
  var genre = book.genre;
  var shelf = library.shelves[genre];
  shelf.push(book);
}

function checkoutBook(library, title, genre) {
  var shelf = library.shelves[genre];
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
      return `You have now checked out ${title} from the ${library.name}`;
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};

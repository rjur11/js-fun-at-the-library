function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1);
      i--;
    }
  }
}

function listTitles(shelf) {
  var listOfTitles = "";
  for (var i = 0; i < shelf.length; i++) {
    listOfTitles += shelf[i].title;
    if (i < shelf.length - 1) {
      listOfTitles += ", ";
    }
  }
  return listOfTitles;
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

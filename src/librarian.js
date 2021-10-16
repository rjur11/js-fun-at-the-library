function findTitle(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false;
}

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patronName, isMorning) {
    if (isMorning) {
      return `Good morning, ${patronName}!`;
    }
    return `Hello, ${patronName}!`;
  }

  findBook(title) {
    var genres = ["fantasy", "fiction", "nonFiction"];
    for (var i = 0; i < genres.length; i++) {
      if (findTitle(title, this.library.shelves[genres[i]])) {
        return `Yes, we have ${title}`;
      }
    }
    return `Sorry, we do not have ${title}`;
  }
}

module.exports = Librarian;

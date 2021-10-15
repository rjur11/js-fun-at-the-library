function createTitle(title) {
  var title = title;
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {name:name, age:age, pronouns:pronouns};
}

function saveReview(review, reviews) {
 if (!reviews.includes(review)) {
   reviews.push(review);
 }
}

function calculatePageCount(title) {
  return title.length * 20;
}

function writeBook(title, char, genre) {
  return {title: title, mainCharacter: char, pageCount: calculatePageCount(title), genre: genre};
}

function editBook(book) {
  book.pageCount *= .75;
}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
};

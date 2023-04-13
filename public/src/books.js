function findAuthorById(authors, id) {
  let foundAuth = authors.find((authors) => authors.id === id);
  return  foundAuth;
}

function findBookById(books, id) {
  let foundBooks = books.find((books) => books.id === id);
  return  foundBooks;
}


function partitionBooksByBorrowedStatus(books) {
 let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
 let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
 let finalArray = [[...booksBorrowed], [...booksReturned]];
 return finalArray;
}

function getBorrowersForBook(book, accounts) {
 return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

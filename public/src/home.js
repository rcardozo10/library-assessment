function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}


function getBooksBorrowedCount(books) {
 let booksCheckedOut = books.filter(
  (book) =>
   book.borrows.filter((record) => record.returned === false).length > 0
 );
 return booksCheckedOut.length;
}


function getMostCommonGenres(books) {
 let map = {};
 books.forEach((num) => {
  if (map[num.genre]) {
   map[num.genre]++;
  } else {
   map[num.genre] = 1;
  }
 });
 return Object.entries(map)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);
}

function getMostPopularBooks(books) {
  return sliceSort(
    // map method
    books.map(({ title, borrows }) => ({
      name: title,
      count: arrayItemCount(borrows),
    }))
  );
}

function getMostPopularAuthors(books, authors) {
  return sliceSort(authors.map(({ name: { first, last }, id }) => ({
      name: `${first} ${last}`,
      count: authorBooks(books, id), 
    }))
  );
}

// helper function
function sliceSort(arr, slicer = 5) {
  const newArr = [...arr];
  return newArr
    .sort(({ count: count1 }, { count: count2 }) => count2 - count1)
    .slice(0, slicer);
}

//helper function and reduce method
function authorBooks(books, id) {
  return books.reduce((totalBorrows, { authorId, borrows }) => {
    if (authorId === id) totalBorrows += arrayItemCount(borrows);
    return totalBorrows;
  }, 0);
}

// helper function
function arrayItemCount(item) {
  return item.length;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

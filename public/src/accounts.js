function findAccountById(accounts, id) {
  let findId = accounts.find((accounts) => accounts.id===id);
  return findId;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
   accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
 }

function getTotalNumberOfBorrows(account, books) {
let borrowed=0;

for (let i =0; i < books.length;i++){
  for(let j = 0; j<books[i].borrows.length;j++){
    if(account.id===books[i].borrows[j].id){
      borrowed +=1;
    }
  }
}
return borrowed;
}

function getBooksPossessedByAccount(account, books, authors) {
  //filter through each book in books
  return (
    books
      //checking to see if the most recent transaction matches our account and that it hasn't been returned
      .filter(
        (book) => book.borrows[0].id === account.id && !book.borrows[0].returned
      )
      //map through all the filtered books to add the author object to it
      .map((book) => {
        book["author"] = authors.find((author) => author.id === book.authorId);
        return book;
      })
  );
}
 

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

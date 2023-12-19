let books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      year: 1997,
    },
    { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      year: 2005,
    },
  ];
  
  
  let recentBooks = books.filter(book => book.year > 2000);
  
  
  recentBooks.sort((a, b) => a.year - b.year);
  
  
  let recentBookTitles = recentBooks.map(book => book.title);
  
  console.log(recentBookTitles);
  
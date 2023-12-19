const movies = {
    action: ["Die Hard", "John Wick", "The Matrix"],
    comedy: ["The Hangover", "Bridesmaids", "Step Brothers"],
    drama: ["The Shawshank Redemption", "The Godfather", "Schindler's List"],
    horror: ["The Shining", "A Nightmare on Elm Street", "The Exorcist"],
    

    displayMoviesByGenre(genre) {
      const genreMovies = this[genre];
  
      if (genreMovies) {
        console.log(`Фільми у жанрі ${genre}: ${genreMovies.join(", ")}`);
      } else {
        console.log(`Жанр ${genre} не знайдено.`);
      }
    },
  };
  

  movies.displayMoviesByGenre("action");
  movies.displayMoviesByGenre("comedy");
  movies.displayMoviesByGenre("romance");

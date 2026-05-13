
const movies=[
      { title: "The Lion King",  year: 1994, rating: 8.5, watched: true  },
      { title: "Inception",      year: 2010, rating: 8.8, watched: true  },
      { title: "Black Panther",  year: 2018, rating: 7.3, watched: false },
      { title: "Up",             year: 2009, rating: 8.2, watched: true  },
      { title: "Interstellar",   year: 2014, rating: 8.6, watched: false },
   ];
 
movies.forEach(movie => {
  console.log(movie.title);
});

movies.forEach(movies => {
   if(movies.year  > 2010) console.log(movies.title);
});



let count = 0;
movies.forEach(movie => {
  if (movie.watched) count++;
});
console.log(`Watched: ${count}`);



let highestRated = movies[0]; 

movies.forEach(movie => {
  if (movie.rating > highestRated.rating) {
    highestRated = movie;
  }
});
console.log("Highest Rated:", highestRated.title);


let movieString = "";
movies.forEach((movie, index) => {
  movieString += `${movie.title} (${movie.year})`;
  
  if (index < movies.length - 1) {
    movieString += ", ";
  }
});
console.log(movieString);
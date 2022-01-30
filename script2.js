//Verkrijg de <ul> waar de films in worden gezet als <li>
const getUl = document.getElementById("listOfMovies");

//Verkrijg de buttons waarmee je de films kunt filteren
const radioList = document.getElementById('radiobuttons');

//Functie om films toe te voegen aan de DOM
const addMoviesToDom = (movieList)=>{
  getUl.innerHTML= " ";
  movieList.forEach((movie)=>{
    const link = "https://www.imdb.com/title/" + movie.imdbID;
    const newLi = document.createElement("li");
    const newA = document.createElement("a");
    newA.setAttribute('href', link);
    const newImage = document.createElement("img");
    getUl.appendChild(newLi);
    newLi.appendChild(newA);
    newLi.appendChild(newA).appendChild(newImage).src=movie.poster;
  })   
}

addMoviesToDom(movies);

//Functie om de films te filteren, wanneer je filtert op een bepaald woord 
const filterMovies = (wordInMovie) => {
  const movieList = movies.filter((movie) => {
    if(movie.title.includes(wordInMovie)){
     return movie; 
    }   
  })
  addMoviesToDom(movieList);
}

//Functie om te filteren op "Latest movies, 2014 or newer"
const findLatestMovies = () => {
  const movieList = movies.filter((movie) => {
    if(movie.year >= "2014"){
    return movie; 
    }
  })
  addMoviesToDom(movieList);
}

//Functie om de juiste functie aan te roepen, wanneer je een radiobutton 'checked'/ aanvinkt 
const handleOnChangeEvent = (event) =>{
  const getValue = event.target.id;
      switch(getValue) {
      case "avenger":  
          filterMovies("Avenger");
          break;
      case "x-men":
          filterMovies("X-Men");
          break;
      case "princess":
          filterMovies("Princess");
          break;
      case "batman":
          filterMovies("Batman");
          break;
      case "latest":    
          findLatestMovies ();
          break;
      default:"Error";
    }
  } 

 radioList.addEventListener('change', handleOnChangeEvent) 
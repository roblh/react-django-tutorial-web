import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import MovieList from './components/movie-list'
import MovieDetails from './components/movie-details'
import MovieForm from './components/movie-form'

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

  useEffect(()=> {
    fetch("http://127.0.0.1:8001/api/movies/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 0626e5820db17a8ebc01051946f728005f7a925e'
      }
    })
    .then( resp => resp.json())
    .then( resp => setMovies(resp))
    .catch( error => console.log(error))
  }, [])

  const loadMovie = movie => {
    setSelectedMovie(movie);
    console.log(editedMovie)
    setEditedMovie(null)
  }

  const editClicked = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null)
  }

  const logConsole = movie => {
    console.log(movie)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className="layout">
          <MovieList movies={movies} movieClicked={loadMovie} editClicked={editClicked}/>
          <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
          {/* logConsole(editedMovie) */}
          <MovieForm movie={editedMovie}/> 
      </div>
    </div>
  );
}

export default App;

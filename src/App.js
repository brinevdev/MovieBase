import './App.scss';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { Fragment } from 'react';
import NavBar from './components/NavBar/NavBar';
import MovieList from './components/MovieList/MovieList';
import MovieService from './services/MovieServise';

function App() {

  const [movies,setMovies] = useState([]);
  const movieService = new MovieService();
 
  useEffect(()=>{
      movieService.getMovies()
      .then(movies => setMovies(movies))
  },[]);


  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
          <div className="movies">
              <div className="movies__container">
                  <div className="movies__body">
                      <MovieList movies={movies}/>
                  </div>
                  <NavBar/>
              </div>
          </div>
      </main>
    </div>
  );
}

export default App;

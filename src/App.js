import './App.scss';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { Fragment } from 'react';
import NavBar from './components/NavBar/NavBar';
import MovieList from './components/MovieList/MovieList';
import MovieService from './services/MovieServise';

function App() {
  const [params,setParams] = useState([])
  const [movies,setMovies] = useState([]);
  const movieService = new MovieService();
 
  useEffect(()=>{
      movieService.getMovies(params)
      .then(movies => setMovies(movies))
  },[params]);

  const filetrByGenre = (id) => {
    setParams((state)=>{
      return {
        ...state,
       ['with_genres']:id,
      }
    })
  }

  const filterByYear = (year) => {
    setParams((state)=>{
      return {
        ...state,
      ['primary_release_year']:year,
      }
    })
  }

  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
          <div className="movies">
              <div className="movies__container">
                  <div className="movies__body">
                      <MovieList movies={movies}/>
                  </div>
                  <NavBar 
                  filetrByGenre = {filetrByGenre} 
                  filterByYear = {filterByYear}/>
              </div>
          </div>
      </main>
    </div>
  );
}

export default App;

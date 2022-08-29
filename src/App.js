import './App.scss';
import { useEffect, useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import MovieService from './services/MovieServise';
import 'react-toastify/dist/ReactToastify.css';
import {toast } from 'react-toastify';
import  Movies  from './pages/Movies';
import SingleMovie from './pages/SingleMovie/SingleMovie';


function App() {
  let [page,setPage] = useState(1);
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

  const search = (value) => {
   movieService.getMoviesByTitle(value)
   .then(movies => {
    if (movies.length === 0) {
      toast.info("По вашему запросу ничего не найдено", {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      setMovies(movies)
    }
  })
  .catch(console.log('error'));
  }


  const onPageChanged = (i) => {
    if (page + i === 0) return
    setPage(page += i);
    setParams((state)=>{
      return {
        ...state,
        page,
      }
    })
    window.scrollTo(0,0);
  }

  console.log('movies',movies);
  return (
      <Routes>
          <Route 
          path='/' 
          element={<Movies filetrByGenre ={filetrByGenre} 
          filterByYear = {filterByYear} 
          search = {search} 
          onPageChanged = {onPageChanged} 
          movies = {movies} 
          page={page}/>}></Route>
          <Route path = '/movie/:id' element = {<SingleMovie/>}></Route>
          <Route path='*' element = {<h1>Page not found</h1>}></Route>
      </Routes>
  );
}

export default App;

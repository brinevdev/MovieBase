import './App.scss';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { Fragment } from 'react';
import NavBar from './components/NavBar/NavBar';
import MovieList from './components/MovieList/MovieList';
import MovieService from './services/MovieServise';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

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
    <div className="wrapper">
      <Header/>
      <main className="main">
          <div className="movies">
              <div className="movies__container">
                  <div className="movies__body">
                      <MovieList movies={movies}/>
                      <div className="pagination">
                        <button className='pagination__button' onClick={()=>onPageChanged(-1)}>Назад</button>
                          <span className='pagination__page'>{page}</span>
                        <button className='pagination__button' onClick={()=>onPageChanged(1)}>Вперёд</button>
                      </div>
                  </div>
                  <NavBar 
                  filetrByGenre = {filetrByGenre} 
                  filterByYear = {filterByYear}
                  search={search}
                  />
              </div>
          </div>
          <ToastContainer/>
      </main>
    </div>

  );
}

export default App;

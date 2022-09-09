import { useEffect, useState } from 'react';
import MovieService from '../../services/MovieServise';
import { useSearchParams } from 'react-router-dom';
import {toast } from 'react-toastify';
import Movies from './Movies';

 const MoviesContainer = ({setWatchList}) => {
    const [params,setParams] = useState({page:1})
    const [movies,setMovies] = useState([]);
    const [searchParams,setSearchParams] = useSearchParams();
    const movieService = new MovieService();
  
  
  
    const getInitialParams = () => {
      let initialParams = {}
      for (let param of searchParams.entries()){
        params[param[0]] = param[1];
      }
     setParams((state)=>({
      ...state,
      ...initialParams
     }));
    }
  
  
    useEffect(()=> {
        getInitialParams();
      },[])
  
    useEffect(()=>{
        movieService.getMovies(params)
        .then(movies => setMovies(movies))
        setSearchParams(params);
    },[params]);
    
  
    const filetrByGenre = (id) => {
      setParams((state)=>{
        return {
          ...state,
          page:1,
         ['with_genres']:id,
        }
      })
    }
  
    const filterByYear = (year) => {
      setParams((state)=>{
        return {
          ...state,
          page:1,
        ['primary_release_year']:year,
        }
      })
    }
  
    function search(value){
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
      if (params.page + i === 0) return
      setParams((state)=>{
        return {
          ...state,
          page: +state.page + i
        }
      })
      window.scrollTo(0,0);
    } 

    return (
        <Movies filetrByGenre ={filetrByGenre} 
          filterByYear = {filterByYear} 
          search = {search} 
          onPageChanged = {onPageChanged} 
          movies = {movies} 
          page={params.page}
          getInitialParams = {getInitialParams}
          setWatchList = {setWatchList}
          />
    )

}

export default MoviesContainer
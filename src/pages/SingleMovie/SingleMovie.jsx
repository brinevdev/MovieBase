import { useEffect, useState,Fragment } from "react";
import { useParams } from "react-router-dom";
import './singleMovie.scss';
import MovieService from "../../services/MovieServise";
import Header from "../../components/Header/Header";
import ActorList from "../../components/ActorList/ActorList";

const SingleMovie = () => {
    const {id} = useParams('id');
    const movieService = new MovieService()
    const [movie,setMovie] = useState(null)
    
    
    useEffect(()=>{
        movieService.getMovie(id)
        .then(movie =>setMovie(movie));
    },[])


    if (!movie) return (
      <div className="wrapper">
        <Header/>
        <div className="main"> 
          <div className="container">
           <h1>Movie not found</h1>
          </div>
        </div>
      </div>
    )

    const image = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
    return (
    <>
       <div className="wrapper">
          <Header/>
          <div className="main"> 
              <div className="container">
                <div className="movie-description">
                  <div className="movie-description__title">
                    {movie.title}
                  </div>
                  <div className="movie-description__body">
                    <div className="movie-description__poster">
                        <div className="movie-description__image"> 
                          <img src={image} alt=""/>
                        </div>
                        <div className="movie-description__overview">
                          {movie.overview || 'Описание для фильма отсутствует'}
                        </div>
                    </div>
                    <div className="movie-descrption__info info-movie">
                    <div className="info-movie__status"><span className="bold">Рейтинг:</span><span className="green-text">{movie.vote_average || 'Неизвестен'}</span></div>
                      <div className="info-movie__budget"><span className="bold">Бюджет: </span> <span className="green-text">{movie.budget ? movie.budget +' $' : 'Неизвестен'}</span> </div>
                      <div className="info-movie__revenue"><span className="bold">Сборы: </span> <span className="green-text">{movie.revenue ? movie.revenue +' $' : 'Неизвестны'}</span> </div>
                      <div className="info-movie__genre"><span className="bold">Жанры: </span><span className="green-text">{movie.genres.map((genre)=>genre.name).join(', ')}</span></div>
                      <div className="info-movie__company"><span className="bold">Киностудии: </span><span className="green-text">{movie.production_companies.map((company)=>company.name).join(', ')}</span></div>
                      <div className="info-movie__runtime"><span className="bold">Продложительность: </span><span className="green-text">{movie.runtime || 'Неизвестна'} мин. </span></div>
                      <div className="info-movie__release-date"><span className="bold">Дата релиза:</span><span className="green-text">{movie.release_date || 'Неизвестна'}</span></div>
                    </div>
                  </div>
                  <ActorList movieId = {id}/>
                </div>
              </div>
        </div>
       </div>
    </>
    
    )
}

export default SingleMovie;



import './movieList.scss';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({movies}) => {
    
    return (
        <div className="movie__list">
           {movies.map((movie)=>{
            return <MovieCard
            key = {movie.id}
            id = {movie.id} 
            title = {movie.title} 
            poster = {movie.poster} 
            releaseDate = {movie.releaseDate} 
            genres = {movie.genres}
            />
           })}
        </div>
    )
}

export default MovieList;
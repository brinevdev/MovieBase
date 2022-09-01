import './movieList.scss';
import MovieCard from '../MovieCard/MovieCard';


const MovieList = ({movies,setWatchList,isWatchList}) => {
   
    return (
        <div className="movie__list">
           {movies.map((movie)=>{
            return <MovieCard
            key = {movie.id}
            movie = {movie}
            setWatchList = {setWatchList}
            isWatchList = {isWatchList}
            />
           })}
        </div>
    )
}

export default MovieList;
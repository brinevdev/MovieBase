import './movieList.scss';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = () => {

    return (
        <div className="movie__list">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
    )
}

export default MovieList;
import './movieCard.scss';
import { Link } from 'react-router-dom';


const MovieCard = ({id,title,genres,releaseDate,poster}) => {
    const link = `/movie/${id}`;
    return (
        <div className="movies__item movie" data-movie-id={id}>
        <Link to={link} className="movie__image">
            <img src={poster}/>
        </Link>
        <div className="movie__body">
            <Link to={link} className="movie__title">{title}</Link>
            <div className="movie__genre"><span className="bold">Жанр: {genres}</span> </div> 
            <div className="movie__year"><span className="bold">Дата премьеры: {releaseDate}</span></div>
        </div>
        </div>
    )
}

export default MovieCard
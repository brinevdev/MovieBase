import './movieCard.scss';


const MovieCard = ({title,genres,releaseDate,poster}) => {

    return (
        <div className="movies__item movie" >
        <a href='' className="movie__image">
            <img src={poster}/>
        </a>
        <div className="movie__body">
            <a href='' className="movie__title">{title}</a>
            <div className="movie__genre"><span className="bold">Жанр: {genres}</span> </div> 
            <div className="movie__year"><span className="bold">Дата премьеры: {releaseDate}</span></div>
        </div>
        </div>
    )
}

export default MovieCard
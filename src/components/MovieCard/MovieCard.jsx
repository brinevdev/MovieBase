import './movieCard.scss';


const MovieCard = () => {

    return (
        <div className="movies__item movie" >
        <a href='' className="movie__image">
            <img src='https://image.tmdb.org/t/p/w500//6XK6YV0zaewY0JvNt1CZLU3ot8r.jpg'/>
        </a>
        <div className="movie__body">
            <a href='' className="movie__title">Доктор Стрендж</a>
            <div className="movie__genre"><span className="bold">Жанр: Ужасы</span> </div> 
            <div className="movie__year"><span className="bold">Дата премьеры: 28.02.2021</span></div>
        </div>
        </div>
    )
}

export default MovieCard
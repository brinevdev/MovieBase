import './movieCard.scss';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MovieCard = ({movie,setWatchList,isWatchList}) => {
    const {id,title,genres,releaseDate,poster} = movie;
    const link = `/movie/${id}`;
   

    const onAdd = (movie) => {
        setWatchList((state)=> {
            if (state.some((movie)=>movie.id === id)) return state
            toast.success("Добавленно в список просмотра", {
                position: toast.POSITION.TOP_RIGHT
              });
            localStorage.setItem('watchList',JSON.stringify([...state,movie]));

            return [...state,movie,]  
        }
        ) 
    }

    const onDelete = (id) => {
        setWatchList((state)=> {
           localStorage.setItem('watchList',JSON.stringify(state.filter((movie)=>movie.id !== id))); 
           
           return  state.filter((movie)=>movie.id !== id)
        })
        toast.success("Удаленно из списка просмотра", {
            position: toast.POSITION.TOP_RIGHT
          });
    }

    
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
            {isWatchList ? 
            <div className="movie__add" onClick={()=>onDelete(id)}>Удалить из списка просмотра</div>
            :  <div className="movie__add" onClick={()=>onAdd(movie)}>Добавить в список просмотра</div> }
            
            
        </div>
    )
}

export default MovieCard
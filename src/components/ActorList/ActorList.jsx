import './actorList.scss';
import { useState, useEffect } from 'react';
import Actor from '../Actor/Actor';
import MovieService from '../../services/MovieServise';


const ActorList = ({movieId}) => {

    const [actors,setActors] = useState([]);
    const movieService = new MovieService();


    useEffect(()=>{
        movieService.getActors(movieId)
        .then((actors)=>setActors(actors.cast));
    },[])


    return (
        <div className="movie-decription__actors actors">
        <div className="actors__title">В ролях</div>
        <div className="actors__items">
            {actors.map((actor)=>{
                return <Actor key = {actor.id} actor={actor}/>
            })}
        </div>
      </div>
    )
}

export default ActorList;
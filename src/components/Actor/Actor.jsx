import './actor.scss';


const Actor = ({actor}) => {
    const img = actor.profile_path ? 'https://image.tmdb.org/t/p/w200/'+ actor.profile_path : 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png';
    return (
        <div className="actors__item actor">
        <div className="actor__avatar">
          <img src={img} alt=""/>
        </div>
      <div className="actor__info">
          <div className="actor__name">
             <span className='bold'>Имя: </span> <span className='green-text'>{actor.name}</span>
          </div>
          <div className="actor__role">
          <span className='bold'> Роль:</span> <span className='green-text'> {actor.character}</span>
          </div>
      </div>
    </div>
    )
}

export default Actor
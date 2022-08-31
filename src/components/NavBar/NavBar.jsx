import './navbar.scss';
import searchIcon from './../../resources/icons/search_icon.svg'


const NavBar = ({filetrByGenre,filterByYear,search}) => {
    
            
    const onGenreFilter = (e) => {
        document.querySelectorAll('.genre__item').forEach((item)=>item.classList.remove('genre__item_active'));
        e.target.classList.add('genre__item_active');
        filetrByGenre(e.target.getAttribute('data-genre-id'))
    } 

    const onYearFilter = (e) => {
        e.preventDefault();
        const value = document.querySelector('#year-filter-input').value;
        if (!value) return
        filterByYear(+value);
    }

    const onSearch = (e) => {
        e.preventDefault();
        const value = document.querySelector('#search-input').value;
        if (!value) return
        search(value);
    }

    return (
        <div className="movies__navbar navbar">
        <div className="navbar__title">
            Навигация
        </div>
        <div className="navbar__search">
            <form>
                <input id="search-input" type="text" placeholder="поиск"/>
                <button 
                id="search-btn" 
                type="submit"
                onClick = {onSearch}
                ><img src={searchIcon} alt=""/></button>
            </form>    
        </div>
        <div className="navbar__subtitle">Год выпуска</div>
        <div className="navbar__year">
            <form>
                <input id="year-filter-input" type="number" min='1960' max='2022' placeholder="год выпуска"/>
                <button onClick={onYearFilter} id="year-filter-btn"><img src={searchIcon} alt=""/></button>
            </form>
        </div>
        <div className="navbar__subtitle">Жанры</div>
        <div className="navbar__genre genre" onClick={onGenreFilter}>
            <div className="genre__item" data-genre-id="27">Ужасы</div>
            <div className="genre__item" data-genre-id="53">Триллер</div>
            <div className="genre__item" data-genre-id="35">Комедия</div>
            <div className="genre__item" data-genre-id="28">Боевик</div>
            <div className="genre__item" data-genre-id="878">Фантастика</div>
            <div className="genre__item" data-genre-id="14">Фентези</div>
            <div className="genre__item" data-genre-id="18">Драма</div>
            <div className="genre__item" data-genre-id="12">Приключения</div>
            <div className="genre__item" data-genre-id="16">Мультфильм</div>
            <div className="genre__item" data-genre-id="80">Криминал</div>
            <div className="genre__item" data-genre-id="36">Исторический</div>
            <div className="genre__item" data-genre-id="9648">Детектив</div>
            <div className="genre__item" data-genre-id="10749">Мелодрама</div>
            <div className="genre__item" data-genre-id="10752">Военный</div>
        </div>
    </div>
    )
}

export default NavBar;
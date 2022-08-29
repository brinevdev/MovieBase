import Header from './../components/Header/Header';
import NavBar from './../components/NavBar/NavBar';
import MovieList from './../components/MovieList/MovieList';
import { ToastContainer } from 'react-toastify';


const Movies = ({filetrByGenre,filterByYear,search,onPageChanged,movies,page}) => {
    return (
      <div className="wrapper">
      <Header/>
      <main className="main">
          <div className="movies">
              <div className="movies__container">
                  <div className="movies__body">
                      <MovieList movies={movies}/>
                      <div className="pagination">
                        <button className='pagination__button' onClick={()=>onPageChanged(-1)}>Назад</button>
                          <span className='pagination__page'>{page}</span>
                        <button className='pagination__button' onClick={()=>onPageChanged(1)}>Вперёд</button>
                      </div>
                  </div>
                  <NavBar 
                  filetrByGenre = {filetrByGenre} 
                  filterByYear = {filterByYear}
                  search={search}
                  />
              </div>
          </div>
          <ToastContainer/>
      </main>
    </div>
    )
}

export default Movies
import Header from '../../components/Header/Header';
import MovieList from '../../components/MovieList/MovieList';
import Spinner from '../../components/Spinner/Spinner';
import { ToastContainer } from 'react-toastify';

const WatchList = ({movies=[],setWatchList}) => {
    
    if (movies.length === 0) return (
        <div className="wrapper">
        <Header/>
        <main className="main">
            <div className="movies">
                <div className="movies__container movies__container_watch">
                    <div style={{fontSize:'42px',paddingTop:'150px',color:"#fff",textAlign:'center'}}>Здесь пока ничего нет</div>
                </div>
            </div>
        </main>
      </div>
      )
  
      return (
        <div className="wrapper">
        <Header/>
        <main className="main">
            <div className="movies">
                <div className=" movies__container movies__container_watch">
                    <div className="movies__body">
                        <MovieList movies={movies} isWatchList = {true} setWatchList = {setWatchList}/>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </main>
      </div>
      )
}

export default WatchList
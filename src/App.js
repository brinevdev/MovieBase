import './App.scss';
import Header from './components/Header/Header';
import { Fragment } from 'react';
import NavBar from './components/NavBar/NavBar';
import MovieList from './components/MovieList/MovieList';


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
          <div className="movies">
              <div className="movies__container">
                  <div className="movies__body">
                      <MovieList/>
                  </div>
                  <NavBar/>
              </div>
          </div>
      </main>
    </div>
  );
}

export default App;

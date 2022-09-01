import './App.scss';
import {Routes,Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import SingleMovie from './pages/SingleMovie/SingleMovie';
import MoviesContainer from './pages/Movies/MoviesContainer';
import WatchList from './pages/WatchList/WathcList';


function App() {

  const [watchList,setWatchList] = useState([]);

  useEffect(()=> {
    if (localStorage.getItem('watchList')) {
      setWatchList(JSON.parse(localStorage.getItem('watchList')));
    }
  },[])

  return (
      <Routes>
          <Route path='/' element={<MoviesContainer setWatchList = {setWatchList}/>}></Route>
          <Route path = '/movie/:id' element = {<SingleMovie/>}></Route>
          <Route path = '/watchList' element = {<WatchList movies = {watchList} setWatchList = {setWatchList}/>}></Route>
          <Route path='*' element = {<h1>Page not found</h1>}></Route>
      </Routes>
  );
}

export default App;

import './App.scss';
import {Routes,Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import SingleMovie from './pages/SingleMovie/SingleMovie';
import MoviesContainer from './pages/Movies/MoviesContainer';


function App() {

  return (
      <Routes>
          <Route path='/' element={<MoviesContainer/>}></Route>
          <Route path = '/movie/:id' element = {<SingleMovie/>}></Route>
          <Route path='*' element = {<h1>Page not found</h1>}></Route>
      </Routes>
  );
}

export default App;

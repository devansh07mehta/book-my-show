import './App.css';

// Pages
import HomePage from './Pages/Home.page';
import MoviePage from './Pages/Movie.page';
import PlayPage from './Pages/Play.page';

// Routes
import { Routes, Route } from 'react-router-dom'

// React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/movie/:id' element={<MoviePage />}></Route>
    <Route path='/plays' element={<PlayPage />}></Route>
  </Routes>
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Movies from './components/MoviesList/Movies';
import Series from './components/Series/Series';
import SingleMovies from './components/SingleMovies/SingleMovies';
import SingleSeries from './components/SingleSeries/SingleSeries';
import Animated from './components/Animated/Animated';
import SingleAnimated from './components/SingleAnimated/SingleAnimated';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import Cart from './components/Cart/Cart';
import Search from './components/Search/Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Movies' element={<Movies />} />
          <Route path='/Series' element={<Series />} />
          <Route path='/Movies/:id' element={<SingleMovies />} />
          <Route path='/Series/:id' element={<SingleSeries />} />
          <Route path='/Animated' element={<Animated />} />
          <Route path='/Animated/:id' element={<SingleAnimated />} />
          <Route path='/favourite' element={<Cart />} />
          <Route path='/Search' element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

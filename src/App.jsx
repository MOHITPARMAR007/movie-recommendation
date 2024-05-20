import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/home'
import MovieList from './components/header/movieList/movieList'
import Movie from './pages/home/movieDetail/movie'
function App() {
 

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path='movies/:type' element= {<MovieList/>} />
          <Route path='/*' element= {<h1> error h bhai  </h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

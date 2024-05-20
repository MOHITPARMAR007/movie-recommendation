import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'

function App() {
 

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<h1>hello world</h1>} />
          <Route path='movie/:id' element= {<h1> id wala is okey </h1>} />
          <Route path='movies/:type' element= {<h1> type wala is okey </h1>} />
          <Route path='/*' element= {<h1> error h bhai  </h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

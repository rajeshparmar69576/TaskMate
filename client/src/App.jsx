import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import TodoPage from './pages/TodoPage'
import WeatherPage from './pages/WeatherPage'
import Notes from './pages/Notes'

import Home from './pages/Home'
import BudgetTracker from './pages/BudgetTracker'

function App() {


  return (
    <div>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/todopage' element={<TodoPage/>}/>
        <Route path='/weatherpage' element={<WeatherPage/>}/>
        <Route path='/notespage' element={<Notes/>}/>
        <Route path='/budgettrackerpage' element={<BudgetTracker/>}/>
  
      </Routes>
    <Footer/>
    </div>
  )
}

export default App

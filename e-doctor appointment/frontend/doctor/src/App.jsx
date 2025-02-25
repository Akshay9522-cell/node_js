
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './navbar/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Doctordashboard from './Doctordashboard'
import Search from './pages/Search'

function App() {
 

  return (
    <>
     <h1></h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>

        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='srch' element={<Search/>}/>

        </Route>
      </Routes>
      <Routes>
        <Route path='dash' element={<Doctordashboard/>}>

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

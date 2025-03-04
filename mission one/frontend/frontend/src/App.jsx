
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './navbar/Navbar'
import Home from './pages/Home'
import Regis from './pages/Regis'
import Login from './pages/Login'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Navbar/>}>

      <Route index element={<Home/>}/>

      <Route path='home' element={<Home/>}/>
      <Route path='regis' element={<Regis/>}/>
      <Route path='login' element={<Login/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

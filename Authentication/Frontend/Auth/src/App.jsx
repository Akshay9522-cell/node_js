
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='regis' element={<Registration/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='dash' element={<Dashboard/>}/>

        
      </Route>
    </Routes>
    
    </BrowserRouter>

    
    </>
  )
}

export default App

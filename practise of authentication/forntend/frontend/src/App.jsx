
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Sign from './pages/Sign'
import Login from './pages/Login'
import Home from './pages/Home'
import Dash from './Dash'
import Display from './pages/display'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
       
        <Route path='home' element={<Home/>}/>
        <Route path='signin' element={<Sign/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='display' element={<Display/>}/>


        </Route>
      </Routes>

      <Routes>
        <Route path='/dash' element={<Dash/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

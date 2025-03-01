
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './navbar/Navbar'
import Regis from './pages/Regis'
import Login from './pages/Login'
import Home from './pages/Home'
import Dashboard from './Dashboard'

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
       <Routes>
        <Route path='dash' element={<Dashboard/>}>

        </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

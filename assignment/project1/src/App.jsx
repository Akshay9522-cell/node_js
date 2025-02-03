
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes >
      <Route path='/' element={<Navbar className='navbar'/>}> 
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='service' element={<Services/>} />

      </Route>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App

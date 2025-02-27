
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './assets/pages/service'
import Facility from './assets/pages/Facility'
import Login from './components/Login'
import Protected from './Protected'

function App() {

  return (
    <>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Navbar/>}>
         <Route index element={<Home/>}/>
         <Route path='home' element={<Home/>}/>
         <Route path='about' element={ <Protected Cmp={About}/>}> 
         <Route path='service' element={<Service/>}/>
         <Route path='facility' element={<Facility/>}/>
      
          
         </Route>
         <Route path='contact' element={<Contact/>}/>
         <Route path='login' element={<Login/>}/>

        </Route>

        </Routes>
        
        </BrowserRouter>
    </>
  )
}

export default App


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Insert from './pages/Insert'
import Display from './pages/Display'
import Navbar from './navbar/Navbar'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>

        <Route index element={<Insert/>}/>

        <Route path='insert' element={<Insert/>}/>
        <Route path='display' element={<Display/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

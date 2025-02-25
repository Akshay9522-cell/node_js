
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Insert from './pages/Insert'
import Display from './pages/Display'
import Search from './pages/Search'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Insert/>}/>

      <Route path='insert' element={<Insert/>}/>
      <Route path='display' element={<Display/>}/>
      <Route path='search' element={<Search/>}/>

      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Insert from './pages/Insert'
import AddNewBook from './pages/addNewBook'
import AddBook from './pages/AddBook'
import Display from './pages/Display'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Insert/>}/>

      <Route path='insert' element={<Insert/>}/>
      <Route path='addbook' element={<AddNewBook/>}/>
      <Route path='add/:id' element={<AddBook/>}/>
      <Route path='display' element={<Display/>}/>

      </Route>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App

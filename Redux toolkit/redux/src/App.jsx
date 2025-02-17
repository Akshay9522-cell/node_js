
import './App.css'
import UnAuthApp from './components/UnAuthApp'
import AuthApp from './components/AuthApp'
import { useContext } from 'react'
import { myContext } from './components/LoginContext'


function App() {
  const{user}=useContext(myContext)

  return (
    <>
     <h1>login app</h1>

     {user.auth? <AuthApp/>:<UnAuthApp/> }
    </>
  )
}

export default App

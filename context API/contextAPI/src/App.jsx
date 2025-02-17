import React from "react"
import AuthApp from "./components/AuthApp"
import UnAuthApp from "./components/UnAuthApp"
import { useContext } from "react"
import { myContext } from "./components/LoginContext"
import Memo from "./pages/Memo"

function App() {

  const {user}=useContext(myContext)

  return (
    <>
       <Memo/>
      <h1>my Login app</h1>
      {user.auth? <AuthApp/> : <UnAuthApp/>}
  
    </>
  )
}

export default App

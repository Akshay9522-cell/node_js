import React from "react"
import AuthApp from "./components/AuthApp"
import UnAuthApp from "./components/UnAuthApp"
import { useContext } from "react"
import { mylogContext } from "./components/LoginContext"

function App() {

  const {user}=useContext(mylogContext)

  return (
    <>
    
      <h1>my Login app</h1>
      {user.auth? <AuthApp/> : <UnAuthApp/>}
  
    </>
  )
}

export default App

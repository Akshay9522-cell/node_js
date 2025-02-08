import React from 'react'
import { useContext } from 'react'

import { mylogContext } from './LoginContext'

const AuthApp = () => {

     const{user,logout}= useContext(mylogContext)

  return (
    <div>
      <h1>welcome:{user.name}</h1>
       <button onClick={()=>{logout()}}>LogOut</button>
    </div>
  )
}

export default AuthApp

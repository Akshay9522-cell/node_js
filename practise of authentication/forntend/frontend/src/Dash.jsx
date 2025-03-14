import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dash = () => {
 const nav=useNavigate()
  function logOut(){
    localStorage.clear()
    nav('/signin')
  }
    
  return (
    <div>
      <h1>welcome</h1>

      <h3>Name: <h5>{localStorage.getItem('userName')}</h5> </h3>
      <h3>Email: <h5>{localStorage.getItem('userEmail')}</h5> </h3>

      <button onClick={logOut}>logout</button>


    </div>
  )
}

export default Dash

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Doctordashboard = () => {
      
    const navigate=useNavigate()

    const logOut=()=>{

        localStorage.clear()
         navigate('/')
    }
          
  return (
    <div>
      <h1>Doctors Dashboard Pannel</h1>

      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem('email')}</h1>
      
      <button onClick={logOut}>LogOut</button>
    </div>
  )
}

export default Doctordashboard

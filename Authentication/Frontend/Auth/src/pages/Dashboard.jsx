import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Dashboard = () => {

      const navigate=useNavigate()

      useEffect(()=>{
        if (!localStorage.getItem("username") && !localStorage.getItem("useremail"))
        {
           navigate("/login")  
        }
    }, [])


     const logOut=()=>{
         localStorage.clear()
         navigate('/login')

     } 
   
  return (
    <div>
      <h1>DashBoard</h1>

      Welcome : {localStorage.getItem("username")} <br />
      Email : {localStorage.getItem("useremail")} |
         <span onClick={logOut} > <a href="#"> Logout</a> </span>  
    </div>
  )
}

export default Dashboard

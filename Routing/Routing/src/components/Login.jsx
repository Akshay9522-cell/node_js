import React, { useState } from 'react'

const Login = () => {

      const[user,setUser]=useState('')
       function loginUser(){
          
           localStorage.setItem("user",user)
           localStorage.setItem('logedIn',true)
           
       }
       function logOut(){
        localStorage.clear();
       }
       
         
  return (
    <div>
        <h1>akshay</h1>
     userName: <input type='text' value={user} onChange={(e)=>{setUser(e.target.value)}} /> <br />
     Password: <input type='password' /> <br />

      <button onClick={loginUser}>Login</button>
      <button onClick={logOut}>logout</button>
    </div>
  )
}

export default Login

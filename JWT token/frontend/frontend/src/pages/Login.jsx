import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

     const[email,setEmail]=useState('')
     const[password,setPassword]=useState('')
     const nav=useNavigate()


     async function loginData() {

        let api='http://localhost:5000/student/login'
        
        await axios.post(api,{email:email,password:password}).then((res)=>{
             console.log(res.data)
             localStorage.setItem('token',res.data.token)
             nav('/home')
    
        })
        
     } 

  return (
    <div>
      <h1>this is login page</h1>

      Enter email:<input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
      Enter Password:<input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br />

      <button onClick={loginData}>Login</button>
    </div>
  )
}

export default Login

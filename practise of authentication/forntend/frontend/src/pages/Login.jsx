import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const nav=useNavigate()
  
    const loginData=async()=>{
       
         let api='http://localhost:5000/user/login'

         await axios.post(api,{email:email,password:password}).then((res)=>{
             console.log(res.data)
             console.log(res.data.token)
             localStorage.setItem('token',res.data.token)
             alert('loged in')
             nav('/home')


         })
    }
    



  return (
    <div>
      Email:<input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
      password:<input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br />
      
      <button onClick={loginData}>Login</button>
    </div>
  )
}

export default Login

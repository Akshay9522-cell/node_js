import React, { useState } from 'react'

const Login = () => {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')


    async function logIn() {

      
        console.log(email,password)
    }
  return (
    <div>
      <h1>login</h1>
      Email:<input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  /> <br /> 
      password:<input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br />

      <button onClick={logIn}>Login</button>
    </div>
  )
}

export default Login

import axios from 'axios'
import React, { useState } from 'react'
import {message} from "antd";
import { useNavigate } from 'react-router-dom';

const Login = () => {

   const[login,setLogin]=useState({})

   const navigate=useNavigate()

   const handleLogin=(e)=>{
       
    let name=e.target.name
    let value=e.target.value

     setLogin(values=>({...values,[name]:value}))
     console.log(login)
   }

     const handlelogin=async()=>{
           
        let api="http://localhost:8000/employe/login"

    try {
        await axios.post(api,login).then((res)=>{
            console.log(res.data.email)
            alert(res)

            if(res.status==200){
                localStorage.setItem("username",res.data.name)
                localStorage.setItem("useremail",res.data.email)
                navigate('/dash')
            
            }
         
        })
    } catch (error) {
        message.error(error.res.data.msg);
    }      
     }

  return (
    <div>
      
      Email:<input type='email' name='email' value={login.email} onChange={handleLogin}/>
      password:<input type='password' name='paswd' value={login.paswd} onChange={handleLogin} />

      <button onClick={handlelogin}>Login</button>
    </div>
  )
}

export default Login

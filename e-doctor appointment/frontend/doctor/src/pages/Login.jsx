import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const Login = () => {
   const[email,setEmail]=useState('')
   const[paswd,setPaswd]=useState('')

   const navigate=useNavigate()
   

 async function submitLogin(e){
        e.preventDefault()

        let api=`${BASE_URL}/doctor/login`

         
    try {
        const response=await axios.post(api,{email:email,paswd:paswd});
        console.log(response.data)

        localStorage.setItem("name",response.data.name)
        localStorage.setItem("email",response.data.email)
        localStorage.setItem("docid",response.data._id)

         navigate('/dash')
    } catch (error) {
        toast.error(error.response.data.msg)
        
    }

    
    }


    

    
  return (
    <div>
      <Form className='form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='paswd'    value={paswd}  onChange={(e)=>{setPaswd(e.target.value)}}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={submitLogin} >
        Submit
      </Button>
    </Form>
    <ToastContainer/>
    </div>
  )
}

export default Login

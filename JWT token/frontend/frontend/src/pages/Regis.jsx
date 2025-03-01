import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Regis = () => {

     const[inp,setInp]=useState({})
     const nav=useNavigate()

      const handleInput=(e)=>{
         let name=e.target.name
         let value=e.target.value

         setInp(values=>({...values,[name]:value}))    
      }
     async function saveData(){
        
        let api='http://localhost:5000/student/regis'
        
        await axios.post(api,inp).then((res)=>{
             console.log(res.data)
              
            console.log(inp)
            nav('/login')

        })

       
      }
  return (
    <div>
    <h1>this is regis page</h1> 

    Name:<input type='text'  name='name' onChange={handleInput}/> <br />
    Email:<input type='email' name='email' onChange={handleInput} /> <br /> 
    Password:<input type='password' name="password" onChange={handleInput} />  <br />

    <button onClick={saveData}>Registration</button>
    </div>
  )
}

export default Regis

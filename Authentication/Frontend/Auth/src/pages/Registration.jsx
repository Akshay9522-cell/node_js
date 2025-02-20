import axios from 'axios'
import React, { useState } from 'react'

const Registration = () => {

     const[input,setInput]=useState({})

     const handleInput=(e)=>{
          
          let name=e.target.name
          let value=e.target.value

          setInput(values=>({...values,[name]:value}))
          
     }

     const handleSubmit= async()=>{

        let api="http://localhost:8000/employe/save"

         await axios.post(api,input).then((res)=>{
             console.log(res.data)
             console.log(input)

         })
       
     }

  return (
    <div>
      <h1>this is Registration</h1>

      Name:<input type='text' name='name' onChange={handleInput} /> <br />
      Email:<input type='email' name='email' onChange={handleInput} /> <br />
      Password:<input type='password' name='paswd' onChange={handleInput} /> <br />
      Post:<input type='text' name='post' onChange={handleInput} /> <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Registration

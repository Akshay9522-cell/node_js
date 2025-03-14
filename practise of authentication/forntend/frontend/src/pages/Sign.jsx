
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Sign = () => {
     
    const[inp,setInp]=useState({})
    const nav=useNavigate()

    const handleInp=(e)=>{
         let name=e.target.name
         let value=e.target.value

         setInp(values=>({...values,[name]:value}))
    }
   
      const signData=async()=>{
          let api='http://localhost:5000/user/sign'

          await axios.post(api,inp).then((res)=>{
            console.log(res.data)
            alert('sign in')
            nav('/login')
          })
      }
  return (
    <div>
      Name:<input type='text' name='name' onChange={handleInp} /> <br />
      Email:<input type='email' name='email'  onChange={handleInp} /> <br />
      password:<input type='password' name='password' onChange={handleInp} /> <br />

      <button onClick={signData}>Sign In</button>
    </div>
  )
}

export default Sign

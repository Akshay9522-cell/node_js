import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Insert = () => {

       const[inp,setInp]=useState({})
       const nav=useNavigate()

       const handleInp=(e)=>{
          let name=e.target.name
          let value=e.target.value

          setInp(values=>({...values,[name]:value}))

       }
       async function dataSend() {

        let api='http://localhost:8000/employ/save'

        await axios.post(api,inp).then((res)=>{
             console.log(res.data)
             alert('data insert')
             nav('/display')
        })
         
       }
    
  return (
    <div>
      <h1>Insert your data here</h1>
      
      Employ Name:<input type='text' name='name' onChange={handleInp} /> <br />
      Employ post:<input type='text' name='post' onChange={handleInp} /> <br />

      projects:<input type='text' name='project' onChange={handleInp} /> <br />
      technology:<input type="text" name='techno' onChange={handleInp} /> <br />

      <button onClick={dataSend}>saveData</button>

    </div>
  )
}

export default Insert

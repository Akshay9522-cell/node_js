import React, { useState } from 'react'
import axios from 'axios'

const Insert = () => {

    const[inp,setInp]=useState({})

       const handleInput=(e)=>{
           let name=e.target.name
           let value=e.target.value

           setInp(values=>({...values,[name]:value}))
         
       }

        const saveData=async()=>{
            let api='http://localhost:5000/student/save'
            
            await axios.post(api,inp).then((res)=>{
                console.log(res)
                alert("data save")
            })

        }
  return (
    <div>
      <h1>insert</h1>

      username:<input type='text' name='username' onChange={handleInput}/> <br />
      email:<input type='email' name='email'   onChange={handleInput} /> <br />
      first name:<input type='text' name='fname'  onChange={handleInput}/> <br />
      last name:<input type='text' name='lname'   onChange={handleInput}/> <br />

      <button onClick={saveData}>save</button>
    </div>
  )
}

export default Insert

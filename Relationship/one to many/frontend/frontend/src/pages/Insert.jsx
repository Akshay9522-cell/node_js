import React, { useState } from 'react'

import axios from 'axios'

const Insert = () => {

   const[inp,setInp]=useState({})


   const handleInput=(e)=>{
    let name=e.target.name
    let value=e.target.value

    setInp(values=>({...values,[name]:value}))
   }
  async function saveData(){
      console.log(inp)

      let api="http://localhost:5000/author/insert"
        
      await axios.post(api,inp).then((res)=>{
            console.log(res)
      })
       
   }

  return (
    <div>
      <h1>Insert Author Data</h1>

      Name:<input type='text' name='name'  onChange={handleInput}/> <br />
      Email:<input type='email' name='email'  onChange={handleInput} /> <br />
      City:<input type='text' name='city'  onChange={handleInput} /> <br />


      <button onClick={saveData}>saveAuthorData</button>
    </div>
  )
}

export default Insert

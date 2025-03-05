import React, { useState } from 'react'
import axios from 'axios'
import BASE_URL from '../config'

const Regis = () => {
   
  const[inp,setInp]=useState({})
  const[image,setImage]=useState()

   const handleInp=async(e)=>{
        let name= e.target.name
        let value=e.target.value

        setInp(values=>({...values,[name]:value}))
   }
    const handleImage=(e)=>{
       let value=e.target.value
       setImage(value)
       console.log(image)
    }

 async  function saveData(){
       let api=`${BASE_URL}/user/regis`

       const formData=new FormData()

       formData.append("name",inp.name)
       formData.append("post",inp.post)
       formData.append("salary",inp.salary)
       formData.append("special",inp.special)
       formData.append('image',image)
      
        await axios.post(api,formData).then((res)=>{
          console.log(res.data)
        })
       
   }
     
  return (
    <div>
      <h1>regis</h1>

      Name:<input type='text' name='name' onChange={handleInp}/> <br />
      Post:<input type='text' name='post' onChange={handleInp} /> <br />
      salary:<input type='number' name='salary' onChange={handleInp}/> <br />
      Speciality:<input type='text' name='special' onChange={handleInp} /> <br />
      Proof:<input type='file' name='file' onChange={handleImage} /> <br />
      <button onClick={saveData} >Registration</button>
    </div>
  )
}

export default Regis

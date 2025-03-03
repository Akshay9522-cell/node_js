import React, { useState } from 'react'
import axios from 'axios'

const Insert = () => {
     
  const[inp,setInp]=useState({})
  const[selectfile,setSelectfile]=useState('')

   const handleInp=async(e)=>{
        let name=e.target.name
        let value=e.target.value

        setInp(values=>({...values,[name]:value}))
   }

   const handleFileChange=async(e)=>{
        
        setSelectfile(e.target.files[0])
        console.log(selectfile)
   }

    async function saveData() {

       const formData=new FormData()

       formData.append('file',selectfile)
       formData.append('upload_preset','akshay_a')
       formData.append('clou_name','dwa4fqbao')
       const api='https://api.cloudinary.com/v1_1/dwa4fqbao/image/upload'

       const res=await axios.post(api,formData)
       console.log(res.data.url)


       const api1='http://localhost:5000/user/save'

        await axios.post(api1,{imgname:res.data.url,...inp}).then((res)=>{
          console.log(res.data)
        })
       

    }

  return (
    <div>
      <h1>akshay</h1>
      name:<input type='name' name='name' onChange={handleInp} /> <br />
      age:<input type='number' name='age' onChange={handleInp} /> <br />
      File:<input type='file' onChange={handleFileChange} /> <br />

      <button onClick={saveData}>save</button>
    </div>
  )
}

export default Insert

import React, { useState } from 'react'
import axios from 'axios'

const Insert = () => {

     const[inp,setInp]=useState({})
     const[image,setImage]=useState('')

        const handleInp=async(e)=>{
           let name=e.target.name
           let value=e.target.value

           setInp(values=>({...values,[name]:value}))
           console.log(inp)
        }
        const handleFile=(e)=>{
             let value=e.target.files[0]
             setImage(value)
             console.log(image)
        }

        const saveData=async()=>{

          let api="http://localhost:5000/user/save"
            
             const formData=new FormData()
             formData.append("name",inp.name)
             formData.append("post",inp.post)
             formData.append("salary",inp.salary)
             formData.append("image",image)

             await axios.post(api,formData).then((res)=>{
                console.log(res.data)
             })


        }
  return (
    <div>
      <h1>insert</h1>
       Name:<input type='text' name='name' onChange={handleInp} />
       Post:<input type='text' name='post' onChange={handleInp} />
       Salary:<input type='number' name='salary' onChange={handleInp}/>
       File:<input type='file' name='image' onChange={handleFile} />

       <button onClick={saveData}>save</button>
    </div>
  )
}

export default Insert

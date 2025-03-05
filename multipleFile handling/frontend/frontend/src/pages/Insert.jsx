import React, { useState } from 'react'
import axios from 'axios'

const Insert = () => {

       const[inp,setInp]=useState({})
       const[image,setImage]=useState('')

       const handleInp=(e)=>{
          let name=e.target.name
          let value=e.target.value

          setInp(values=>({...values,[name]:value}))
       }
       const handleFile=(e)=>{
           let value=e.target.files
           setImage(value)
           console.log(image)
       }
      async function signUp() {
            
           let api="http://localhost:5000/user/sign"

           const formData= new FormData()

            for(const e in inp){
                formData.append(e,inp[e])
            }

            for(let i=0;i<image.length;i++){
                formData.append('image',image[i])
            }

            await axios.post(api,formData).then((res)=>{
                 console.log(res.data)
            })
      }

  return (
    <div>
      Name:<input type='text' name='name' onChange={handleInp}/> <br />
      Post:<input type='text' name='post' onChange={handleInp} /> <br />
      Skill:<input type='text' name='skill' onChange={handleInp} /> <br />
      file:<input type='file' multiple onChange={handleFile}  /> <br />

      <button onClick={signUp}>Signup</button>
    </div>
  )
}

export default Insert

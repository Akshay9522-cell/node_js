import axios from 'axios'
import React from 'react'

const New = () => {

    const handleHome=async()=>{
        let api="http://localhost:5000/home"

 try {
 
    const res=await axios.get(api)
    console.log(res)
 } catch (error) {
    alert(error.response.data.msg);
 }
       
         
         
    }
  return (
    <div>

        <button onClick={handleHome}>home</button>
      
    </div>
  )
}

export default New



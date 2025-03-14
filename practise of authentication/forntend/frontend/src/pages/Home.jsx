import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => { 
    const nav=useNavigate()

      const auth=async()=>{
         const token=localStorage.getItem('token')

         if(token){
            let api='http://localhost:5000/user/auth'

            await axios.post(api,null,{headers:{'Authorization':token}}).then((res)=>{
                console.log(res.data)

                localStorage.setItem('userName',res.data.name)
                localStorage.setItem('userEmail',res.data.email)
                nav('/dash')
            })
         }
      }   
      useEffect(()=>{
        auth()
      },[])   

  return (
    <div>
        <h1>welcome to Home page</h1>
      
    </div>
  )
}

export default Home

import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const nav=useNavigate()

    const authenticateUser=async()=>{

       
         let token=localStorage.getItem('token')
         console.log(token)
         if(token){
            let api='http://localhost:5000/student/auth'

            await axios.post(api,null,{headers:{"x-auth-token":token}}).then((res)=>{
                console.log(res.data)

                localStorage.setItem('username',res.data.name)
                localStorage.setItem('useremail',res.data.email)
                nav('/dash')

            })
         }
    }
    useEffect(()=>{
        authenticateUser()
    },[])

  return (
    <div>
      <h1>this is home page</h1>


    </div>
  )
}

export default Home

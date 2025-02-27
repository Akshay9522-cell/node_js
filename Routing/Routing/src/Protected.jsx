
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = ({Cmp}) => {
  
    const nav=useNavigate()
   useEffect(()=>{
        let user=localStorage.getItem('user')
      console.log(user)
        if(!user){
          nav('/login')
        }
   },[])

  return (
    <div>
      <Cmp/>
    </div>
  )
}

export default Protected

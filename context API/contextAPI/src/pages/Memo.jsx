import React, { useState } from 'react'

const Memo = () => {

     const[count,setCount]=useState('')

     const multi=()=>{
         
        return count*2
     }
  return (
    <div>
      
      <h1>mulitply:{multi}</h1>
      id: <input type='number' value={count} onChange={(e)=>{setCount(e.target.value)}} /> 
      name: <input type='text' value={count}  onChange={(e)=>{setCount(e.target.value)}}/> 
    </div>
  )
}

export default Memo

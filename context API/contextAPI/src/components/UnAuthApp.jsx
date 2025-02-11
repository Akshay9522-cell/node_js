import React, { useState } from 'react'
import { useContext } from 'react'
import { myContext } from './LoginContext'

const UnAuthApp = () => {

    const[val,setVal]=useState("")

    const{login} = useContext(myContext)
  return (
    <div>
      Enter name:<input type='text' value={val}  onChange={(e)=>{setVal(e.target.value)}} />

      <button onClick={()=>{login(val)}} >login</button>
    </div>
  )
}

export default UnAuthApp

import React, { useState } from 'react'
import { useContext } from 'react'
import { mylogContext } from './LoginContext'

const UnAuthApp = () => {

    const[val,setVal]=useState("")

    const{login} = useContext(mylogContext)
  return (
    <div>
      Enter name:<input type='text' value={val}  onChange={(e)=>{setVal(e.target.value)}} />

      <button onClick={()=>{login(val)}} >login</button>
    </div>
  )
}

export default UnAuthApp

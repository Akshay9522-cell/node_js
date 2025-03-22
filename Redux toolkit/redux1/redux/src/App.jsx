
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { changeColor } from './countSlice'
import { useState } from 'react'
import Sidebar from './Sidebar'

function App() {
       
  const myval=useSelector((state)=>state.myColor.color)

  const mydis=useDispatch()

  const[clr,setClr]=useState('')


  return (
    <>
    <Sidebar/>
      <h1 >Akshay namdev:{myval}</h1>

      <input type="text" value={clr} onChange={(e)=>{setClr(e.target.value)}} />
      <button onClick={()=>{mydis(changeColor(clr))}}>click</button>


    </>
  )
}

export default App

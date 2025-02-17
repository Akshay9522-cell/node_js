
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { bgchangeColor } from './changecolorSlice'
import { useState } from 'react'

function App() {

   const myval=useSelector((state)=>state.mycolor.bgColor)
   const mydis=useDispatch()

   const[val,setVal]=useState('')

  return (
    <>
     <h1 style={{color:myval}}>akshay</h1>

     <input type='text' value={val} onChange={(e)=>{setVal(e.target.value)}} />
     <button onClick={()=>{mydis(bgchangeColor(val))}}>change</button>

     
   </>
  )
}

export default App

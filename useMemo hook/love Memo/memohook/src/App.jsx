
import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'

function App() {
 
   const[count,setCount]=useState(0)
  
   let ans=useMemo(multi(count),[count])
   
   function multi(num){
    for(let i=1;i<1000000000;i++){}
     return count*2 
   }
 
  
   
  return (
    <>
  
    <h1>ans:{ans}</h1>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>increament</button>
    </>
  )
}

export default App

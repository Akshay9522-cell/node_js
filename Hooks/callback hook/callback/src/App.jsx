
import { useCallback, useState } from 'react'
import './App.css'
import Child from './Child'

function App() {

  const[count,setCount]=useState(0)
   
  const handleClick=useCallback(()=>{
    setCount(count+1)
 },[count])

  return (
    <>
     <h1>{count}</h1>
     <button onClick={handleClick}>increament</button>

     <Child button="click me" handleClick={handleClick}/>
    </>
  )
}

export default App

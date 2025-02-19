
import { useCallback, useState } from 'react'
import './App.css'
 import { useMemo } from 'react'
// import Memohook from './components/Memohook'
import Call from './components/Call'

function App() {

  //  const[count,setCount]=useState(0)
  //  const[task,setTask]=useState([])

  //  const mytask=()=>{
  //     setTask(values=>([...values,"new Task"]))
  //  }

  //  const mytaskadd=useCallback(mytask,[task])
   
  const[add,setAdd]=useState(0)
  // const[sub,setSub]=useState(100)

  const myMulti=useMemo(multi,[add])

function multi(){

  for(let i=1;i<100000000;i++){}
  console.log('akkii')
     return add*2
}

  return (
    <>
     <h1>mutli:{myMulti}</h1>
     <h1>add:{add}</h1>
      <button onClick={()=>{setAdd(add+1)}}>ADDITION</button>  
    {/* <Call task={task} addtask={mytaskadd}/>

    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>click</button> */}
    {/* <Memohook/>
  

     <h1>sub:{sub}</h1>
     <button onClick={()=>{setSub(sub-1)}}>SUBTRACTION</button> */}
    </>
  )
}

export default App

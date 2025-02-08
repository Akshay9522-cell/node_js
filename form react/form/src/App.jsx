
import { name } from 'ejs'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  
    const[input,setInput]=useState({ })

    const[cnt,setCnt]=useState(0)
    const[multi,setMulti]=useState(0)

    
    const handleInput=(e)=>{
         let name=e.target.name
         let value=e.target.value

         setInput((values=>({...values,[name]:value})))
    }

    const handleSubmit=()=>{
      console.log(input)
    }

    useEffect(()=>{
       
      
        setMulti(cnt*2)
      
      
    },[cnt])

  return (
    <>
         <h1>count:{cnt}</h1>
         <h1>multi:{multi}</h1>
         <button onClick={()=>{setCnt(cnt+1)}}>click</button>

      name:<input type='name' name='name' onChange={handleInput}/>
      city:<input type='name' name='city' onChange={handleInput}/>
      subject:<input type='name' name='subject' onChange={handleInput}/>
      fees:<input type='number' name='fees' onChange={handleInput}/>

      <button onClick={handleSubmit}>submit</button>
    </>
  )
}

export default App

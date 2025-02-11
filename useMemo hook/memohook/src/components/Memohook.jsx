// import React, { useState,useMemo} from 'react'

// const Memohook = () => {
    
  

//     const[id,setId]=useState('')
//     const[city,setCity]=useState('')
//     const mymulti1=useMemo(mymulti,[id])

//     function mymulti(){

//          for(let i=1;i<=100000000;i++){}
//           return id*2
//     }

//   return (
//     <div>
      
//       <h1>multi;{mymulti1}</h1>
//       id:<input type='number'  value={id} onChange={(e)=>{setId(e.target.value)}}  />
//       city:<input type='name' value={city}  onChange={(e)=>{setCity(e.target.value)}} />
//     </div>
//   )
// }

// export default Memohook


import React, { useState,useMemo } from 'react'

const Memohook = () => {

    const[id,setId]=useState('')
    const[name,setName]=useState('')

    const mymulti=useMemo(multi,[id])

      function multi(){
         
           for(let i=0;i<=10000000;i++){}

           return id*2

      }

  return (
    <div>
        <h1>multi:{mymulti}</h1>
       ID:<input type='number' value={id} onChange={(e)=>{setId(e.target.value)}} />
       name:<input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}  />

    </div>
  )
}

export default Memohook

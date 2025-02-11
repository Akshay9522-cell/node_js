// import React, { useState } from 'react'
// import { createContext } from 'react';

// const mylogContext=createContext();


// const LoginContext = ({children}) => {

// const[user,setUser]=useState({name:" ",auth:false});

// const login=(nm)=>{
//      setUser({name:nm,auth:true})
     
// }

// const logout=()=>{
//       setUser({name:" ",auth:false})
// }

//   return (
//     <>
//       <mylogContext.Provider value={{user,login,logout}}>
//         {children}
//         </mylogContext.Provider> 

//     </>
//   )
// }

// export default LoginContext
// export {mylogContext}

import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const myContext=createContext()

const LoginContext = () => {

   const[user,setUser]=useState({name:"",auth:false})

   const login=(nm)=>{
       setUser({name:nm,auth:true})
   }

   const logout=()=>{
      setUser({name:" ",auth:false})
   }
  return (
    <div>
      <myContext.Provider value={{user,login,logout}}>

      </myContext.Provider>
    </div>
  )
}

export default LoginContext
export{myContext}

import React, { useState } from 'react'
import { createContext } from 'react';

const mylogContext=createContext();


const LoginContext = ({children}) => {

const[user,setUser]=useState({name:" ",auth:false});

const login=(nm)=>{
     setUser({name:nm,auth:true})
     
}

const logout=()=>{
      setUser({name:" ",auth:false})
}

  return (
    <>
      <mylogContext.Provider value={{user,login,logout}}>
        {children}
        </mylogContext.Provider> 

    </>
  )
}

export default LoginContext
export {mylogContext}

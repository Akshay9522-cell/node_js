import React from 'react'
import { memo } from 'react'

const Call = ({task,addtask}) => {
    console.log("*******")
  return (
      
    <>
     {
        task.map((key,index)=>{
            return(
                <>
                <h3 key={index}>{key}</h3>
                </>
            )
        })
     }
     <button onClick={addtask}>add</button>
    </>
  )
}

export default memo(Call)

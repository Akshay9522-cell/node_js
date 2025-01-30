import React from 'react'

const data=['akshay','yash bhai','mannu bhai']

 let ans=data.map((e)=>{
    return(
        <>
        <li>{e}</li>
        </>
    )
})



const Map = () => {
  return (
    <div>
        <ol>
        {ans}
        </ol>
     
    </div>
  )
}

export default Map

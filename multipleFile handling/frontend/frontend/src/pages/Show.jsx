import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {
    const{id}=useParams()

    const[image,setImage]=useState([])
    const[display,setDisplay]=useState('')

      const loadData=async()=>{
          let api="http://localhost:5000/user/show"

          await axios.post(api,{id:id}).then((res)=>{
             console.log(res.data)
             setImage(res.data.image) 
          })
      }

      useEffect(()=>{
        loadData()
      },[])
    

    

  return (
    <div>
      <h1>This is show page {id}</h1>

      <div style={{display:'flex'}}> 
        <div style={{display:'flex',flexDirection:'column'}}>
          {image.map((e)=>{
             return(
              <>
              <img src={`http://localhost:5000/${e}`} width={70} height={70} onMouseOver={()=>{setDisplay(e)}}  />
              </>
             )

          })}
        </div>
        <div>
          <img src={`http://localhost:5000/${display}`} alt="" />
        </div>
      </div>
    
    </div>
  )
}

export default Show

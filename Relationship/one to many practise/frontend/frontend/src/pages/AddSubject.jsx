import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const AddSubject = () => {

    const{id}=useParams()

    const[subj,setSubj]=useState('')

     const saveSub=async()=>{
        console.log(id,subj)
          let api='http://localhost:8000/teacher/addsub'
          
          await axios.post(api,{id:id,subj:subj}).then((res)=>{
                console.log(res.data)
          })

     }
      

  return (
    <div>
      <h1>akshay{id}</h1>
      Subject:<input type='text'  value={subj} onChange={(e)=>{setSubj(e.target.value)}} />

      <button onClick={saveSub}>ADD SUBJECT</button>
    </div>
  )
}

export default AddSubject

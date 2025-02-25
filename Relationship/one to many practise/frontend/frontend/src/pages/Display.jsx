import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Display = () => {
     
    const[show,setShow]=useState([])
    const navigate=useNavigate()
     
     async function loadData() {
         
        let api='http://localhost:8000/teacher/display'
        
        await axios.get(api).then((res)=>{
            console.log(res.data)
            setShow(res.data)
        })
        
     }

     useEffect(()=>{
       loadData()
     },[])

       let ans= show.map((e)=>{
            return(
                <tr>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td><button onClick={()=>{navigate(`/subject/${e._id}`)}} >Add Subject</button></td>
                </tr>
            )
       })
  return (
    <div>
      <table>
        <tr>
            <th>Teacher name</th>
            <th>Teacher email</th>
            <th>ADD</th>
        </tr>
        {ans}
      </table>
    </div>
  )
}

export default Display

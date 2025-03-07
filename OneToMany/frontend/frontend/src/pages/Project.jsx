import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Project = () => {

     const[show,setShow]=useState([])

     const showData=async(req,res)=>{
           
        let api='http://localhost:8000/employ/project'

        await axios.get(api).then((res)=>{
             console.log(res.data)
             setShow(res.data)
        })
     }

     useEffect(()=>{
        showData()
     },[])
     let res=show.map((e)=>{
         return(
            <>
            <tr>
                <td>{e.empId.name}</td>
                <td>{e.empId.post}</td>
                <td>{e.project}</td>
                <td>{e.techno}</td>
            </tr>
            </>
         )
     })
  return (
    <div>
      <h1>All Project Detail</h1>

      <table border={1}>
        <tr>
            <th>Name</th>
            <th>Post</th>
            <th>Project</th>
            <th>Technology</th>
        </tr>
        {res}
      </table>
    </div>
  )
}

export default Project

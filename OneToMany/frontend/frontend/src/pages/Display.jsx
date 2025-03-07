import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Display = () => {

       const[show,setShow]=useState([])
       const nav=useNavigate()

       const displayData=async()=>{
          
         let api='http://localhost:8000/employ/display'

         await axios.get(api).then((res)=>{
             console.log(res.data)
             setShow(res.data)
         })
       }

       useEffect(()=>{
          displayData()
       },[])

       let result=show.map((e)=>{
           return(
            <>
              <tr>
                <td>{e.name}</td>
                <td>{e.post}</td>
                <td>{
                    e.projectId.map((e1)=>{
                        return(
                            <>
                        
                              <p>{e1.project},{e1.techno}</p>
                              
                            </>
                        )
                    })
                    
                    }</td>

                    <td><button onClick={()=>{nav(`/add/${e._id}`)}}>Add Book</button></td>
                
              </tr>
            </>
           )
       })

  return (
    <div>
      <h1>Display your records here...</h1>
      
         <table border={1}>
            <tr>
                <th>Name</th>
                <th>Post</th>
                <th>Project,Technology</th>
                <th>ADD</th>
            </tr>
            {result}
         </table>

    </div>
  )
}

export default Display

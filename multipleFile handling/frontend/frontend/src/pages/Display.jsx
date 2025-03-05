import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Display = () => {

     const[show,setShow]=useState([])

     async function displayData() {
          
           let api="http://localhost:5000/user/display"

           await axios.get(api).then((res)=>{
               console.log(res.data)
               setShow(res.data)
           })
     }

     useEffect(()=>{
         displayData()
     },[])

       let ans=show.map((e)=>{
           return(
               <>
               <tr>
               <td>
       {e.image.map((e1)=>{
           return(
            <>
               <img src={`http://localhost:5000/${e1}`}  width="40" height="40" />
               <br/>
            </>
           )
        })}

       </td>
                <td><img src={`http://localhost:5000/${e.defaultImage}`} width={300} height={300} /></td>
                <td>{e.name}</td>
                <td>{e.post}</td>
                <td>{e.skill}</td>
               </tr>
               </>
           )
       })
  return (
    <div>
      
      <table>
        <tr>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Post</th>
            <th>Skill</th>
        </tr>
        {ans}
      </table>
    </div>
  )
}

export default Display

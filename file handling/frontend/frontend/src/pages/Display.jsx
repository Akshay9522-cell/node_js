import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Display = () => {

   const[show,setShow]=useState([])

     const showData=async()=>{
          
        let api="http://localhost:5000/user/display"

        await axios.get(api).then((res)=>{
           console.log(res.data)
           setShow(res.data)
        })
     }

    useEffect(()=>{
      showData()
    },[])

    let ans=show.map((e)=>{
       return(
        <tr>
          <td> <img src={`http://localhost:5000/upload/${e.image}`} width="100" height="100" /></td>
          <td>{e.name}</td>
          <td>{e.post}</td>
          <td>{e.salary}</td>
        </tr>
       )
    })
  return (
    <div>
      <h1>Display</h1>
      <table>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Post</th>
          <th>Salary</th>
        </tr>
        {ans}
      </table>
    </div>
  )
}

export default Display

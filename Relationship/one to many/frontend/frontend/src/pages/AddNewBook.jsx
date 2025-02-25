import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddNewBook = () => {
       
     const[show,setShow]=useState([])
     const navigate=useNavigate()

     const loadData=async()=>{
        
        let api="http://localhost:5000/author/addbook"

           await axios.get(api).then((res)=>{
              console.log(res.data)
              setShow(res.data)
           })
     }
      
     useEffect(()=>{
        loadData()
     },[])

   
     let ans=show.map((e)=>{
           return(
               <tr>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.city}</td>
                <td><button onClick={()=>{navigate(`/add/${e._id}`)}}>AddBook</button></td>
               </tr>
           )
     })

  return (
    <div>
      <h1>Add New Book</h1>

      <table border={1}>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>ADD</th>
        </tr>
        {ans}
      </table>
    </div>
  )
}

export default AddNewBook

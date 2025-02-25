import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
      
    const[srch,setSrch]=useState()
    const[res,setRes]=useState([])

    const searchData=async()=>{
           
        let api='http://localhost:5000/student/search'

        await axios.post(api,{id:srch}).then((res)=>{
            setRes(res.data)
        })
    }
    
    let ans=res.map((e)=>{
        return(
            <tr>
            <td>{e.id}</td>
            <td>{e.userid.username}</td>
            <td>{e.userid.email}</td>
            <td>{e.fname}</td>
            <td>{e.lname}</td>
         </tr>
        )
        
    })


  return (
    <div>
      
      Search:<input type='number'   value={srch} onChange={(e)=>{setSrch(e.target.value)}} />

      <button onClick={searchData}>Search</button>

      <table>
        <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>firstname</th>
            <th>lastname</th>
        </tr>
        {ans}
      </table>
    </div>
  )
}

export default Search

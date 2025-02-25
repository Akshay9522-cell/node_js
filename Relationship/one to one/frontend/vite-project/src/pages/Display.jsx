import axios from 'axios'
import React, {  useEffect, useState } from 'react'

const Display = () => {
    
    const[mydata,setMydata]=useState([])

  async  function loadData(){
          let api='http://localhost:5000/student/display'
        
           await axios.get(api).then((res)=>{
               setMydata(res.data)
           })

    }
    useEffect(()=>{
        loadData()
    },[])

    const ans=mydata.map((e)=>{
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
      <h1>display</h1>

      <table>
        <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>firstName</th>
            <th>lastName</th>
        </tr>
        {ans}
      </table>
    </div>
  )
}

export default Display

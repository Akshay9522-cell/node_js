import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Display = () => {

      const[show,setShow]=useState([])
       
      const resultData=async()=>{
          let api="http://localhost:5000/user/display"

          await axios.get(api).then((res)=>{
             console.log(res.data)
             setShow(res.data)
          })
      }

      useEffect(()=>{
        resultData()
      },[])

      let ans=show.map((e)=>{
          return(
            <tr>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td  ><img src={e.imgname} style={{width:"50px"}} /></td>
            </tr>
          )
      })
  return (
    <div>
      <h1>Display</h1>
      <table>
        <tr>
            <th>name</th>
            <th>age</th>
            <th>image</th>
        </tr>
        {ans}
      </table>
    </div>
  )
}

export default Display

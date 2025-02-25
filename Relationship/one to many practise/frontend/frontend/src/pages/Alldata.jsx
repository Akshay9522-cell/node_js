import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Alldata = () => {
    const[show,setShow]=useState([])

     async function loadData(){
          let api="http://localhost:8000/teacher/all"

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
                <td>{
                    e.subid.map((e1)=>{
                        return(
                            <>
                            <p>{e1.subName} </p>
                            </>
                        )
                    })
                    }</td>
              </tr>
           )
      })
  return (
    <div>
      <h1>All Data IS here</h1>

       <table>
        <tr>
            <th>Name</th>
            <th>email</th>
            <th>subjects</th>
        </tr>
        {ans}
       </table>

    </div>
  )
}

export default Alldata

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Display = () => {
    const[res,setRes]=useState([])

    async function loadData(){
         let api='http://localhost:5000/author/alldata'

         await axios.get(api).then((res)=>{
             console.log(res.data)
              setRes(res.data)
         })
    }

    useEffect(()=>{
        loadData()
    },[])
   
    let ans= res.map((e)=>{
        return(
            <>
            <tr>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.city}</td>
                <td>{
                    e.bookid.map((e1)=>{
                        return(
                            <>
                            <p>BookName:{e1.bookName} Price:{e1.bookPrice}</p>
                            </>
                        )
                    })
                    }</td>
            </tr>
            </>
        )
   })
  return (
    <div>
      <h1>Display All Data</h1>

           <table>
            <tr>
                <th>Author Name</th>
                <th>Author Email</th>
                <th>Author City</th>
                <th>Author Books</th>
            </tr>
          {ans}
           </table>
    </div>
  )
}

export default Display

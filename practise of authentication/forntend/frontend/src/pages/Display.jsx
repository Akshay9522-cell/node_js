import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img from '../images/images.png' 

const Display = () => {
    const[show,setShow]=useState([])
     
     async function showData() {
         let api='http://localhost:3000/students'

         await axios.get(api).then((res)=>{
            console.log(res.data)
            console.log(res.data);
            

            setShow(res.data)
         })
     }   

      useEffect(()=>{
        showData()
      },[])
       
      function deleteData(id){
          
          let api=`http://localhost:3000/students/${id}`
          console.log(id);
          

           axios.delete(api).then((res)=>{
               console.log(res.data)
          })
      }

      let res= show.map((ele)=>{
            return(
                <>
                <tr>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.grade}</td>
                    <td>{ele.contact.email}</td>
                    <td>{ele.contact.phone}</td>
                   
                    <td  ><img src={img}  style={{width:"30px"}} onClick={()=>{deleteData((ele.id))}} /></td>
                </tr>
                </>
            )
      })

  return (
    <div>
        <table>
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>age</th>
                <th>grade</th>
                <th>email</th>
                <th>phone</th>
                <th>Delete</th>
            </tr>
            {res}
        </table>
    </div>
  )
}

export default Display

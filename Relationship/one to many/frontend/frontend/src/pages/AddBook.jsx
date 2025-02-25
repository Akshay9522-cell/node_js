import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
const AddBook = () => {

    const{id}=useParams()
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')

     const addBook=async()=>{
            
         console.log(id,name,price)
         let api="http://localhost:5000/author/newbookadd"
        
         await axios.post(api,{id:id,name:name,price:price}).then((res)=>{
                console.log(res.data)
                alert('book added successfully')
         })

     }
  return (
    <div>
      <h1>Add Book</h1>

      BookName:<input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/> <br />
      BookPrice:<input type='number' value={price} onChange={(e)=>{setPrice(e.target.value)}}/> <br />

      <button onClick={addBook}>ADD book</button>
    </div>
  )
}

export default AddBook

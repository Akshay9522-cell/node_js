import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Addproject = () => {

    const[project,setProject]=useState('')
    const[techno,setTechno]=useState('')

    const{id}=useParams()

             async function addProject() {
            
                let api='http://localhost:8000/employ/add'

                await axios.post(api,{project:project,techno:techno,empid:id}).then((res)=>{

                     console.log(res.data)
                     console.log(project,techno)
                     alert('project added successfully')
                })
             }
  return (
    <div>
      <h5>Add your Project::{id}</h5>

      Project Name:<input type='text'  name='project' value={project} onChange={(e)=>{setProject(e.target.value)}}  /> <br />
      Technology :<input type='text' name='techno' value={techno} onChange={(e)=>{setTechno(e.target.value)}} /> <br />

      <button onClick={addProject}>Add</button>
    </div>
  )
}

export default Addproject

import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';
import Table from 'react-bootstrap/Table';

const Search = () => {

    const[inp,setInp]=useState({})
    const[show,setShow]=useState([])

    const handleInput=(e)=>{
        let name=e.target.name
        let value=e.target.value

        setInp(values=>({...values,[name]:value}))
        console.log(inp)
    }

    async function doctorSrch(e){
        let api=`${BASE_URL}/doctor/srch`
        e.preventDefault()
        await axios.post(api,inp).then((res)=>{
            console.log(res.data)
            setShow(res.data)
        })
    }

    const ans=show.map((key)=>{
        return(
        
            <tr>
              <td>{key.name} </td>   
              <td>{key.speciality} </td>         
              <td>{key.email} </td>
              <td>{key.city} </td>  
             
            </tr>
          
        )
  })
  return (
    <div>
      <h1>Search Your relevant Doctor here...</h1>
       
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"  name='name' onChange={handleInput} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Doctor Speciality</Form.Label>
        <Form.Select aria-label="Default select example" name='speciality'  onChange={handleInput} >
      <option>Speciality</option>
      <option value="Neurologist">Neurologist</option>
      <option value="Cardiologist">Cardiologist</option>
      <option value="Physiotherapist">Physiotherapist</option>
      <option value="Orthopedic">Orthopedic</option>
      <option value="ENT">ENT</option>
    </Form.Select>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={doctorSrch}>
        Submit
      </Button>
    </Form>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Doctor name#</th>
          <th>Speciality</th>
          <th>Email</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
          {ans}
        </tbody>
        </Table>


    </div>
  )
}

export default Search

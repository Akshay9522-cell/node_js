import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const TopMenu = () => {
    
    const[inp,setInp]=useState({})

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const handleInput=(e)=>{

     let name=e.target.name
     let value=e.target.value

     setInp(values=>({...values,[name]:value}))
     console.log(inp)
   }

    async function handleSubmit(e){
        e.preventDefault();

        let api=`${BASE_URL}/doctor/insert`

        try {
            const response = await axios.post(api, inp);
            console.log(response);
            toast.success(response.data.msg);
            setShow(false)
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">E-Doctor Appointment</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='home'>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#doctors" onClick={handleShow}>Doctors Registration</Nav.Link>
            <Nav.Link as={Link} to='login'>Login</Nav.Link>
            <Nav.Link as={Link} to='srch'>Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctors Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Doctor name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Doctor Speciality</Form.Label>
        <Form.Select aria-label="Default select example" name='speciality' onChange={handleInput}>
      <option>Speciality</option>
      <option value="Neurologist">Neurologist</option>
      <option value="Cardiologist">Cardiologist</option>
      <option value="Physiotherapist">Physiotherapist</option>
      <option value="Orthopedic">Orthopedic</option>
      <option value="ENT">ENT</option>
    </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Doctor email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name='email' onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Doctor city</Form.Label>
        <Form.Control type="text" placeholder="Enter city" name='city' onChange={handleInput} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='paswd' onChange={handleInput} />
      </Form.Group>
     
      
    </Form>

        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </div>
  )
}

export default TopMenu

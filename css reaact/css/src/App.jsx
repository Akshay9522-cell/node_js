
import './App.css'
import myimage1 from './images/rotti.jpg'
import myimage2 from './images/husky.jpg'
import myimage3 from './images/bully.jpg'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {


  return (
    <>
      <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Carousel>
      <Carousel.Item>
        <img src={myimage1} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={myimage2} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={myimage3} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={myimage1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Row>
       
    <Col md='2' style={{backgroundColor:'grey'}}>  aksj</Col>
    <Col md='3'  style={{backgroundColor:'violet'}}>dfsd</Col>
    <Col md='4' style={{backgroundColor:'navy'}}>  aksj</Col>
    <Col md='3'  style={{backgroundColor:'yellow'}}>dfsd</Col>
      </Row>
      <Row>
       
      <Col md='2' style={{backgroundColor:'green'}}>  aksj</Col>
    <Col md='3'  style={{backgroundColor:'orange'}}>dfsd</Col>
    <Col md='4' style={{backgroundColor:'aqua'}}>  aksj</Col>
    <Col md='3'  style={{backgroundColor:'beige'}}>dfsd</Col>
      </Row>
      <Row>
       
    <Col md='2' style={{backgroundColor:'orange'}}>  aksj</Col>
    <Col md='3'  style={{backgroundColor:'cyan'}}>dfsd</Col>
    <Col md='4' style={{backgroundColor:'black'}}>  aksj</Col>
    <Col md='3'  style={{backgroundColor:'yellow'}}>dfsd</Col>
      </Row>
      <Row>
       
    <Col md='2' style={{backgroundColor:'red'}}>aksj</Col>
    <Col md='2'  style={{backgroundColor:'blue'}}>dfsd</Col>
    <Col md='3'  style={{backgroundColor:'pink'}}>dfsd</Col>
    <Col md='5'  style={{backgroundColor:'skyblue '}}>dfsd</Col>
   
      </Row>
    </>
      {/* <h1 className='head'>akshay namdev</h1>
      <img src=  {myimage} />

      <img src='./public/images/labrador.jpg' /> */}
    </>
  )
}

export default App

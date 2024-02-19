import { useState }  from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function Mynav() {
    const [activeLink, setActiveLink] = useState('home')
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Matt Dudman</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/matt-dudman95/'><img src="" alt="" /></a> 
            </div>
          </span>
        </Container>
      </Navbar>
      </div>
    )
}

export default Mynav;
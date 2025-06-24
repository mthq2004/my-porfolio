import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/Header.css'

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top" expanded={expanded} onToggle={setExpanded} className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className='d-flex justify-content-center align-items-center' onClick={() => setExpanded(false)}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ maxHeight: '50px' }}
          />
          <p className='mb-0'>My portfolio</p>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto d-flex justify-content-between">
            <Nav.Link as={NavLink} to="/" end className="nav-link-custom" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link-custom" onClick={() => setExpanded(false)}>
              About me
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className="nav-link-custom" onClick={() => setExpanded(false)}>
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-custom" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

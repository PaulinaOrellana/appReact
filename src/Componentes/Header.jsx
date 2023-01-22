import React from 'react'
import { useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

const Header = ({ setValorBusqueda}) => {
    const [valorCaja, setValorCaja]= useState('');

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand></Navbar.Brand>
          <img src={"https://pngimg.com/uploads/futurama/futurama_PNG91.png"} style={{ width: '25%', height: '50%'}} alt="logo" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }} 
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Form.Control

                type="search" 
                placeholder="Busca un personaje"
                className="me-2"
                aria-label="Search"

                onChange={(e) => setValorCaja(e.target.value)}
              />
              <Button onClick={()=> setValorBusqueda(valorCaja)}>Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container> 
      </Navbar>
    </div>
  )
}

export default Header  
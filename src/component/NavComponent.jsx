import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavComponent = () => {
  return (
    
      <Navbar expand="lg" className="bg-dark p-3 mb-3" >
        <Container className=''>
          <Navbar.Brand href="/" className="p-4 text-light">Rolling Heroes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dc" className='text-light'>Dc Comics</Nav.Link>
              <Nav.Link href="/marvel" className='text-light'>Marvel Comics</Nav.Link>
            </Nav>
            <Form>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Buscador"
                    className="mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Buscar</Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
  );
}

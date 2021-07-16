import React from "react";
import "./Menu.css";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";

class Menu extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Navbar className="col-md-12" bg="light" expand="lg">
            <Logo ancho={80} alto={80} />

            <Navbar.Brand href="/">{this.props.nombre}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Inicio
                </Nav.Link>
                <Nav.Link as={Link} to="/QuienesSomos">
                  Quienes Somos
                </Nav.Link>
                <Nav.Link href="#">Servicios</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    );
  }
}

export default Menu;

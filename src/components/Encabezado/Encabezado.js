import React from "react";
import "./Encabezado.css";

import { Container } from "react-bootstrap";

class Encabezado extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Bienvenido al sitio {this.props.nombrePagina}</h1>
          <p>El lugar ideal para encontrar la propiedad de sus sueños</p>
        </Container>
      </div>
    );
  }
}

export default Encabezado;

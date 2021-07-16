import React from "react";
import "./Contenido.css";
import Propiedad from "../Propiedad/Propiedad";
import { Container, Button } from "react-bootstrap";
import Hook from "../Hook/Hook";

class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mostrarPropiedades: false };
    this.muestraPropiedades = this.muestraPropiedades.bind(this);
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => console.log(data.data))
      .catch((err) => console.error(err));
  }
  muestraPropiedades() {
    let nuevoEstado = !this.state.mostrarPropiedades;
    this.setState({
      mostrarPropiedades: nuevoEstado,
    });
  }

  listarPropiedades() {
    let propiedades = [
      { ubicacion: "San Jose", precio: 1000 },
      { ubicacion: "Alajuela", precio: 2000 },
      { ubicacion: "Heredia", precio: 5000 },
    ];

    let lista = propiedades.map((propiedad, indice) => (
      <Propiedad
        key={indice + 1}
        id={indice + 1}
        ubicacion={propiedad.ubicacion}
        precio={propiedad.precio}
      />
    ));

    if (this.state.mostrarPropiedades) {
      return lista;
    }
  }

  render() {
    return (
      <Container>
        <p>Contenido del Sitio Web</p>
        <Button variant="success" onClick={this.muestraPropiedades}>
          {!this.state.mostrarPropiedades
            ? "Mostrar propiedades"
            : "Ocultar propiedades"}
        </Button>
        {this.listarPropiedades()}

        <div className="mt-5 mb-5">
          <Hook />
        </div>
      </Container>
    );
  }
}

export default Contenido;

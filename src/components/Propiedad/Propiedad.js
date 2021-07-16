import React from "react";
import "./Propiedad.css";

class Propiedad extends React.Component {
  render() {
    return (
      <div>
        <p>Propiedad</p>
        <p>Numero de Propiedad: {this.props.id}</p>
        <p>Ubicacion: {this.props.ubicacion}</p>
        <p>Precio: {this.props.precio}</p>
      </div>
    );
  }
}

export default Propiedad;

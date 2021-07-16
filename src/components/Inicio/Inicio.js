import React from "react";
import "./Inicio.css";
import Encabezado from "../Encabezado/Encabezado";
import Contenido from "../Contenido/Contenido";
import FormularioContacto from "../FormularioContacto/FormularioContacto";

class Inicio extends React.Component {
  render() {
    return (
      <div>
        <Encabezado nombrePagina="Bienes Raices" />
        <Contenido />
        <FormularioContacto />
      </div>
    );
  }
}

export default Inicio;

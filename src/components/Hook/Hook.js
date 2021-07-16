import React, { useState } from "react";
import "./Hook.css";

import { Button } from "react-bootstrap";

const Hook = () => {
  const [mostrar, mostrarPropiedadess] = useState(false);

  return (
    <div>
      <p>Estado del hook {mostrar.toString()}</p>
      <Button variant="primary" onClick={() => mostrarPropiedadess(!mostrar)}>
        {!mostrar ? "Mostrar" : "Ocultar"}
      </Button>
    </div>
  );
};

export default Hook;

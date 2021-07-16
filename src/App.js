import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Menu from "./components/Menu/Menu";

import Inicio from "./components/Inicio/Inicio";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Menu nombre="Bienes Raices" />

        <Route exact path="/">
          <Inicio />
        </Route>

        <Route path="/quienesSomos">
          <QuienesSomos />
        </Route>
      </Router>
    );
  }
}
export default App;

import React from "react";
import "./Logo.css";
import logo from "../../img/logo.svg";

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <img
          src={logo}
          width={`${this.props.ancho}px`}
          height={`${this.props.alto}px`}
          className="App-logo"
          alt="logo"
        />
      </div>
    );
  }
}
export default Logo;

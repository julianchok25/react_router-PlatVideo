import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// Including High order component
import { withRouter } from "react-router";

import "./header.css";
import logo from "../../../images/logo.png";

class Header extends Component {
  handleClick = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <header className="Header">
        <img src={logo} width={250} />
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="is-selected">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/videos" activeClassName="is-selected">
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink to="/v">Redirect</NavLink>
            </li>
            <li>
              <NavLink to="/contacto" activeClassName="is-selected">
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink to="/perfil" activeClassName="is-selected">
                Perfil
              </NavLink>
            </li>
            <li>
              <a onClick={this.handleClick}>👈</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);

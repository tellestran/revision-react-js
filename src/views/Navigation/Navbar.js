import React from "react";
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <NavLink to="/" exact={true}>
            Home
          </NavLink>
          <NavLink to="/todo">Todo</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>{" "}
      </div>
    );
  }
}

export default Navbar;

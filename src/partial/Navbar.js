import React, { Component } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import NavLink from "react-bootstrap/NavLink";
// import Nav from "react-bootstrap/Nav";
import withRouter from "react-router-dom/withRouter";
import {Navbar, NavLink, Nav } from 'react-bootstrap';

class Navbars extends Component {
  render() {
    const match = window.location.pathname === "/";
    return (
      <React.Fragment>
        <Navbar static="top" collapseOnSelect expand="sm" className="navbar">
          <Navbar.Brand href="/">
            <img
              className="logo"
              src={require("../assets/images/logo.png")}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-items">
              <NavLink
                className={`nav-link ${match ? "active" : ""}`}
                activeClassName={"on"}
                onClick={() => {
                  window.location.href = "./";
                }}
              >
                Home
              </NavLink>
           
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default withRouter(Navbars);

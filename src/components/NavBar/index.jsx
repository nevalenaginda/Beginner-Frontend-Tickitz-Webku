import React, { useState } from "react";
import "./assets/StyleNavbar.css";
import NavBarLogo from "../../assets/img/logo_navbar.png";
import {
  FormControl,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavBar() {
  let [state, setState] = useState(false);
  // let btnSearch = () => {
  //   setState = !state;
  //   console.log(state);
  // };
  return (
    <div>
      <Navbar className=" navbar-position" bg="white" expand="md">
        <Navbar.Brand href="/">
          <img className="navbar-brand" src={NavBarLogo} alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="color2 font-weight-bold mx-2" to="/">
              Movies
            </Link>
            <Link className="color2 font-weight-bold mx-2" to="/">
              Cinemas
            </Link>
            <Link className="color2 font-weight-bold mx-2" to="/">
              Buy Ticket
            </Link>
          </Nav>
          <Form inline>
            <NavDropdown
              className="color2  mx-2 font-weight-bold"
              title="Locations"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/">Jakarta</NavDropdown.Item>
              <NavDropdown.Item href="/">Lampung</NavDropdown.Item>
            </NavDropdown>
            {state ? (
              <FormControl type="text" placeholder="Search" className="" />
            ) : (
              ""
            )}
            <Button
              onClick={() => setState(!state)}
              className="button-search bg-white mx-2 "
            >
              <i className="fa fa-search color2" aria-hidden="true"></i>
            </Button>
            <Button className="button-navbar mx-2 font-weight-bold">
              Sign Up
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavBar;

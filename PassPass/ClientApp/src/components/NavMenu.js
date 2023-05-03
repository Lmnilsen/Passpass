import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      isLoggedIn: false
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  updateLoginStatus = (newValue) => {
    this.setState({ isLoggedIn: newValue });
  };

  static loggedIn(){
    if (! this.isLoggedIn) {
      return (
      <NavLink tag={Link} className="text-dark fs-4" to="/login">Login</NavLink>
      )
    }
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} className="text-dark fs-4" to="/">PassPass</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark fs-4" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark fs-4" to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark fs-4" to="/passwords">Passwords</NavLink>
              </NavItem>
            </ul>
          </Collapse>
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                {NavMenu.loggedIn()}
                {/* <NavLink tag={Link} className="text-dark fs-4" to="/login">Login</NavLink> */}
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

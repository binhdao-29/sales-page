import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

export default function () {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ShoppingMalls</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/products">Products</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Cart</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Users
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink>
                    <Link to="/login">Sign in</Link>
                  </NavLink> 
                </DropdownItem>
                <DropdownItem>
                  <NavLink>
                    <Link to="/signup">Sign up</Link>
                  </NavLink> 
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Help</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
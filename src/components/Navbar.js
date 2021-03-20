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
  Input,
  Button
} from 'reactstrap';

import loupe from '../img/loupe.svg';
import shoppingBag from '../img/shopping-bags.svg';
import cart from '../img/shopping-cart.svg';

export default function TopMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <div style={{display: 'flex', marginTop: '5px'}}>
            <img src={shoppingBag} width={32} height={32} />
            <p style={{ marginLeft : '5px', color:'#f53d2d', fontSize: 28}}>Shopping</p>
          </div>
        </NavbarBrand>
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
            <NavItem>
              <div style={{display:'flex', width : 700, marginLeft : 30, marginRight : 100}}>
                <Input type="search" name="search" 
                placeholder="Find products faster" />
                <Button outline color="secondary" >
                  <img src={loupe} width={18} height={18} />
                </Button>
              </div>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                <img src={cart} width={38} height={38} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
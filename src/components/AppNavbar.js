import React, { useState } from 'react';
import { Button, NavItem, UncontrolledDropdown, Collapse, 
        DropdownMenu, DropdownItem, NavbarToggler, Nav,
        DropdownToggle, Navbar, Container, NavbarText,
        NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NavLogo from '../img/mainlogo.png';
import { MdSettings } from "react-icons/md";
import './nav.css'

function RegularSettings() {
  return (
    <NavItem>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret style={{color:"white"}}>
        <MdSettings/>
      </DropdownToggle>
      <DropdownMenu right>
        <NavLink style={{color:'black'}} 
          to={process.env.PUBLIC_URL + "/mock/profile"}>
          <DropdownItem>
          Profile
          </DropdownItem>
        </NavLink>
        <DropdownItem href={process.env.PUBLIC_URL}>
          Sign Out</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    </NavItem>
  )
}
function HamburgerSettings() {
  return (
    <div>
        <NavItem>
          <NavLink style={{color:'black', padding:'0'}} 
            to={process.env.PUBLIC_URL + "/mock/profile"}>
            <Button color="light">
            Profile
            </Button>
          </NavLink>
        </NavItem>

        <NavItem>
            <Button color="light" href={process.env.PUBLIC_URL}>
            Sign Out
            </Button>
        </NavItem>
    </div>
  )
}

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="success" light expand="md">
        
        <NavLink to={process.env.PUBLIC_URL + "/mock"} 
          style={{padding:'0'}}>
          <img style={{maxWidth:'2em'}} src={NavLogo} alt="Logo" />

        </NavLink>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className='m-auto' navbar>

            <NavItem>
              <NavLink style={{color:'black', padding:'0'}} 
                to={process.env.PUBLIC_URL + "/mock"}>
                <Button color="light">
                Home
                </Button>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink style={{color:'black', padding:'0'}} 
                to={process.env.PUBLIC_URL + "/mock/dashboard"}>
                <Button color="light">
                Find Other Interns
                </Button>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink style={{color:'black', padding:'0'}} 
                to={process.env.PUBLIC_URL + "/mock/recruiters"}>
                <Button color="light">
                Find Recruiters
                </Button>
              </NavLink>
            </NavItem>

            { isOpen ?  <HamburgerSettings /> : <RegularSettings /> }

          </Nav>
        </Collapse>

      </Navbar>
    </div>
  );
}

export default AppNavbar;
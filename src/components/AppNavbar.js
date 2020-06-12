import React, { Component } from 'react';
import { Redirect } from 'react-router';
import topLogo from '../img/UconnectlabBetaWhite.png'
import { Button, ButtonGroup, ButtonDropdown, 
        DropdownMenu, DropdownItem, 
        DropdownToggle, Collapse, Navbar,
        NavbarToggler, NavbarBrand, Nav,
        NavItem, NavLink, Container, Progress } from 'reactstrap';


class AppNavbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {

    return (
    <div>
      <Navbar color="success">
        <Container>
          <a href="/search411/mock" >
            <h4 style={{color:"white"}}>Logo</h4>
          </a>

          <ButtonGroup>
          <Button color="light">Home</Button>

          <Button color="light">About</Button>
          <Button color="light">Contact</Button>
          <Button color="light">FAQ</Button>

          <ButtonDropdown color="light" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret color="light">
              Settings
            </DropdownToggle>
            <DropdownMenu >
              <DropdownItem color="light">Profile</DropdownItem>
              <DropdownItem>Find Other Interns</DropdownItem>
              <DropdownItem>Find Recruiters</DropdownItem>
              <DropdownItem href="/search411/mock">Sign Out</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </ButtonGroup >
        <Button color="light"href="/search411/">Exit Mockup</Button>
        </Container> 

      </Navbar>


    </div>
    )
  }
}

export default AppNavbar;
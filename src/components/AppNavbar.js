import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonDropdown, 
        DropdownMenu, DropdownItem, 
        DropdownToggle,Navbar, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
          <NavLink style={{color:'black', padding:'0'}} 
            to={process.env.PUBLIC_URL + "/mock"}>
            <Button color="light">
            Home
            </Button>
          </NavLink>

          <NavLink style={{color:'black', padding:'0'}} 
            to={process.env.PUBLIC_URL + "/mock/dashboard"}>
            <Button color="light">
            Find Other Interns
            </Button>
          </NavLink>
          <NavLink style={{color:'black', padding:'0'}} 
            to={process.env.PUBLIC_URL + "/mock/recruiters"}>
            <Button color="light">
            Find Recruiters
            </Button>
          </NavLink>

          <ButtonDropdown color="light" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret color="light">
              Settings
            </DropdownToggle>
            <DropdownMenu right>

              <NavLink style={{color:'black'}} 
                to={process.env.PUBLIC_URL + "/mock/profile"}>
                <DropdownItem>
                Profile
                </DropdownItem>
              </NavLink>

              <DropdownItem href={process.env.PUBLIC_URL}>Sign Out</DropdownItem>

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
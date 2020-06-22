import React from 'react';
import { Container, Jumbotron, Toast, ToastHeader } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import MainLogo from './img/mainlogo.png';

function MainMenu() {
  return (
    <div style={{padding:'0'}}>
    <Toast style={{padding:'0'}}>
      <ToastHeader>
        @Search411
      </ToastHeader>

      <Jumbotron style={{paddingBottom:'9em'}}>
      <p style={{textAlign:'center', 
        display: 'flex', justifyContent: 'center'}}>
        This doesn't have to be you.
      </p>
      <div style={{display: 'flex', justifyContent: 'center', 
        padding:"0.6em", bgcolor: "grey"}}>
        <img style={{maxWidth:'7em'}} src={MainLogo} alt="Logo" />
      </div>
      <div>
        <Container style={{display: 'flex', 
          justifyContent: 'center', padding:"1em",}}>
          <NavLink to={process.env.PUBLIC_URL + "/mock/register"} 
            className="btn btn-success">Sign Up</NavLink>
        </Container> 
      </div>
      <div style={{textAlign:'center',
        display: 'flex', justifyContent: 'center'}}>
        Already a member?
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <NavLink to={process.env.PUBLIC_URL + "/mock/login"}>
          Sign In
        </NavLink>
      </div>
      </Jumbotron>

    </Toast>
    </div>
  )
}

export default MainMenu;
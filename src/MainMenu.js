import React from 'react';
import {
  Container, Jumbotron, Toast, ToastHeader
} from 'reactstrap';
import { NavLink } from 'react-router-dom'

function MainMenu() {
  return (
    <div style={{padding:'0'}}>
    <Toast style={{padding:'0'}}>
      <ToastHeader>
        @productname
      </ToastHeader>

      <Jumbotron style={{paddingBottom:'9em'}}>
      <p style={{display: 'flex', justifyContent: 'center'}}>
      This doesn't have to be you.
      </p>
      <div style={{display: 'flex', justifyContent: 'center', 
        padding:"2em", bgcolor: "grey"}}>
        <a href="/search411/mock" >
        <h1>Logo</h1>
        </a>
      </div>
      <div>
        <Container style={{display: 'flex', justifyContent: 'center', padding:"1em",}}>
          <NavLink to={process.env.PUBLIC_URL + "/mock/register"} 
            className="btn btn-success">Sign Up</NavLink>
        </Container> 
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        Already a member?
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <NavLink to={process.env.PUBLIC_URL + "/mock/login"}>Sign In</NavLink>
      </div>
      </Jumbotron>

    </Toast>
    </div>
  )
}

export default MainMenu;
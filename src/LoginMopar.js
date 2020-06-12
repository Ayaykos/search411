import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Input,
  Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Login.css';
import Jumbotron from 'reactstrap/lib/Jumbotron';
class LoginMopar extends Component {

  render() {
    return (
      <div>
        <Jumbotron>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          
          <Container className="App">
            <div height="41em"></div>
          <div style={{textAlign:"center", width:"20em"}}>
            <h4 style={{color:"green"}}>Sign in and get grinding.</h4>
          </div>
            <Form className="form">
              <Col>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email Address"
                  />
                </FormGroup>
                
              </Col>
              <Col>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                  />
                </FormGroup>
              </Col>
            </Form>
          </Container>
        </div>

          <div >
            <div style={{display: 'flex', justifyContent: 'right'}}>
              <a style={{color:"green"}} >Forgot your password?</a>
            </div>
            <div style={{display: 'flex', justifyContent: 'right'}}>
              <a style={{color:"green"}} >Don't have an account?</a>
            </div>
            <div style={{display: 'flex', justifyContent: 'right'}}>
            <NavLink to={process.env.PUBLIC_URL +"/mock/dashboard"}
            className="btn btn-success">Let's go ></NavLink>
            </div>
            <div style={{display: 'flex', justifyContent: 'right'}}>
          <NavLink to={process.env.PUBLIC_URL +"/mock/"}
            className="btn btn-success">Back</NavLink>
          </div>
          </div>
          </Jumbotron>
      </div>
    );
  }
}

export default LoginMopar;
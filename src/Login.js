import React, {useState} from 'react';
import {
  Container, Col, Form,
  FormGroup, Input,
  Tooltip, Toast, ToastHeader
} from 'reactstrap';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import { NavLink } from 'react-router-dom';
import Notice from './components/Notice'
import './css/Login.css';


const Login = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
    <Toast style={{padding:'0'}}>
      <ToastHeader>
        @productname
      </ToastHeader>
    <Tooltip placement="right" isOpen={tooltipOpen} target="notice" 
      toggle={toggle}><Notice type="login"/></Tooltip>
    <Jumbotron>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Container className="App">

        <div style={{textAlign:"center", width:"20em"}}>
          <h4 style={{color:"green"}}>Sign in and get grinding.</h4>
        </div>
        <Notice type="login"/>
          <Form className="form" id="notice">
            <Col>
              <FormGroup>
                <Input type="email" placeholder="Email Address" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input type="password" placeholder="Password" />
              </FormGroup >
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
          className="btn btn-success">Let's go {'>'}</NavLink>
        </div>
        <div style={{display: 'flex', justifyContent: 'right'}}>
          <NavLink to={process.env.PUBLIC_URL +"/mock/"}
          className="btn btn-success">Back</NavLink>
        </div>
      </div>
    </Jumbotron>
    </Toast>
    </div>
  );
}

export default Login;
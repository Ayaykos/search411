import React, { useState } from "react";
import { Tooltip, Container, Col,
FormGroup, Input, Jumbotron, Toast, ToastHeader} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Notice from './components/Notice'

const Register = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (  
    <div>
    <Toast style={{padding:'0'}}>
      <ToastHeader>
        @productname
      </ToastHeader>

      <Tooltip placement="right" isOpen={tooltipOpen} target="notice" 
      toggle={toggle}><Notice type="register"/></Tooltip>
      <Jumbotron>
      <div>
        <h4 style={{color:'green',display: 'flex', 
        justifyContent: 'center'}}>Register</h4>
      </div>
      <Notice type="register"/>
      <Container className="App" id="notice">
        <Col>
          <FormGroup >
            <Input type="username" placeholder="email"/>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Input type="email"  placeholder="username" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Input type="password" placeholder="password" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Input type="confirmpassword" placeholder="Confirm Password" />
          </FormGroup>
        </Col>
        
      </Container>
      <div >
        <div style={{display: 'flex', justifyContent: 'right'}}>
          <NavLink to={process.env.PUBLIC_URL +"/mock/dashboard"}
          className="btn btn-success">Submit {'>'}</NavLink>
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


export default Register;
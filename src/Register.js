import React, { Component } from "react";
import { Button, Alert, Container, Form, Col,
FormGroup, FormFeedback, Label, Input, Jumbotron } from 'reactstrap';
import { Redirect } from 'react-router';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
	    password2: "",
      validate: {
        emailState: "",
        userExists: false,
        passMatch: true,
        registerSuccess: false
      }
    };
  }
  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  }
  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value,
    });
  };
  render() {
    const { email, username, password } = this.state;

    return (  
      <div>
        <Jumbotron>
        <div>
      <h4 style={{color:'green',display: 'flex', 
      justifyContent: 'center'}}>Register</h4>
      </div>
      <Container className="App">

          <Col>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="email"
                value={email}
                valid={this.state.validate.emailState === "has-success"}
                invalid={this.state.validate.emailState === "has-danger"}
                onChange={(e) => {
                  this.validateEmail(e);
                  this.handleChange(e);
                }}
              />
              <FormFeedback valid>Valid email.</FormFeedback>
              <FormFeedback>Invalid email.</FormFeedback>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="username"
                name="username"
                id="exampleUsername"
                placeholder="username"
                value={username}
                onChange={(e) => this.handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  const {  validate } = this.state;
                  validate.passMatch = (e['target']['value'] === this.state.validate.password2);
                  this.setState({ validate });
                  this.handleChange(e)
                }}
				        //onChange = { console.log('e') }
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="confirmpassword"
                name="confirmpassword"
                id="exampleConfirmPassword"
                placeholder="confirm password"
                invalid={!this.state.validate.passMatch}
                onChange={(e) => {
                  const { validate } = this.state;
                  validate.password2 = e['target']['value'];
                  validate.passMatch = (e['target']['value'] === this.state.password);
                  this.setState({ validate });
                  this.handleChange(e)
                }}
              />
			      <FormFeedback>Passwords don't match.</FormFeedback>
            </FormGroup>
          </Col>
          <Button color="success">Submit</Button>
      </Container>
      </Jumbotron>
      </div>
    );
  }
}

export default Register;
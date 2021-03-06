import React, { Component } from "react";
import { BrowserRouter as Router, 
  Route, Switch, NavLink } from 'react-router-dom';
import { App } from './App';
import {
  Alert,
  Container,
  Col,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Button,
  Spinner
} from "reactstrap";
import Highlighter from "react-highlight-words";
import { MdLaptopMac } from "react-icons/md";
import ParticlesBg from "particles-bg";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

class Loading extends Component {
  render() {
    return (
      <div>{this.props.loading ? <Spinner 
        style={{ width: '3rem', height: '3rem' }} 
        size="sm" color="primary" /> : <h1></h1>}
      </div>
    )
  }
}
class Sent extends Component {
  render() {
    return (
      <div>        
        <Alert color="success" 
          isOpen={this.props.sent && !this.props.loading && 
          !this.props.noemail}>Thank you!</Alert>
      </div>
    )
  }
}
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      loading: false,
      sent: 0,
      validate: {
        emailState: "",
        userExists: false,
        passMatch: true,
        noemail: false,
      },
      
      GOOGLE_FORM_EMAIL_ID: 'entry.1917533847',
      GOOGLE_FORM_ACTION_URL: 'https://docs.google.com/forms/d/e/1FAIpQLSdKjV8dHasVOwux7YBK9LEuaMUhhYoqFaPrpwxNBSrDBbXNBQ/formResponse',
      CORS_PROXY: 'https://cors-anywhere.herokuapp.com/'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  sendMessage = () => {  
    const formData = new FormData() 
    formData.append(this.state.GOOGLE_FORM_EMAIL_ID, this.state.email)
    this.setState({     
      loading: true
    })  
    axios.post(this.state.CORS_PROXY + 
      this.state.GOOGLE_FORM_ACTION_URL, formData)
      .then(() => {     
        this.setState({     
          email: '',
          validate: {
            noemail: false
          },
          loading: false,
          sent: 1
        })  
    }).catch(() => {      
      this.setState({        
        messageError: true, 
        loading: false  
      })  
    })
  }
  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (this.state.email != ""){
      validate.noemail = false;
    }
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

  handleSubmit = (event) => {  
    event.preventDefault()
    if (this.state.email != ""){
      this.sendMessage()
    } else{
      this.validateEmail(event);
      const { validate } = this.state;
      validate.noemail = true;
      this.setState({ validate });
    }
    
  } //other stuff  }
  render() {
    const { email, username, password } = this.state;

    return (
      <div>
        <Jumbotron>
          <hr className="my-2" />
          <p className="lead" 
            style={{display: 'flex', justifyContent: 'center'}}>
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={["future interns", "young job seekers"]}
              autoEscape={true}
              textToHighlight="We're looking to make the recruiting process easier for 
              future interns and young job seekers."/>
          </p>
          <hr className="my-2" />
          <p style={{display: 'flex', justifyContent: 'center'}}>
            To test out our proof of concept, we built a mock website
            that mimicks what we expect the platform to be like.</p>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <NavLink to={process.env.PUBLIC_URL + "/mock"} 
            className="btn btn-primary">Check out mock website <MdLaptopMac /></NavLink>
          </div>
          <ParticlesBg type="circle" bg={true}/>
        </Jumbotron>

      <div>
        <h3 style={{textAlign:"center"}}>Interested?</h3>
        <p style={{textAlign:"center"}}>Sign up now to get the latest
        updates and early user privileges.</p>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <h2 style={{textAlign:"center"}}>{this.props.usertype}</h2>
      
      <Container className="App" 
        style={{display: 'flex', justifyContent: 'center'}}>

        <Form  className="form" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email Address"
                value={email}
                valid={this.state.validate.emailState === "has-success"}
                invalid={this.state.validate.emailState === "has-danger"}
                onChange={(e) => {
                  this.validateEmail(e);
                  this.handleChange(e);
                }}
              />
            </FormGroup>
            
          </Col>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button color="primary">Submit</Button>
          </div>
        </Form>
        
      </Container>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', padding:"10px"}}>
        <Alert color="danger" 
          isOpen={this.state.validate.noemail}>
            Please enter an email address.</Alert>
        </div>
      <div style={{display: 'flex', justifyContent: 'center', padding:"10px"}}>

        <Loading loading={this.state.loading}/>
        <Sent sent={this.state.sent} loading={this.state.loading} 
          noemail={this.state.validate.noemail}/>
      </div>
      </div>
    );
  }
}
class LandingPage extends Component {
  render() {
    return (
        <Router>
        <div>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL +"/"} 
              component={Landing} />
            <Route exact path={process.env.PUBLIC_URL +"/mock"} 
              component={App} />
            <Route exact path={process.env.PUBLIC_URL +"/mock/login"} 
              component={App} />
            <Route exact path={process.env.PUBLIC_URL +"/mock/register"} 
              component={App} />
            <Route exact path={process.env.PUBLIC_URL +"/mock/dashboard"} 
              component={App} />
            <Route exact path={process.env.PUBLIC_URL +"/mock/recruiters"} 
              component={App} />
            <Route exact path={process.env.PUBLIC_URL +"/mock/interns"} 
              component={App} />
            <Route exact path={process.env.PUBLIC_URL +"/mock/profile"} 
              component={App} />
          </Switch>
        </div>
        </Router>
    )
  }
}
export default LandingPage;
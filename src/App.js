import React, { Component } from 'react';
import { Navbar, Container, Toast, ToastBody, ToastHeader, Progress,
Jumbotron } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';

import AppNavbar from './components/AppNavbar';
import Register from './Register';
import LoginMopar from './LoginMopar';
import {  Dashboard,
  GetStarted,
  BetaFeatures,
  FAQ} from './Dashboard';
import BackgroundSlider from './components/BackgroundSlider'
import image1 from './img/basebg.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class FCACheck extends Component {
  render() {
    return (
       <Redirect to="/mock/register/regular" />
    )
  }
}
class SignUp extends Component {
  render() {

    return (
      <div>
        <Jumbotron>
        <p style={{display: 'flex', justifyContent: 'center'}}>
        This doesn't have to be you.
        </p>
        <div style={{display: 'flex', justifyContent: 'center', 
          padding:"2em", bgcolor: "grey"}}>
          <a href="/mock" >
          <h1>Logo</h1>
          </a>
        </div>
        <div>
          <Container style={{display: 'flex', justifyContent: 'center', padding:"1em",}}>
            <NavLink to="/mock/register" className="btn btn-success">Sign Up</NavLink>
          </Container> 
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          Already a member?
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <NavLink to="/mock/login"> Sign In</NavLink>
        </div>
        </Jumbotron>
      </div>
    )
  }
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
  }
  render() {

    return (
      <div>
        <Router>
          <AppNavbar/>


          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
            <Toast id ="toast1">
              <ToastHeader>
                @edgar-al-inpo
              </ToastHeader>
              <ToastBody>
                ugh idk what to do im graduating next year<br></br>
                rip life
              </ToastBody>
            </Toast>
            <Toast>
              <ToastHeader>
                @racecar_
              </ToastHeader>
              <ToastBody>
                you know school costs a lot of money, kinda needed that income :/
              </ToastBody>
            </Toast>
            <Toast>
              <ToastHeader>
                @michelle_anderson
              </ToastHeader>
              <ToastBody>
                I would appreciate a refund on 2020. Is a cancelled internship
                warranty eligible?
              </ToastBody>
            </Toast>
            <Toast>
              <ToastHeader>
                @eboy22
              </ToastHeader>
              <ToastBody>
                Summer 2020 cancelled :( 
              </ToastBody>
            </Toast>
            <Toast>
              <ToastHeader>
                @shrek
              </ToastHeader>
              <ToastBody>
                I'm gonna stick with an unpaid internship for now, at
                least I get some experience
              </ToastBody>
            </Toast>

            </div>
            <Switch>
            <Toast>
              <ToastHeader>
                @productname
              </ToastHeader>
            
              <Route exact path="/mock/" component={SignUp} />
              <Route exact path="/mock/register" component={FCACheck} />
              <Route exact path="/mock/register/employee" 
                render={(props) => <Register {...props} usertype="FCA"/>} />
              <Route exact path="/mock/register/regular" 
                render={(props) => <Register {...props} usertype="Regular"/>} />
              <Route exact path="/mock/login" component={LoginMopar} />
              <Route exact path="/mock/dashboard" component={Dashboard} />
              <ToastBody>
                <a href="https://umich.edu">Copyright © 2020 <br></br>University of Michigan</a>
              </ToastBody>
              </Toast>
            </Switch>
          </div>
          
        </Router>

        <BackgroundSlider
          images={shuffleArray([image1])}
          duration={60} transition={20} />


      </div>
    );
  }
}

export { App, FCACheck} ;

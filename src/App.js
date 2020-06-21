import React, { Component } from 'react';
import { Container, Toast, ToastBody, ToastHeader, Jumbotron } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import AppNavbar from './components/AppNavbar';
import MainMenu from './MainMenu';
import Register from './Register';
import Login from './Login';
import BackgroundSlider from './components/BackgroundSlider'
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from './img/background.png'


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
      loggedIn: false,
      showLogin: false,
      showRegister: false,
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
            <Toast style={{padding:'0'}}>
              <ToastHeader>
                @productname
              </ToastHeader>

              <Route exact path={process.env.PUBLIC_URL + "/mock"} 
                component={MainMenu}/>
              <Route exact path={process.env.PUBLIC_URL + "/mock/register"} 
                component={Register}/>
              <Route exact path={process.env.PUBLIC_URL + "/mock/login"} 
                component={Login}/>


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

export { App } ;

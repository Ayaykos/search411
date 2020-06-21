import React, { Component } from 'react';
import { Container, Toast, ToastBody, ToastHeader, Jumbotron } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import AppNavbar from './components/AppNavbar';
import MainMenu from './MainMenu';
import Register from './Register';
import Login from './Login';
import Comments from './Comments';
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
  render() {
    return (
      <div>
        <Router>
          <AppNavbar/>


          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/mock"} 
                component={Comments}/>
            <Route exact path={process.env.PUBLIC_URL + "/mock/register"} 
              component={Comments}/>
            <Route exact path={process.env.PUBLIC_URL + "/mock/login"} 
              component={Comments}/>
            <Route exact path={process.env.PUBLIC_URL + "/mock/dashboard"} 
              render={() => (<Comments logged_in={true}/>)} />
            </Switch>
            <Switch>


              <Route exact path={process.env.PUBLIC_URL + "/mock"} 
                component={MainMenu}/>
              <Route exact path={process.env.PUBLIC_URL + "/mock/register"} 
                component={Register}/>
              <Route exact path={process.env.PUBLIC_URL + "/mock/login"} 
                component={Login}/>



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
import React, { Component } from 'react';
import { Jumbotron, Button, Container, 
  Col, Row, Form, FormGroup, 
  InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class GetStarted extends Component {
  render() {
    return (
      <div>
        <Container >
          <h1 className="display-5">Get Started</h1>
          <InputGroup>
            <Input placeholder="Search Beta Features" />
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Input addon type="checkbox" aria-label="Checkbox for following text input" />
              </InputGroupText>
            </InputGroupAddon>
            Search all categories
          </InputGroup>
        </Container>
      </div>
    )
  }
}

class BetaFeatures extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

class FAQ extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


class Dashboard extends Component {
  render() {
    return (
      <div >
        <Router>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + "/mock/dashboard/getstarted"} component={GetStarted} />
              <Route exact path={process.env.PUBLIC_URL + "/mock/dashboard/features"} component={BetaFeatures} />
              <Route exact path={process.env.PUBLIC_URL + "/mock/dashboard/faq"} component={FAQ} />

            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export {
  Dashboard,
  GetStarted,
  BetaFeatures,
  FAQ
};
import React, { useState } from 'react';
import {Button, ButtonGroup, Input, Tooltip, UncontrolledCollapse, 
    Jumbotron, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Notice from './components/Notice'
import Comments from './Comments'

const Recruiters = (props) =>  {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  }
  return (
    <div>
    <Jumbotron fluid style={{padding:'5em'}}>
      <Container fluid>
        <h1 className="display-3">Recruiters</h1>
        <p className="lead">Search our list of signed up recruiters from all fields.</p>
        <Input placeholder="Search Recruiters" />
      
    
      <p>Find recruiters in fields:</p>
      <ButtonGroup>
        <Button color="primary" onClick={() => 
          onCheckboxBtnClick(1)} active={cSelected.includes(1)}>Business</Button>
        <Button color="primary" onClick={() => 
          onCheckboxBtnClick(2)} active={cSelected.includes(2)}>Computer Science</Button>
        <Button color="primary" onClick={() => 
          onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Medicine</Button>
        <Button color="primary" onClick={() => 
          onCheckboxBtnClick(4)} active={cSelected.includes(3)}>Research</Button>
      </ButtonGroup>
      </Container>
      </Jumbotron>
    </div>
  );
}

export default Recruiters;
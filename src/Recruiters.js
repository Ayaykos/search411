import React, { useState } from 'react';
import {Button, ButtonGroup, Input, Tooltip, UncontrolledCollapse, 
    Jumbotron, Container } from 'reactstrap';
import { MdSearch } from "react-icons/md";
import Notice from './components/Notice'

const Recruiters = (props) =>  {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);


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
    <Tooltip placement="right" isOpen={tooltipOpen} target="notice" 
      toggle={toggle}><Notice type="recruiters"/></Tooltip>
    <Jumbotron fluid style={{padding:'5em'}}>
      <Container fluid>
        <h1 className="display-3">Recruiters</h1>
        <p className="lead">Search our list of signed up recruiters from all fields.</p>
        <Input placeholder="Search Recruiters"/>

        <p>Find recruiters in fields:</p>
        <ButtonGroup>
          <Button outline color="primary" onClick={() => 
            onCheckboxBtnClick(1)} active={cSelected.includes(1)}>Business</Button>
          <Button outline color="primary" onClick={() => 
            onCheckboxBtnClick(2)} active={cSelected.includes(2)}>Computer Science</Button>
          <Button outline color="primary" onClick={() => 
            onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Medicine</Button>
          <Button outline color="primary" onClick={() => 
            onCheckboxBtnClick(4)} active={cSelected.includes(4)}>Research</Button>
        </ButtonGroup>
        <Button color="primary" id="notice"><MdSearch /></Button>
        </Container>
        
      </Jumbotron>
    </div>
  );
}

export default Recruiters;
import React, { useState } from 'react';
import {Jumbotron, Row, Col , Container,
  Button, Badge,  Tooltip } from 'reactstrap';
import { MdFileUpload } from "react-icons/md";
import Notice from './components/Notice'

const Profile = () =>  {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  let username = `{username}`
  let email = `{email}`
  let company = `{company}`
  return(
    <div>
    <Tooltip placement="right" isOpen={tooltipOpen} target="notice" 
      toggle={toggle}><Notice type="uploadresume"/></Tooltip>
  
    <Jumbotron fluid style={{paddingLeft:'10em', paddingRight:'10em'}}>
      <Container fluid >
        <h1 className="display-3">Profile</h1>
        <hr className="my-2" />
        <h5><Badge color="primary">Intern</Badge></h5>
      
        <Row>
          <Col xs="6">Username</Col>
          <Col xs="6">{username}</Col>
        </Row>
        <Row>
          <Col xs="6">Email</Col>
          <Col xs="6">{email}</Col>
        </Row>
        <Row>
          <Col xs="6">Company</Col>
          <Col xs="6">{company}</Col>
        </Row>
        <Button style={{padding:'0'}} id="notice" color="link">
          <Badge color="primary" pill >
            Upload Resume<MdFileUpload/>
          </Badge>
        </Button>
      </Container>
    </Jumbotron>
    </div>
  )
}

export default Profile;
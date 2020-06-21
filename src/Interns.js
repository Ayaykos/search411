import React, { useState } from 'react';
import {Toast, ToastBody, ToastHeader,  Form, FormGroup, Badge, 
  Input, Tooltip, UncontrolledCollapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Notice from './components/Notice'
import Comments from './Comments'

const Interns = (props) =>  {
  return(
    <div>
      <h1>YAA</h1>
      <Comments logged_in={true}/>
    </div>
  )
}

export default Interns;
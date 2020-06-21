import React, { useState } from 'react';
import {Toast, ToastBody, ToastHeader,  Form, FormGroup, Badge, 
  Input, Tooltip, UncontrolledCollapse, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { MdMoreHoriz } from "react-icons/md";
import Notice from './components/Notice'

const Comments = (props) =>  {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return(
    <div>
      {props.logged_in ? <div>
        <Tooltip placement="right" isOpen={tooltipOpen} target="notice" 
        toggle={toggle}><Notice type="postcomment"/></Tooltip>
        <h5><Badge color="primary"
        href={process.env.PUBLIC_URL + "/mock/dashboard#"} 
        id="postcomment">Post a Comment</Badge></h5>
        <UncontrolledCollapse toggler="#postcomment">
        <Form>
          <FormGroup>
            <Input type="textarea" placeholder="Body"/>
            <Badge href={process.env.PUBLIC_URL + "/mock/dashboard#"}
            color="dark" id="notice">
            Submit</Badge>
          </FormGroup>
        </Form>
        </UncontrolledCollapse></div>: null }

      <Toast>
        <ToastHeader>
          @edgar-al-inpo
        </ToastHeader>
        <ToastBody>
          ugh idk what to do im graduating next year<br></br>
          rip life
        </ToastBody>

        {props.logged_in ? 
        <div>
          <ToastHeader id="comments1">
          <NavLink to={process.env.PUBLIC_URL + "/mock/dashboard#"}>
            Comments</NavLink>
          </ToastHeader>
          <UncontrolledCollapse toggler="#comments1" 
            style={{background: 'lightgray', padding:'0'}}>
            <Toast style={{padding:'0.6em', justifyContent:'right'}}>
              <b>@homer</b><br></br>same, still don't have any internship experience
            </Toast>
            <Toast style={{padding:'0.6em', justifyContent:'right'}}>
              <b>@eecs_</b>{'  '}
              <Badge color="primary" pill >
                Recruiter
              </Badge>
              <br></br>What's your major?
            </Toast>

            <ToastHeader >
            <NavLink style={{display:'flex', justifyContent:'right'}} 
              to={process.env.PUBLIC_URL + "/mock/dashboard#"}>
                Reply</NavLink>
            </ToastHeader>
          </UncontrolledCollapse >
        </div> : null }
      </Toast>

      <Toast>
        <ToastHeader>
          @racecar_
        </ToastHeader>
        <ToastBody>
          you know school costs a lot of money, kinda needed that income :/
        </ToastBody>

        {props.logged_in ?
        <div>
          <ToastHeader id="comments2">
          
          <NavLink to={process.env.PUBLIC_URL + "/mock/dashboard#"}>
            Comments</NavLink>
          </ToastHeader>
          <UncontrolledCollapse toggler="#comments2" 
            style={{background: 'lightgray', padding:'0'}}>
            <Toast style={{padding:'0.6em', justifyContent:'right'}}>
              <b>@alyssa</b>{'  '}
              <Badge color="primary" pill >
                Recruiter
              </Badge>
              <br></br>You should definitely contact Student 
              Financial Services and see what options you have available
            </Toast>
            <Toast style={{padding:'0.6em', justifyContent:'right'}}>
              <b>@minecraftwillneverdie</b><br></br>^^^that and financial 
              aid office
            </Toast>
            <Toast style={{padding:'0.6em', justifyContent:'right'}}>
              <b style={{color:"green"}}>@racecar_</b><br></br>It doesn't feel like 
              it really does much tho, at the end of the day you have to 
              pay what you have to pay
            </Toast>
            <Toast style={{padding:'0.6em', justifyContent:'right'}}>
              <b>@x120</b><br></br>Well you don't know unless you see
              what you have available, and how does it hurt?
            </Toast>

            <ToastHeader >
            <NavLink style={{display:'flex', justifyContent:'right'}} 
              to={process.env.PUBLIC_URL + "/mock/dashboard#"}>
                Reply</NavLink>
            </ToastHeader>
          </UncontrolledCollapse >
        </div> : null}
      </Toast>


      <Toast>
        <ToastHeader>
          @michelle_anderson
        </ToastHeader>
        <ToastBody>
          I would appreciate a refund on 2020. Is a cancelled internship
          warranty eligible?
        </ToastBody>

        {props.logged_in ? 
        <div>
          <ToastHeader id="comments3">
          <NavLink to={process.env.PUBLIC_URL + "/mock/dashboard#"}>
            Comments</NavLink>
          </ToastHeader>
          <UncontrolledCollapse toggler="#comments3" 
            style={{background: 'lightgray', padding:'0'}}>
            <span style={{color:"gray", paddingLeft:'0.6em'}}>Make the first!</span>
            <ToastHeader >
            <NavLink style={{display:'flex', justifyContent:'right'}} 
              to={process.env.PUBLIC_URL + "/mock/dashboard#"}>
                Reply</NavLink>
            </ToastHeader>
          </UncontrolledCollapse >
        </div> : null }
      </Toast>


      <Toast>
        <ToastHeader>
          @eboy22
        </ToastHeader>
        <ToastBody>
          Summer 2020 cancelled :( 
        </ToastBody>

        {props.logged_in ?
        <div>
          <ToastHeader id="comments4">
          <NavLink to={process.env.PUBLIC_URL + "/mock/dashboard#"}>
            Comments</NavLink>
          </ToastHeader>
          <UncontrolledCollapse toggler="#comments4" 
            style={{background: 'lightgray', padding:'0'}}>
            <span style={{color:"gray", paddingLeft:'0.6em'}}>Make the first!</span>
            <ToastHeader >
            <NavLink style={{display:'flex', justifyContent:'right'}} 
              to={process.env.PUBLIC_URL + "/mock/dashboard#"}>
                Reply</NavLink>
            </ToastHeader>
          </UncontrolledCollapse >
        </div> : null }
      </Toast>


      <Toast>
        <ToastHeader>
          @shrek
        </ToastHeader>
        <ToastBody>
          I'm gonna stick with an unpaid internship for now, at
          least I get some experience
        </ToastBody>

        {props.logged_in ?
        <div>
          <ToastHeader id="comments5">
          <NavLink to={process.env.PUBLIC_URL + "/mock/dashboard#"}>
            Comments</NavLink>
          </ToastHeader>
          <UncontrolledCollapse toggler="#comments5" 
            style={{background: 'lightgray', padding:'0'}}>
            <Toast style={{padding:'0.6em', justifyContent:'right'}}>
              <b>@idkanymore</b><br></br>lol I'm doing the same thing
            </Toast>

            <ToastHeader >
            <NavLink style={{display:'flex', justifyContent:'right'}} 
              to={process.env.PUBLIC_URL + "/mock/dashboard#"}>
                Reply</NavLink>
            </ToastHeader>
          </UncontrolledCollapse >
        </div> : null }
      </Toast>
      {props.logged_in ?
        <div>
          <div style={{paddingBottom:"2em"}}>
          <Button id="notice" color="link" style={{padding:"0"}}>
            <Badge pill color="primary">
            <MdMoreHoriz />
            </Badge>
          </Button>
          </div>
        </div> : null }
    </div>
  )
}

export default Comments;
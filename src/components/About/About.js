import React, { Component } from 'react';
import "./About.css";
import {  MDBRow, MDBCol, MDBMedia } from "mdbreact";
class About extends Component {
    state = {  }
    render() { 
        return ( 
          <div className="about">
            <MDBMedia heading>
                <h1>About Me</h1>
            </MDBMedia>
            <MDBRow className="mb-4">
            
              <MDBCol md="3">
                <img src="images/portfolio.jpg" style={{width:"200px", height:"200px"}} className="rounded float-left" alt="myimage" />
                
              </MDBCol>
              <MDBCol md="8">
                <p>I live in downtown LA.<br/>
                  Full stack web developer.<br/> 
                  I have excellent interpersonal and communication abilities.<br/> 
                  Enjoys being working as a team and succeeds in high pressure and challeng working environment.<br/>
                  I am a hardworking and honest .<br/> I am a good timekeeper and always willing to learn new skills.<br/> 
                  I am friendly, helpful and polite, have a good sense of humor.<br/>  I am always up for new challenges. 
                </p>
              </MDBCol>
            </MDBRow>
            
          </div>
          
         );
    }
}
 
export default About;
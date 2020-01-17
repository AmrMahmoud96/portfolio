import React, { Component } from 'react';
import './Footer.css';
import Icon from './Icon'

import { Row, Col } from 'react-bootstrap';

export default class Footer extends Component {

  render() {
    const email= {
      icon:'images/Email.png',
      text: 'Email',
      url:'mailto:amrmahmoud.am@hotmail.com?subject=Your Portfolio'
    }
    const linkedin= {
      icon:'images/LinkedIn.png',
      text: 'LinkedIn',
      url:'https://www.linkedin.com/in/amr-mahmoud-to/'
    }
    const github= {
      icon:'images/Github.png',
      text: 'Github',
      url:'https://github.com/AmrMahmoud96'
    }
    const d ={
      width:'100px',
      height:'100px'
    }
    return (
      <div className="footer" >
          <hr className="section-break"/>
          <h1 className="footer-title">Thanks for coming!</h1>
          <h2 className="footer-subtitle">Be sure to stay connected or contact me below.</h2>
          <Row className="footer-icon-holder justify-content-md-center">
            <Col sm><Icon data = {email} dimensions={d}/></Col>
            <Col sm><Icon data = {github}  dimensions={d}/></Col>
            <Col sm><Icon data = {linkedin}  dimensions={d}/></Col>
          </Row>
      </div>
    );
  }
}

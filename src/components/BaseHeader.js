import React, { Component } from 'react';
import {Navbar,Nav}  from 'react-bootstrap';
import './BaseHeader.css';

import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

export default class BaseHeader extends Component {

    constructor() {
      super();
      this.state = {
        navExpanded: false
      }
    this.closeNav = this.closeNav.bind(this);
    this.setNavExpanded = this.setNavExpanded.bind(this);

    }

    /**
     * Add event listener
     */
    componentDidMount() {
      this.closeNav()
      window.addEventListener("resize", this.closeNav.bind(this));
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
      this.closeNav()
      window.addEventListener("resize", this.closeNav.bind(this));
    }

  setNavExpanded() {
    this.setState({ navExpanded: !this.state.navExpanded });
  }
  closeNav() {
    this.setState({ navExpanded: false });
  }

  render() {
    return (
      <div className="head " id="head">

      <Navbar variant ="dark" className="bw-color" fixed="top" expand="lg" onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded}>

      <ScrollLink
        to="base"
        spy={true}
        smooth={true}
        duration={500}
      >
      <Navbar.Brand onClick={this.closeNav} >Amr Mahmoud</Navbar.Brand>
      </ScrollLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav justify className="ml-auto" onClick={this.closeNav}>

          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
           <Nav.Item onClick={this.closeNav}><Nav.Link >Skills</Nav.Link></Nav.Item></ScrollLink>

           <ScrollLink
             to="experience"
             spy={true}
             smooth={true}
             duration={500}
           >
            <Nav.Item onClick={this.closeNav}><Nav.Link>Experience</Nav.Link></Nav.Item></ScrollLink>

             <ScrollLink
               to="projects"
               spy={true}
               smooth={true}
               duration={500}
             >
              <Nav.Item onClick={this.closeNav}><Nav.Link>Projects</Nav.Link></Nav.Item></ScrollLink>

               <ScrollLink
                 to="footer"
                 spy={true}
                 smooth={true}
                 duration={500}
               >
                <Nav.Item onClick={this.closeNav}><Nav.Link>Contact</Nav.Link></Nav.Item></ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

// <Navbar expand="lg">
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav fill className="justify-content-end">
//       <Nav.Link href="#link">Skills</Nav.Link>
//       <Nav.Link href="#link">Experience</Nav.Link>
//       <Nav.Link href="#link">Education</Nav.Link>
//       <Nav.Link href="#link">Projects</Nav.Link>
//       <Nav.Link href="#link">Awards</Nav.Link>
//       <Nav.Link href="#link">Contact</Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>

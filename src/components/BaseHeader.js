import React, { Component } from 'react';
import {Navbar,Nav}  from 'react-bootstrap';
import './BaseHeader.css';

import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

export default class BaseHeader extends Component {

    constructor() {
      super();
      this.state = {
        navExpanded: false,
        h:0
      }
        this.closeNav = this.closeNav.bind(this);
        this.setNavExpanded = this.setNavExpanded.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    /**
     * Add event listener
     */
    componentDidMount() {
      this.closeNav()

      const h = this.navElement.clientHeight;
      this.setState({ h });

      window.addEventListener("resize", this.closeNav.bind(this));
      document.addEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
      this.closeNav()
      window.removeEventListener("resize", this.closeNav.bind(this));
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
      this.wrapperRef = node;
    }
    handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.closeNav()
      }
    }

    setNavExpanded() {
      this.setState({ navExpanded: !this.state.navExpanded });
    }
    closeNav() {

      this.setState({ navExpanded: false });

    }

  render() {
    return (
      <div className="head " ref={this.setWrapperRef} id="head">

      <Navbar width={this.props.width} variant ="dark" className="bw-color" fixed="top" expand="lg" onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded}
        ref={ (navElement) => { this.navElement = navElement } } >

      <ScrollLink
        to="base"
        spy={true}
        smooth={true}
        duration={500}
offset={-this.state.h}
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
offset={-this.state.h}
          >
           <Nav.Item onClick={this.closeNav}><Nav.Link >Skills</Nav.Link></Nav.Item></ScrollLink>

           <ScrollLink
             to="experience"
             spy={true}
             smooth={true}
             duration={500}
offset={-this.state.h}
           >
            <Nav.Item onClick={this.closeNav}><Nav.Link>Experience</Nav.Link></Nav.Item></ScrollLink>

             <ScrollLink
               to="projects"
               spy={true}
               smooth={true}
               duration={500}
offset={-this.state.h}
             >
              <Nav.Item onClick={this.closeNav}><Nav.Link>Projects</Nav.Link></Nav.Item></ScrollLink>

               <ScrollLink
                 to="footer-div"
                 spy={true}
                 smooth={'easeInOutQuad'}
                 duration={500}
offset={-this.state.h}
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

import React, { Component } from 'react';
import './Projects.css';
import ProjectContent from './ProjectContent'

let projects = require('../resources/projects.json')
var filteredAll=true

export default class Projects extends Component {
  constructor(props){
    super(props);
    projects=projects.sort(this.compare)
    this.state = {
      windowWidth:window.innerWidth
    }
  }

 updateDimensions() {
   let w = window.innerWidth
   this.setState({windowWidth:w})

 }

 /**
  * Add event listener
  */
 componentDidMount() {
   this.updateDimensions();
   window.addEventListener("resize", this.updateDimensions.bind(this));
 }

 /**
  * Remove event listener
  */
 componentWillUnmount() {
   window.removeEventListener("resize", this.updateDimensions.bind(this));
 }
  compare(a, b) {
    if (a.date < b.date ) return 1;
    if (b.date  < a.date ) return -1;
    return 0;
  }
  render() {
    filteredAll=true
    const d={
      width:'200px',
      height:'200px'
    }
    const proj = projects.map((p, index) => {
      var notFiltered = this.props.checkFilter(p.tags)
      if (notFiltered){
        filteredAll=false
      }
      return notFiltered? <ProjectContent key={index}  data={p} dimensions={d}/>: null
    });

    return (
      <div className="project-section">
      <h1 className="proj-section-title" style={{backgroundColor:'black'}}></h1>
          <h2 className="project-intro">Click on a project image to view the full gallery.</h2>

        {filteredAll? <h1  style={{padding:'50px',backgroundColor:'grey',textAlign:'center',color:'white'}}>No content available for the filters selected.</h1>:proj}
      </div>
    );
  }
}

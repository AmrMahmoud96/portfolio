import React, { Component } from 'react';
import './Experience.css';
import ProjectContent from './ProjectContent'

let projects = require('../resources/projects.json')
var filteredAll=true

export default class Projects extends Component {
  constructor(props){
    super(props);
    projects=projects.sort(this.compare)

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
      <div className="project">
      <h1 className="section-title" style={{backgroundColor:'black'}}>Projects</h1>
        {filteredAll? <h1  style={{padding:'50px',backgroundColor:'grey',textAlign:'center',color:'white'}}>No content available for the filters selected.</h1>:proj}
      </div>
    );
  }
}

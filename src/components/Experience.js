import React, { Component } from 'react';
import './Experience.css';
import ExpContent from './ExpContent'
import Particles from "./Particles";
import NoContent from "./NoContent"

let experiences = require('../resources/experience.json')
var filteredAll=true

export default class Experience extends Component {
  constructor(props){
    super(props);
    experiences=experiences.sort(this.compare)
    this.child = React.createRef();
    this.resize = this.resize.bind(this);
  }
  resize(){
    this.child.current.updateDimensions();
  };
  componentDidUpdate(){
    this.resize()
  }
  compare(a, b) {
    if (a.startDate < b.startDate ) return 1;
    if (b.startDate  < a.startDate ) return -1;
    return 0;
  }
  render() {
    filteredAll=true
    const d={
      width:'200px',
      height:'200px'
    }
    const exp = experiences.map((exp, index) => {
      var notFiltered = this.props.checkFilter(exp.tags)
      if (notFiltered){
        filteredAll=false
      }
      return notFiltered? <ExpContent key={index}  resize={this.resize}data={exp} dimensions={d}/>: null
    });
    return (
      <div className="experience" ref="experience">

      <div id ="snow" className="canv-background">

        <Particles stars={false} ref={this.child} hide={filteredAll} resize={this.props.resize}/>

      </div>
      <h1 className="exp-section-title" style={{backgroundColor:'black'}}>Experience</h1>
        {filteredAll? <NoContent/>:exp}

        <div className="project-transition">
        <img src='images/trees.png' onLoad={this.resize}/>
        </div>
        <div id="projects" className="exp-end">

        <h1 >Projects</h1>
        </div>
      </div>
    );
  }
}

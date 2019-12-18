import React, { Component } from 'react';
import './Skills.css';
import Icon from './SkillsIcon'

const skills = require('../resources/skills.json')

export default class Skills extends Component {

  constructor(props) {
   super(props);
   this.state = {isToggleOn: true,selected:"none"};
// this.props.onClick = this.props.onClick.bind(this)
   // This binding is necessary to make `this` work in the callback
   // this.filterContent = this.filterContent.bind(this);
 }

//  filterContent(e,name,callback) {
// // window.filter(name);
//
//    this.setState(state => ({
//      isToggleOn: !state.isToggleOn,
//      selected:name
//    }));
//    callback()
//    e.preventDefault()
//  }

  render() {

    const d={
      width:'100px',
      height:'100px'
    }
    const icons = skills.map((skill, index) => {
      return <Icon key={index} onClick={this.props.filterAction} data={skill} dimensions={d}/>
    });

    return (
      <div className="skills">
        <h1 className="section-title" style={{backgroundColor:'black'}}>Skills</h1>
        <h2 className="skills-intro">Select any combination of skills to filter the contents of the page.</h2>
        <div className="skills-container">{icons}</div>

      </div>
    );
  }
}

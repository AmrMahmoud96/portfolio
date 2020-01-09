import React, { Component } from 'react';
import './Skills.css';
import Icon from './SkillsIcon'
import TagIcon from './TagIcon'
import {Button}  from 'react-bootstrap';

const skills = require('../resources/skills.json')

export default class Skills extends Component {

  constructor(props) {
   super(props);
   this.state = {isToggleOn: true,selected:"none"};
// this.props.onClick = this.props.onClick.bind(this)
   // This binding is necessary to make `this` work in the callback
   // this.filterContent = this.filterContent.bind(this);
   this.matchSkill=this.matchSkill.bind(this);

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
    matchSkill(s){
      var choices = skills.filter(function(skill){
        return skill.text == s;
      })
      if (choices.length == 1){return choices[0].icon}
      else{return null}
    }
  render() {

    const d={
      width:'100px',
      height:'100px'
    }
    const icons = skills.map((skill, index) => {
      return <Icon key={index} selected={(this.props.filter.includes(skill.text) && this.props.filtering)} onClick={this.props.filterAction} data={skill} dimensions={d}/>
    });
    const tags = this.props.filter.map((skill, index) => {
      return <TagIcon key={index} title={skill} filtericon={true} onClick={this.props.filterAction} image={this.matchSkill(skill)}/>
    });
    return (
      <div className="skills">
        <h1 className="section-title" style={{backgroundColor:'black'}}>Skills</h1>
        <h2 className="skills-intro">Select any combination of skills to filter the contents of the page.</h2>
        <div className="skills-container">{icons}</div>
        {this.props.filtering &&
          <div className="full-filter-container">
            <h4>Currently displaying content for the following:</h4>
            <div className="centerflex">
            <div className="filter-container">
              {tags}
            </div>
            </div>
            <Button className="clear-button"onClick={this.props.clearAll}  variant="primary" size='lg'>Clear</Button>
          </div>
        }



      </div>
    );
  }
}

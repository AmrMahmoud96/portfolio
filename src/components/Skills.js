import React, { Component } from 'react';
import './Skills.css';
import Icon from './SkillsIcon'
import TagIcon from './TagIcon'
import {Button}  from 'react-bootstrap';
import FilterModal from './FilterModal'

const skills = require('../resources/skills.json')

export default class Skills extends Component {

  constructor(props) {
   super(props);
   this.state = {isToggleOn: true,selected:"none",showModal:false};

   this.matchSkill=this.matchSkill.bind(this);
   this.handleOpenModal = this.handleOpenModal.bind(this);
   this.handleCloseModal = this.handleCloseModal.bind(this);

   }
   handleOpenModal () {
   this.lockBodyScrolling()
   this.setState({ showModal: true });
   }

   handleCloseModal () {
   this.restoreBodyScrolling()
   this.setState({ showModal: false });
   }

   lockBodyScrolling() {
   // Get scroll position to be able to restore it in onCloseModal
   this.bodyScrollPos = document.body.scrollTop
     || document.documentElement.scrollTop || 0;
   this.appWrapper.style.position = 'fixed';
   this.appWrapper.style.top = `-${this.bodyScrollPos}px`;
   }
   restoreBodyScrolling() {
   this.appWrapper.style.removeProperty('position');
   this.appWrapper.style.removeProperty('top');
   document.documentElement.scrollTop = document.body.scrollTop = this.bodyScrollPos;
   }
   componentDidMount() {
   this.appWrapper = document.getElementById('root');
   }
    matchSkill(s){
      var choices = skills.filter(function(skill){
        return skill.text == s;
      })
      if (choices.length == 1){return choices[0].icon}
      else{return null}
    }
  render() {
    if(this.state.showModal && !this.props.filtering){
      this.handleCloseModal()
    }
    const d={
      width:'100px',
      height:'100px'
    }
    const icons = skills.map((skill, index) => {
      return <Icon key={index} tag={false}  selected={(this.props.filter.includes(skill.text) && this.props.filtering)} onClick={this.props.filterAction} data={skill} dimensions={d}/>
    });
    const tags = this.props.filter.map((skill, index) => {
      return <Icon key={index} selected={false} tag={true} onClick={this.props.filterAction} data={{text:skill,icon:this.matchSkill(skill)}} dimensions={{width:'70px',height:'70px'}}/>
      // <div><TagIcon key={index} title={skill} filtericon={true} onClick={this.props.filterAction} image={this.matchSkill(skill)}/><span>{skill}</span></div>


    });
    return (
      <div className="skills">

      <svg id="clouds" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M-5 100 Q 0 20 5 100 Z
         M0 100 Q 5 0 10 100
         M5 100 Q 10 30 15 100
         M10 100 Q 15 10 20 100
         M15 100 Q 20 30 25 100
         M20 100 Q 25 -10 30 100
         M25 100 Q 30 10 35 100
         M30 100 Q 35 30 40 100
         M35 100 Q 40 10 45 100
         M40 100 Q 45 50 50 100
         M45 100 Q 50 20 55 100
         M50 100 Q 55 40 60 100
         M55 100 Q 60 60 65 100
         M60 100 Q 65 50 70 100
         M65 100 Q 70 20 75 100
         M70 100 Q 75 45 80 100
         M75 100 Q 80 30 85 100
         M80 100 Q 85 20 90 100
         M85 100 Q 90 50 95 100
         M90 100 Q 95 25 100 100
         M95 100 Q 100 15 105 100 Z"></path></svg>
         <div className="skill-background">
        <h1 id="skills" className="skill-section-title" style={{backgroundColor:'black'}}>Skills</h1>
        <h2 className="skills-intro">Select any combination of skills to filter the contents of the page.</h2>
        <div className="skills-container">{icons}</div>

        <div className={this.props.filtering? "filter-shortcut":"unseen"} onClick={this.handleOpenModal} >
          <img src="images/filter.png"/>
        </div>
        <FilterModal tags={tags} filtering={this.props.filtering} clearAll={this.props.clearAll} show={this.state.showModal && this.props.filtering} close={this.handleCloseModal}/>
        </div>
        <svg id="clouds-flipped" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M-5 100 Q 0 20 5 100 Z
           M0 100 Q 5 0 10 100
           M5 100 Q 10 30 15 100
           M10 100 Q 15 10 20 100
           M15 100 Q 20 30 25 100
           M20 100 Q 25 -10 30 100
           M25 100 Q 30 10 35 100
           M30 100 Q 35 30 40 100
           M35 100 Q 40 10 45 100
           M40 100 Q 45 50 50 100
           M45 100 Q 50 20 55 100
           M50 100 Q 55 40 60 100
           M55 100 Q 60 60 65 100
           M60 100 Q 65 50 70 100
           M65 100 Q 70 20 75 100
           M70 100 Q 75 45 80 100
           M75 100 Q 80 30 85 100
           M80 100 Q 85 20 90 100
           M85 100 Q 90 50 95 100
           M90 100 Q 95 25 100 100
           M95 100 Q 100 15 105 100 Z"></path></svg>

      </div>
    );
  }
}

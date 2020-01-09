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

        <div className={this.props.filtering? "filter-shortcut":"unseen"} onClick={this.handleOpenModal} >
          <img src="images/filter.png"/>
        </div>
        <FilterModal tags={tags} filtering={this.props.filtering} clearAll={this.props.clearAll} show={this.state.showModal && this.props.filtering} close={this.handleCloseModal}/>




      </div>
    );
  }
}

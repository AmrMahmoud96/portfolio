import React, { Component } from 'react';
import './SkillsIcon.css';

export default class SkillsIcon extends Component {
  constructor(props){

     super(props);
  }
  render() {
    return (
      <div title="Select a skill to filter the page content!" className={this.props.selected ? "selected-filters skills-icon": "skills-icon"}  onClick={this.props.onClick ? (e)=>this.props.onClick(e,this.props.data.text,this.switchSelected):null}>
      <div >
      <img alt="Failed to Load" className='skills-icon-img' width= {this.props.dimensions.width} height= {this.props.dimensions.height} src ={this.props.data.icon}/>
      <span className= 'skills-icon-text'>{this.props.data.text}</span>
      </div>
      </div>
    );
  }
}

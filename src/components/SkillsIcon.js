import React, { Component } from 'react';
import './SkillsIcon.css';

export default class SkillsIcon extends Component {
  constructor(props){
     super(props);
  }

  render() {
    return (
      <div title={this.props.tag? this.props.data.text:"Select a skill to filter the page content!"}  className={this.props.selected ? "selected-filters skills-icon": "skills-icon"}  onClick={this.props.onClick ? (e)=>this.props.onClick(e,this.props.data.text):null}>
      <div >
      <img alt="Failed to Load" className={this.props.tag? 'filter-icon-img':'skills-icon-img'} width= {this.props.dimensions.width} height= 'auto' src ={this.props.data.icon}/>
      <span className= {this.props.tag? 'filter-icon-text':'skills-icon-text'}>{this.props.data.text}</span>
      </div>
      </div>
    );
  }

}

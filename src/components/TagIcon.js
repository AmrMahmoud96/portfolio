import React, { Component } from 'react';
import './TagIcon.css';

export default class TagIcon extends Component {
  render() {
    return (
      <div className="tag-container" >
      <div  title={this.props.title}  className={this.props.filtericon? "tag-icon filter-icon":"tag-icon"} onClick={this.props.onClick ? (e)=>this.props.onClick(e,this.props.title):null}>
          <span className='helper'></span>
          <img className="tag-img" src = {this.props.image}/>
      </div>
      </div>
    );
  }
}

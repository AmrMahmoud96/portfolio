import React, { Component } from 'react';
import './Icon.css';

export default class Icon extends Component {

  render() {
    return (
      <div className="icon" >
      <a href={this.props.data.url} target={this.props.data.text=="Email"? null:"_blank"}>
      <div >
      <img alt="Failed to Load"   className='icon-img' width= {this.props.dimensions.width} height= {this.props.dimensions.height} src ={this.props.data.icon}/>
      <span className= 'icon-text'>{this.props.data.text}</span>
      </div>
      </a>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './ProjectContent.css';

export default class ProjectContent extends Component {
  constructor(props) {
    super(props);
    var s = props.data.date.split("-")
    var d1 = new Date(s[0], s[1] - 1, s[2])

    this.state = {
      start:d1.toLocaleString('default', { month: 'short' }),
      year:s[0]
    }

  }
  render() {
    return (
      <div className="project-content">
        <div className="project-company-info">
          <img  alt="Failed to Load" className='project-img' width= {this.props.dimensions.width} height= {this.props.dimensions.height} src ={this.props.data.image}/>

        </div>
        <span>{this.props.data.title}</span>
        <p>{this.state.start+' '+this.state.year}</p>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}

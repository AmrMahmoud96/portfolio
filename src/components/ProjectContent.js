import React, { Component } from 'react';
import './ProjectContent.css';
import ProjectModal from './ProjectModal'


export default class ProjectContent extends Component {
  constructor(props) {
    super(props);
    var s = props.data.date.split("-")
    var d1 = new Date(s[0], s[1] - 1, s[2])

    this.state = {
      start:d1.toLocaleString('default', { month: 'short' }),
      year:s[0],
      showModal: false
    }


    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="project-content">
      <button onClick={this.handleOpenModal}>test</button>
      <ProjectModal height="200px" data = {this.props.data} show={this.state.showModal} close={this.handleCloseModal}/>
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

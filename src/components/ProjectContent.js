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


  // <button onClick={this.handleOpenModal}>test</button>
  render() {
    return (
      <div className="project-content">
      <ProjectModal height="200px" data = {this.props.data} show={this.state.showModal} close={this.handleCloseModal}/>
        <div className="project-company-info">
          <img  alt="Failed to Load" onClick={this.handleOpenModal} className='project-img' width= {this.props.dimensions.width} height= {this.props.dimensions.height} src ={this.props.data.mainImage}/>

        </div>
        <span>{this.props.data.title}</span>
        <p>{this.state.start+' '+this.state.year}</p>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}

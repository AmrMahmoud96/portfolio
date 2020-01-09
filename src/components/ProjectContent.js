import React, { Component } from 'react';
import './ProjectContent.css';
import ProjectModal from './ProjectModal'
import TagIcon from './TagIcon'

const skills = require('../resources/skills.json')

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
    this.matchSkill=this.matchSkill.bind(this);

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

  // <button onClick={this.handleOpenModal}>test</button>
  render() {
    const tags = this.props.data.tags.map((skill, index) => {
        return <TagIcon key={index} title={skill} filtericon={false}  image={this.matchSkill(skill)}/>
      });
    return (
      <div className="project-content">
      <div className='project-content-container'>
      <ProjectModal height="200px" date={this.state.start+' '+this.state.year} data = {this.props.data} show={this.state.showModal} close={this.handleCloseModal}/>
        <div className="project-company-info">
          <img  alt="Failed to Load" onClick={this.handleOpenModal} className='project-img' width= {this.props.dimensions.width} height= {this.props.dimensions.height} src ={this.props.data.mainImage}/>
          <span>{this.props.data.title}</span>
          <p>{this.state.start+' '+this.state.year}</p>
        </div>
        {this.props.data.tags.length> 0 &&
          <div className="project-tags">
          <p className="project-tag-caption">Made with:</p>{tags}</div>
        }

        <p>{this.props.data.description}</p>
      </div>
      </div>
    );
  }
}

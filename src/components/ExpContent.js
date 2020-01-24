import React, { Component } from 'react';
import './ExpContent.css';

export default class ExpContent extends Component {
  constructor(props) {
    super(props);

    var d2 = new Date()
    var s = props.data.endDate.split("-")
    var e = props.data.endDate
    if ( props.data.endDate != "Present"){
      d2 = new Date(s[0], s[1] - 1, s[2])
      e = d2.toLocaleString('default', { month: 'short',year:'numeric'})
    }
    s = props.data.startDate.split("-")
    var d1 = new Date(s[0], s[1] - 1, s[2])

    var m = (d2.getFullYear() - d1.getFullYear() )* 12
    m+= d2.getMonth()-d1.getMonth()
    m = d2.getDay()<d1.getDay()? m-1: m

    this.state = {
      dateTime: m,
      start:d1.toLocaleString('default', { month: 'short',year:'numeric' }),
      end:e,
      windowWidth:window.innerWidth
    }
  }

  updateDimensions() {
   let w = window.innerWidth
   this.setState({windowWidth:w})
   this.props.resize()
  }

  /**
  * Add event listener
  */
  componentDidMount() {
   this.updateDimensions();
   window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
  * Remove event listener
  */
  componentWillUnmount() {
   window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    let splitText = this.props.data.description.split('\n').map((item, i) => {
      return <li key={i} className="exp-list-item">{item}</li>;
    });
    return (
      <div>
      {this.state.windowWidth<760 &&
<div className="experience-content">
        <div  className="experience-content-container" >
        <div className="experience-company-info">
          <img  alt="Failed to Load" className='experience-img' width= {this.props.dimensions.width} height='auto' src ={this.props.data.image}/>
          <span>{this.props.data.position}</span>
          <span>{this.state.start} - {this.state.end} ({this.state.dateTime} months)</span>
          <span>{this.props.data.company}</span>
          <span>{this.props.data.location}</span>
        </div>
        <div className="experience-description">
        <ul>
        {splitText}
        </ul>
        </div>
        </div>
              </div>
      }
      {this.state.windowWidth>=760  &&
        <div className="experience-content">
        <div className="experience-company-info">
          <img  alt="Failed to Load" className='experience-img' width= {this.props.dimensions.width} height='auto' src ={this.props.data.image}/>
          <span>{this.props.data.position}</span>
          <span>{this.state.start} - {this.state.end} ({this.state.dateTime} months)</span>
          <span>{this.props.data.company}</span>
          <span>{this.props.data.location}</span>
        </div>
        <div  className="experience-content-container" >

        <div className="experience-description">
        <ul>
        {splitText}
        </ul>
        </div>
        </div>
        </div>
      }

      </div>
    );
  }
}

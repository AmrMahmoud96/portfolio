import React, { Component } from 'react';
import './Base.css';
import headshot from '../resources/Headshot2.jpg';
import BaseHeader from './BaseHeader';
import Particles from "./Particles";


export default class Base extends Component {

  constructor() {
    super();
    this.state = {
      width:  800,
      height: 182
    }
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    // if(window.innerWidth < 500) {
    //   this.setState({ width: window.innerWidth, height: 2500 });
    // } else {
    //   let update_width  = window.innerWidth;
    //   let update_height = Math.round(update_width/4.4);
    //   this.setState({ width: update_width, height: update_height });
    // }
    let w = window.innerWidth-20
    let h = window.innerHeight+1
    let pw = w>500 ? 320:220;
    let ph = h>600 ? 400:300;
    this.setState({width:w,height:h,picwidth:pw,picheight:ph})
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
    return(
      <div id="base">
      <div className="canv-background">
        <Particles stars={true} resize={()=>{return null}}/>
      </div>
      <div  className="base" style={{height:this.state.height+'px'}}>
      <BaseHeader width = {this.state.width+'px'}/>

        <div className="intro-container" style={{height:(this.state.height)+'px'}}>
          <div className="profile-pic-container">
            <div className="profile-pic-div" >
            <img src={headshot} alt="profile-pic" className="profile-pic-img" style={{width: this.state.picwidth+'px'}}/>
            </div>
            <span style={{'fontSize':'31px'}}>Amr Mahmoud</span>
            <span>Bachelor of Applied Science in Engineering Science </span>
            <span>Specialization in Math, Stats and Finance</span>
            <span>Graduated May 2019</span>
          </div>
        </div>
      </div>

      </div>
    );
  }
}
// <LineChart width={this.state.width} height={this.state.height} />
//
// <div className="intro">
//   <h2 className="title">Hi! I'm Amr Mahmoud.</h2>
//   <h3 className="subtitle">A programmer, entrepreneur, and everything inbetween.</h3>
//   <h4 className="summary">I'm passionate about adding value to companies by solving real world problems.</h4>
// </div>

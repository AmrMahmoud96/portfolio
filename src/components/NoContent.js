import React, { Component } from 'react';
import './NoContent.css';

export default class NoContent extends Component {
  render() {
    return (
      <div className="no-content" height="500px">
      <div style={{width:"90%", margin:'0 auto'}} className="no-content-container no-content-text"><span>No content available for the filters selected.</span></div>
      </div>
    );
  }
}
//

  // <div style={{width:"25%"}}  className="no-content-container"><img className="astro" src="images/astrosit.svg"/></div>
  // <div style={{width:"50%"}} className="no-content-container no-content-text"><span>No content available for the filters selected.</span></div>
  // <div style={{width:"25%"}} className="no-content-container" ><img  className="moon" src="images/moon.svg"/></div>

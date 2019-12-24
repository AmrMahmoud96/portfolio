import React, { Component } from 'react';
import './ProjectModal.css';
import Modal from 'react-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class ProjectModal extends Component {
  constructor(props){
    super(props)
    Modal.defaultStyles.overlay.backgroundColor = 'grey';
  }

  render() {
    const style={
      content:{
        height:'50%',
        // left: '2  0%',
        padding: '2rem',
        // position: 'fixed',
        // right: 'auto',
        // top: '20%', // start from center
        // right:'20%',
        // transform: 'translate(-50%,-' + offsetPx + ')', // adjust top "up" based on height
        width: '80%'
      }
    }
    return (

      <div>
      <Modal
      style={style}
          isOpen={this.props.show}
          onRequestClose={this.props.close}
        >
        <h1>{this.props.data.title}</h1>
        <p>this is some test</p>
        <Carousel useKeyboardArrows>
                <div>
                    <img src="/images/stgeorgecampus2.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/images/stgeorgecampus2.png" />
                    <p className="legend">Legend 2</p>
                </div>
        </Carousel>
        </Modal>
      </div>
    );
  }
}

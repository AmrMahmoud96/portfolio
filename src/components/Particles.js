import React, { Component } from "react";
import Particles from "react-particles-js";
import './Particles.css'

class Canvas extends Component {
  // state = { width: "0px", height: "0px" };
  // componentDidMount() {
  //   this.updateWindowDimensions();
  //   window.addEventListener("resize", this.updateWindowDimensions);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateWindowDimensions);
  // }
  // updateWindowDimensions = () => {
  //   this.setState({
  //     width: `${window.innerWidth}px`,
  //     height: `${window.innerHeight}px`
  //   });
  // };


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
      this.setState({width:w,height:h})
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
    const { width, height } = this.state;
    return (

<Particles
        {...this.state}
        className="static-back" params={{
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 50,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 561.194221302933,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
}}/>
    );
  }
}

export default Canvas;

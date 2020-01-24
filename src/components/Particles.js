import React, { Component } from "react";
import {Particles} from "react-particles-js";
import './Particles.css'
import ReactDOM from 'react-dom';

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


    constructor(props) {
      super(props);
      this.state = {
        width:  800,
        height: 182
      }
      this.updateDimensions=this.updateDimensions.bind(this)
    }
    /**
     * Calculate & Update state of new dimensions
     */
    updateDimensions() {
      let w = window.innerWidth-20
      let h = window.innerHeight+1

      if(!this.props.stars){
        h= window.resizeCanv();
      }
      // console.log(w,h)
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
    const snow={
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
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
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3.945738208161363,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
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
}

const stars ={
"particles": {
"number": {
"value": 160,
"density": {
"enable": true,
"value_area": 800
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
"value": 1,
"random": true,
"anim": {
"enable": true,
"speed": 1,
"opacity_min": 0,
"sync": false
}
},
"size": {
"value": 3,
"random": true,
"anim": {
"enable": false,
"speed": 4,
"size_min": 0.6,
"sync": false
}
},
"line_linked": {
"enable": true,
"distance": 78.91476416322726,
"color": "#ffffff",
"opacity": 0.4083101981549727,
"width": 0.4734885849793636
},
"move": {
"enable": true,
"speed": 2,
"direction": "none",
"random": true,
"straight": false,
"out_mode": "out",
"bounce": false,
"attract": {
"enable": false,
"rotateX": 600,
"rotateY": 600
}
}
},
"interactivity": {
"detect_on": "canvas",
"events": {
"onhover": {
"enable": false,
"mode": "bubble"
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
"distance": 250,
"size": 0,
"duration": 2,
"opacity": 0,
"speed": 3
},
"repulse": {
"distance": 400,
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
}
    return (

<Particles
        {...this.state}
        className="static-back" style={{display: this.props.hide ? 'none' : 'block'}} onLoad={this.props.resize} params = {this.props.stars? stars:snow}/>
    );
  }
}

export default Canvas;

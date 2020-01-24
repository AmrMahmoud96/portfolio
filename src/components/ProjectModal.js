import React, { Component } from 'react';
import Modal from 'react-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Button}  from 'react-bootstrap';
import './ProjectModal.css';

// function importAll(r) {
//   return r.keys().map(r);
// }
export default class ProjectModal extends Component {
  constructor(props){
    super(props)
    Modal.defaultStyles.overlay.backgroundColor = '#232121';
    // this.importAll= this.importAll.bind(this)
  }

  // importAll(r) {
  //   let images=[];
  //    r.keys().map((item,index)=>{ images.push(item.replace('./', '')) });
  //   return images;
  // }
  //  importAll(r) {
  //   let images = {};
  //   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  //   return images;
  // }




  // <img src={images['doggy.png']} />
  render() {


    const style={
      content:{
        display:'flex',
        flexFlow:'column',
        // height:'50%',
        // left: '2  0%',
        // position:'fixed',
        // top: '80px',
        padding: '2rem'
        // position: 'fixed',
        // right: 'auto',
        // top: '20%', // start from center
        // right:'20%',
        // transform: 'translate(-50%,-' + offsetPx + ')', // adjust top "up" based on height
        // width: '80%'
      }
    }
    // let images =  [this.props.data.mainImage]
    //
    // if (this.props.data.images){
    //  images =  images.concat(this.props.data.images)
    // }
    let images = this.props.data.images
    let videos = this.props.data.videos
    // images.unshift(this.props.data.mainImage)

    return(
      <div>
      <Modal
      ariaHideApp={false}
      style={style}
          isOpen={this.props.show}
          onRequestClose={this.props.close}
        >
        <div className="modal-header">
        <button type="button" class="close" onClick={this.props.close} aria-label="Close">
          <span aria-hidden="true">X</span>
        </button>
        <h1 class="modal-title">{this.props.data.title}</h1>
        <h4 class="modal-title">{this.props.date}</h4>

        </div>

        <Carousel swipeable useKeyboardArrows infiniteLoop dynamicHeight  showThumbs={window.innerWidth <= 760? false:true} showIndicators={window.innerWidth <= 760? false:true} >
        {images &&
          images.map((i,index)=>
          <div key={index} className="carousel-img-div" >
               <img  src = {i.path} />
               <p className='legend' style={{'background':'#000000b5'}}>{i.caption}</p>
            </div>


        )}
        {videos &&
          videos.map((v,index)=>
          <div key={index} className="custom-iframe-div">
            <img src = "images/play.png" className="video-play-btn"style={{'opacity':'0'}}/>
            <iframe src={v} frameborder="0" height="315" width="560" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>
        )}


        </Carousel>

        {this.props.data.repolink &&
          <div style={{'marginTop':'20px'}}>
          <a href={this.props.data.repolink} target="_blank">Check out the repo here</a>
          </div>
        }
        {this.props.data.url &&
          <div style={{'marginTop':'10px'}}>
          <a href={this.props.data.url}  target="_blank">See more</a>
          </div>
        }
        <div style={{'textAlign':'center','marginTop':'20px'}}>
        <Button onClick={this.props.close}  variant="primary" size='lg'>Done</Button>
        </div>

        </Modal>
      </div>
    );

    // let carouselItems=<div><img src="images/UofTHacks/interac.jpeg"/></div>

    // if(this.props.data.images){
    //   // const images = this.importAll(require.context('../../public/images/UofTHacks', false, /\.(png|jpe?g|svg)$/));
    //   // console.log(images)
    //   // if (images){
    //
    //    const carouselItems = this.props.data.images.forEach((i, index) => {
    //      console.log(i)
    //      // console.log('images/'+this.props.data.images+'/'+i)
    //       return (
    //             <div key={index}>
    //                 <img src = {i}/>
    //                 <p>{i}</p>
    //              </div>
    //            )
    //       // return <Icon key={index} onClick={this.props.filterAction} data={skill} dimensions={d}/>
    //     });
    //     return (
    //
    //       <div>
    //       <Modal
    //       style={style}
    //           isOpen={this.props.show}
    //           onRequestClose={this.props.close}
    //         >
    //         <h1>{this.props.data.title}</h1>
    //         <p>this is some test2</p>
    //         <Carousel useKeyboardArrows>
    //                 {carouselItems}
    //
    //         </Carousel>
    //         </Modal>
    //       </div>
    //     );
    //   //}
    // }
    //
    // else{
    //   return (
    //
    //     <div>
    //     <Modal
    //     style={style}
    //         isOpen={this.props.show}
    //         onRequestClose={this.props.close}
    //       >
    //       <h1>{this.props.data.title}</h1>
    //       <p>this is some test</p>
    //       </Modal>
    //     </div>
    //   );
    // }
  }
}

//<div>
//     <img src="/images/stgeorgecampus2.jpeg" />
//     <p className="legend">Legend 1</p>
// </div>
// <div>
//     <img src="/images/stgeorgecampus2.png" />
//     <p className="legend">Legend 2</p>
// </div>

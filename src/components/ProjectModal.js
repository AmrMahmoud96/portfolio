import React, { Component } from 'react';
import './ProjectModal.css';
import Modal from 'react-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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

    return(
      <div>
      <Modal
      ariaHideApp={false}
      style={style}
          isOpen={this.props.show}
          onRequestClose={this.props.close}
        >
        <h1>{this.props.data.title}</h1>
        <p>this is some test</p>
        <Carousel useKeyboardArrows infiniteLoop dynamicHeight>

        {this.props.data.images &&
          this.props.data.images.map((i,index)=>
          <div key={index}>
               <img src = {i}/>
               <p style={{'position':'absolute','bottom':'5%'}}>{i}</p>
            </div>


        )}


        </Carousel>
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

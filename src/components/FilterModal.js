import React, { Component } from 'react';
import './FilterModal.css';
import Modal from 'react-modal';

import {Button}  from 'react-bootstrap';

export default class FilterModal extends Component {
  constructor(props){
    super(props)
    Modal.defaultStyles.overlay.backgroundColor = '#232121';
  }

  render() {

    const style={
      content:{
        display:'flex',
        flexFlow:'column',
        padding: '2rem'
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
        <div className="modal-header">
        <button type="button" class="close" onClick={this.props.close} aria-label="Close">
          <span aria-hidden="true">X</span>
        </button>
        <h3 class="modal-title">Filter Menu</h3>
        </div>

          <div className="full-filter-container">
            <h4 className="filter-title">Currently displaying content for the following:</h4>
            <div className="centerflex">
            <div className="filter-container">
              {this.props.tags}
            </div>
            </div>
          </div>

        <div style={{'textAlign':'center','marginTop':'auto'}}>
        <h4  style={{'marginBottom':'5px'}}>Click icons to remove filters</h4>
        <p>or</p>
        <Button onClick={this.props.clearAll}  variant="danger" size='lg'>Clear All</Button>

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

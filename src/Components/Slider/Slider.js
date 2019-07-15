import React, {Component} from 'react';
import './Slider.scss';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      images: [
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg',
          '/img/5.jpg',
          '/img/6.jpg',
          '/img/7.jpg',
      ],
      currentImageIndex: 0,
      isCycleMode: false,
      canGoPrev: false,
      canGoNext: true
    };
    this.nextSlideHandler = this.nextSlideHandler.bind(this);
  }

  nextSlideHandler(e) {
    let newIndex = this.state.currentImageIndex;
    if (e.currentTarget.dataset.direction === 'next') {
      if (newIndex < this.state.images.length - 1) {
        newIndex = this.state.currentImageIndex + 1;
        this.state.canGoPrev = true;
      }
      // If end - disabled
      if(newIndex === this.state.images.length - 1) {
        this.state.canGoNext = false;
      }
    }
    else {
      if (newIndex > 0) {
        newIndex = this.state.currentImageIndex - 1;
        this.state.canGoNext = true;
      }
      if(newIndex === 0) {
        this.state.canGoPrev = false;
      }
    }
    this.setState({
      currentImageIndex: newIndex
    });
  }

  render() {
    return (
        <div className="react_slider">
          <div>
            <button disabled={!this.state.canGoPrev} onClick={this.nextSlideHandler} data-direction="prev">PREV</button>
          </div>
          <div>
            <img src={this.state.images[this.state.currentImageIndex]} alt=""/>
          </div>
          <div>
            <button disabled={!this.state.canGoNext} onClick={this.nextSlideHandler} data-direction="next">NEXT</button>
          </div>
        </div>
    );
  };
}

export default Slider;
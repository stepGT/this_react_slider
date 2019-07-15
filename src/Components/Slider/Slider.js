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
      disabledPrev: false,
      disabledNext: true
    };
    this.slideHandler = this.slideHandler.bind(this);
  }

  slideHandler(e) {
    let currentImageIndex = this.state.currentImageIndex;
    let newImageIndex = currentImageIndex;
    //
    if (e.currentTarget.dataset.direction === 'next') {
      newImageIndex = this._nextStep(currentImageIndex);
    }
    else {
      newImageIndex = this._prevStep(currentImageIndex);
    }
    this.setState({currentImageIndex: newImageIndex});
  }

  _prevStep(currentImageIndex) {
    let newIndex = currentImageIndex;
    if (currentImageIndex > 0) {
      newIndex = this.state.currentImageIndex - 1;
      this.setState({disabledNext: true});
    }
    // If first - disabled prev
    if (newIndex === 0) {
      this.setState({disabledPrev: false});
    }
    return newIndex;
  }

  _nextStep(currentImageIndex) {
    let newIndex = currentImageIndex;
    if (currentImageIndex < this.state.images.length - 1) {
      newIndex = this.state.currentImageIndex + 1;
      this.setState({disabledPrev: true});
    }
    // If end - disabled next
    if (newIndex === this.state.images.length - 1) {
      this.setState({disabledNext: false});
    }
    return newIndex;
  }

  render() {
    return (
        <div className="react_slider">
          <div>
            <button disabled={!this.state.disabledPrev} onClick={this.slideHandler} data-direction="prev">PREV</button>
          </div>
          <div>
            <img src={this.state.images[this.state.currentImageIndex]} alt=""/>
          </div>
          <div>
            <button disabled={!this.state.disabledNext} onClick={this.slideHandler} data-direction="next">NEXT</button>
          </div>
        </div>
    );
  };
}

export default Slider;
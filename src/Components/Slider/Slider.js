import React, {Component} from 'react';
import './Slider.scss';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      currentImageIndex: 0,
      isCycleMode: false
    };
    this.nextSlideHandler = this.nextSlideHandler.bind(this);
  }

  nextSlideHandler(e) {
    let newIndex = this.state.currentImageIndex;
    if (e.currentTarget.dataset.direction === 'next') {
      newIndex = this.state.currentImageIndex + 1;
    }
    else {
      newIndex = this.state.currentImageIndex - 1;
    }
    this.setState({
      currentTarget: newIndex
    });
  }

  render() {
    return (
        <div className="react_slider">
          <div>
            <button onClick={this.nextSlideHandler} data-direction="prev">PREV</button>
          </div>
          <div>
            <img src={this.state.currentImageIndex} alt=""/>
          </div>
          <div>
            <button onClick={this.nextSlideHandler} data-direction="next">NEXT</button>
          </div>
        </div>
    );
  };
}

export default Slider;
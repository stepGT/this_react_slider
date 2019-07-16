import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Slider from './Components/Slider/Slider';
import * as serviceWorker from './serviceWorker';

let images1 = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
let images2 = ['img/5.jpg', 'img/6.jpg', 'img/7.jpg'];

ReactDOM.render(
    <div>
      <Slider images={images1} index={0}/>
      <Slider images={images2} index={0}/>
    </div>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

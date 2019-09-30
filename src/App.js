import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
 
import './App.css';

const BIG_DAY = new Date('2020-02-22T13:00:00+08:00');

class App extends Component {

  state = {
    likeCoinButtonSrc: `https://button.like.co/in/embed/ngwingtat/button?referrer=${encodeURIComponent('https://ngwingt.at')}`
  }

  _renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return null;
    } else {
      // Render a countdown
      return (
        <div className="countdown-display">
          <div><span className="value">{days}</span><span className="unit">天</span></div>
          <div><span className="value">{hours}</span><span className="unit">小時</span></div>
          <div><span className="value">{minutes}</span><span className="unit">分鐘</span></div>
          <div><span className="value">{seconds}</span><span className="unit">秒</span></div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <Countdown
          date={BIG_DAY}
          renderer={this._renderCountdown}
        />
        <div className="likecoin-button-wrapper">
          <div className="likecoin-embed likecoin-like-button">
            <div>
              <iframe scrolling="no" frameborder="0" src={this.state.likeCoinButtonSrc} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

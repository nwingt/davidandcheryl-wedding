import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
 
import './App.css';

const BIG_DAY = new Date('2020-02-22T13:00:00+08:00');

class App extends Component {

  _renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return null;
    } else {
      // Render a countdown
      return (
        <div className="countdown-display">
          <span className="value">{days}</span><span className="unit">天</span><br/>
          <span className="value">{hours}</span><span className="unit">小時</span><br/>
          <span className="value">{minutes}</span><span className="unit">分鐘</span><br/>
          <span className="value">{seconds}</span><span className="unit">秒</span><br/>
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
      </div>
    );
  }
}

export default App;

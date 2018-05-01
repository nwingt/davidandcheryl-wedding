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
          <span>{days} 天</span>
          <span>{hours} 小時</span>
          <span>{minutes} 分鐘</span>
          <span>{seconds} 秒</span>
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

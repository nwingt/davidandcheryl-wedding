import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
 
import './App.css';

const BIG_DAY = new Date('2020-02-22T13:00:00+08:00');

class App extends Component {

  state = {
    likeCoinButtonSrc: `https://button.like.co/in/embed/ngwingtat/button?referrer=${encodeURIComponent('https://ngwingt.at')}`
  }

  _renderCountdown = ({ days, completed }) => {
    if (completed) {
      // Render a completed state
      return null;
    } else {
      // Render a countdown
      return (
        <div className="countdown-display">
          <span className="value">{days}</span> <span className="unit">days to go</span>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <div className="hero">
            <div class="spacer" />
            <Countdown
              date={BIG_DAY}
              renderer={this._renderCountdown}
            />
            <div className="event-details">
              <div className="event-details__date">2020.02.22</div>
              <div className="event-details__time">2:00PM</div>
            </div>
          </div>
        </div>

        <div className="event-details">
          <div className="event-details__venue">Methodist International Church</div>
          <div className="event-details__address">
            Sanctuary, 1-2/F,
            271 Queen's Road East,
            Wan Chai, Hong Kong
          </div>

          <div className="likecoin-button-wrapper">
            <div className="likecoin-embed likecoin-like-button">
              <div>
                <iframe scrolling="no" frameborder="0" src={this.state.likeCoinButtonSrc} />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

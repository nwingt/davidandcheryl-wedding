import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
 
import './App.css';

const BIG_DAY = new Date('2020-02-22T13:00:00+08:00');

class App extends Component {

  state = {
    likeCoinButtonSrc: `https://button.like.co/in/embed/ngwingtat/button?referrer=${encodeURIComponent('https://ngwingt.at')}`,
    heroHeight: `${window.innerHeight}px`,
  }

  _renderCountdown = ({ days, completed }) => {
    if (completed) {
      // Render a completed state
      return null;
    } else {
      // Render a countdown
      return (
        <div className="countdown-display">
          <span className="value">{days}</span><br/><span className="unit">days to launch</span>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <div className="hero" style={{ minHeight: this.state.heroHeight}}>
            <div className="spacer">
              <div className="event-title">
                <span>The Wedding of</span><br />
                David &amp; Cheryl
              </div>
            </div>
            <div>
              <div className="event-date">2020.02.22</div>
              <div className="event-time">2:00PM</div>
            </div>
            <Countdown
              date={BIG_DAY}
              renderer={this._renderCountdown}
            />
            <div className="scroll-indicator">🚀</div>
          </div>
        </div>

        <div className="event-details">
          <div className="event-details__venue">Methodist International Church</div>
          <div className="event-details__address">
            Sanctuary, 1-2/F,
            Wesleyan House,
            271 Queen's Road East,
            Wan Chai, Hong Kong
          </div>

          <div className="likecoin-button-wrapper">
            <div className="likecoin-embed likecoin-like-button">
              <div>
                <iframe
                  title="LikeCoin Button"
                  scrolling="no"
                  frameBorder="0"
                  src={this.state.likeCoinButtonSrc}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

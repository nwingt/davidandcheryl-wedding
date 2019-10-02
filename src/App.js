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
          <span className="value">{days}</span><br/><span className="unit">days to go</span>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <div className="hero">
            <div className="spacer">
              <div className="event-title">
                <span>The Wedding of</span><br />
                David &amp; Cheryl
              </div>
            </div>
            <Countdown
              date={BIG_DAY}
              renderer={this._renderCountdown}
            />
            <div>
              <div className="event-date">2020.02.22</div>
              <div className="event-time">2:00PM</div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-double-down"
                role="img"
                width="2vh"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                style={{ margin: '2vh' }}
              >
                <path
                  fill="currentColor"
                  d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"
                />
              </svg>
            </div>
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

import React from 'react';
import ReactDOM from 'react-dom';
import Billkin from '../image/Billkin.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward } from '@fortawesome/free-solid-svg-icons';

export function MusicPage() {
  return (
    <div>
      <div>
        <img src={Billkin} alt="Background" />
        <div className="triangle"></div>
        <div className="time-bar">
          <span className="time">00:00</span>
          <div className="controls">
            <button className="previous-button">
              <FontAwesomeIcon icon={faStepBackward} />
            </button>
            <button className="play-pause-button">
              <FontAwesomeIcon icon={faPlay} />
            </button>
            <button className="next-button">
              <FontAwesomeIcon icon={faPause} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<MusicPage />, document.getElementById('root'));

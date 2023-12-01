import React from 'react';
import { Link } from 'react-router-dom';

import './Save.scss';

function Save() {
  return (
    <div className="save-wrapper">
      <div className="save-container content">
        {/* SAVE LEFT */}
        <div className="save-left">
          <Link to="#!">
            <img src="../images/save-left.png" alt="" />
            <div className="save-text">
              <h4>
                Surface <br />
                Save Up To $569
              </h4>
              <span>Shop Surface</span>
            </div>
          </Link>
        </div>

        {/* SAVE MIDDLE */}
        <div className="save-middle">
          <Link to="#!">
            <img src="../images/save-middle.png" alt="" />
            <div className="save-text">
              <h4>
                Gamepad <br />
                Save Up To $69
              </h4>
              <span>Shop Deals</span>
            </div>
          </Link>
        </div>

        {/* SAVE RIGHT */}
        <div className="save-right">
          <Link to="#!">
            <img src="../images/save-right.png" alt="" />
            <div className="save-text">
              <h4>
                Cameras <br />
                Save Up To $159
              </h4>
              <span>Shop Camera</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Save;

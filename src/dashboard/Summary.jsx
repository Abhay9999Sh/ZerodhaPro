import React from "react";

const Summary = () => {
  return (
    <>
      {/* Welcome Section */}
      <div className="username">
        <h6>Hello, User!</h6>
        <hr className="divider" />
      </div>

      {/* Equity Section */}
      <div className="section">
        <h3 className="section-title">Equity Overview</h3>
        <div className="data">
          <div className="first">
            <h3>₹3.74k</h3>
            <p>Available Margin</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins Used: <span>₹0.00</span>
            </p>
            <p>
              Opening Balance: <span>₹3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Holdings Section */}
      <div className="section">
        <h3 className="section-title">Holdings Summary (13)</h3>
        <div className="data">
          <div className="first">
            <h3 className="profit">
              ₹1.55k <small className="positive">+5.20%</small>
            </h3>
            <p>P&L (Profit & Loss)</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value: <span>₹31.43k</span>
            </p>
            <p>
              Total Investment: <span>₹29.88k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Recent Activity Section */}
      <div className="section">
        <h3 className="section-title">Recent Activity</h3>
        <ul className="recent-activity">
          <li>
            <span>Deposit of ₹5k</span>
            <small className="timestamp">Just now</small>
          </li>
          <li>
            <span>Withdrawal of ₹2k</span>
            <small className="timestamp">2 hours ago</small>
          </li>
          <li>
            <span>Equity purchase of ₹10k</span>
            <small className="timestamp">1 day ago</small>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Summary;

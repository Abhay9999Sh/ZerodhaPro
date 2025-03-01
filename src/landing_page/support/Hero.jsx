import React from "react";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-wrapper">
        <h4>Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>
      <div className="hero-content">
        <div className="hero-left">
          <h1>Search for an answer or browse help topics to create a ticket</h1>
          <input type="text" placeholder="Eg. how do I activate F&O" />
          <div className="links">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>
        <div className="hero-right">
          <h1>Featured</h1>
          <ol>
            <li><a href="#">Current Takeovers and Delisting - January 2024</a></li>
            <li><a href="#">Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

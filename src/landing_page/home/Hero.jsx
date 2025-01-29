import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <img src="/assets/homeHero.png" alt="homehero" className="mb-2 " />
        <h1 className="mt-5 mb-2">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link to="/signup">
          <button
            style={{ width: "20%", margin: "0 auto" }}
            className="btn btn-primary mt-3 fs-6 p-2 "
          >
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

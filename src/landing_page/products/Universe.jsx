import React from "react";
import { Link } from "react-router-dom";

const Universe = () => {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3 fs-2">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="col-lg-4 col-sm-6 col-12 p-5"
            style={{ fontSize: "0.8rem" }}
          >
            <img
              src={`/assets/${[
                "zerodhaFundhouse.png",
                "sensibullLogo.svg",
                "goldenpiLogo.png",
                "streakLogo.png",
                "smallcaseLogo.png",
                "dittoLogo.png",
              ][idx]}`}
              style={{ width: "60%" }}
              alt="Partner Platform"
            />
            <p className="text-small text-muted mt-3">
              {[
                "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
                "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
                "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
                "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
                "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
                "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
              ][idx]}
            </p>
          </div>
        ))}
        <Link to='/signup'>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="btn btn-primary mt-3 fs-6 p-2"
        >
          Sign up for free
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Universe;

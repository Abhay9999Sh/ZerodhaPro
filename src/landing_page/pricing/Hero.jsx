import React from "react";

const Hero = () => {
  return (
    <div className="container px-0">
      
      <div className="row p-5 mt-5  mb-5 text-center">
        <h1 className="mb-3">Charges</h1>
        <h3 className="fs-4" style={{ color: "grey", fontSize: "1.2em" }}>
          List of all charges and taxes
        </h3>
      </div>
      <div
        className="row p-5 mt-5 pricingHero text-center"
        style={{ fontFamily: "sans-serif", fontSize: "0.85rem" }}
      >
        <div className="col-12 col-md-4 p-3 mb-4">
          <img
            src="/assets/zeroRupee.png"
            className="img-fluid mb-3"
            alt="Free Equity Delivery"
          />
          <h3>Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mb-4">
          <img
            src="/assets/twentyRupee.png"
            className="img-fluid mb-3"
            alt="Intraday and F&O trades"
          />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mb-4">
          <img
            src="/assets/zeroRupee.png"
            className="img-fluid mb-3"
            alt="Free Direct MF"
          />
          <h3>Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

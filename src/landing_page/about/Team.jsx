import React from "react";
const Team = () => {
  return (
    <div className="container">
      <div className="row py-4">
        <h1 className="fs-4 text-center">People</h1>
      </div>
      <div className="row py-4">
        <div className="col-lg-6 col-12 text-center mb-4">
          <img
            src="/assets/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius: "100%", width: "150px", maxWidth: "100%" }}
          />
          <h5 className="mt-3">Nithin Kamath</h5>
          <p style={{ fontSize: "0.85rem" }}>Founder, CEO</p>
        </div>
        <div
          className="col-lg-6 col-12 px-4 text-muted"
          style={{ fontFamily: "sans-serif", fontSize: "0.85rem" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a className="text-decoration-none">Homepage</a> /{" "}
            <a className="text-decoration-none">TradingQnA</a> /{" "}
            <a className="text-decoration-none">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;

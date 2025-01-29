import React from "react";

const Pricing = () => {
  return (
    <div className="container p-5 mt-3">
      <div className="row">
        <div className="col-12 col-md-4 mb-3">
          <h1 className="fs-2">Unbeatable pricing</h1>
          <p className="text-muted mt-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            className="text-primary text-decoration-none"
            style={{ cursor: "pointer" }}
          >
            {" "}
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      
        <div className="col-12 col-md-8 p-3">
          <div className="row text-center">
            <div className="col">
              <img
                src="/assets/zeroRupee.png"
                style={{ width: "60%", height: "0 auto" }}
              />
              <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                Free account opening
              </p>
            </div>
            <div className="col">
              <img
                src="/assets/zeroRupee.png"
                style={{ width: "60%", height: "0 auto" }}
              />
              <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col">
              <img
                src="/assets/twentyRupee.png"
                style={{ width: "60%", height: "0 auto" }}
              />
              <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

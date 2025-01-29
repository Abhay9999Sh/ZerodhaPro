import React from "react";

const Education = () => {
  return (
    <div className="container p-5 mt-3">
      <div className="row">
        <div className="col-12 col-md-6 mb-3 ">
          <img src="/assets/education.svg" style={{ width: "80%" }} />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <h1 className="fs-2">Free and open market education</h1>
          <p className="text-muted mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            className="text-primary text-decoration-none"
            style={{ cursor: "pointer" }}
          >
            {" "}
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className="text-muted mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            className="text-primary text-decoration-none"
            style={{ cursor: "pointer" }}
          >
            {" "}
            Trading Q&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;

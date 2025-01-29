import React from "react";

const Awards = () => {
  return (
    <div className="container p-5 mb-5 ">
      <div className="row">
        <div className="col-md-6 text-center p-5">
          <img
            src="/assets/largestBroker.svg"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </div>
        <div className="col-md-6 mt-5">
          <h1 className="fs-3">Largest stock broker in India</h1>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:{" "}
          </p>
          <div className="row mb-3">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities </p>
                </li>
              </ul>
            </div>
          </div>
          <img src="/assets/pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
};

export default Awards;

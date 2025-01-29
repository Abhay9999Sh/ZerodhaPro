import React from "react";

const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 createTicket">
        <h1 className="fs-5 p-5 pb-0 text-muted">
          To create a ticket, select a relevant topic
        </h1>
      
        <div
          className="col-lg-4 col-md-6 col-sm-12 row p-5"
          style={{ fontFamily: "sans-serif", fontSize: "0.85rem" }}
        >
          <h4 className="fs-6 mb-4">
            <i className="fa-solid fa-circle-plus"></i> Account Opening
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Getting started
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Online
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Offline
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Charges
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Company, Partnership and HUF
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Non Resident Indian (NRI)
          </a>
          <br />
        </div>
       
        <div
          className="col-lg-4 col-md-6 col-sm-12 row p-5"
          style={{ fontFamily: "sans-serif", fontSize: "0.85rem" }}
        >
          <h4 className="fs-6 mb-4">
            <i className="fa-regular fa-user"></i> Your Zerodha Account
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Login credentials
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Your Profile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Account modification and segment addition
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            CMR & DP ID
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Nomination
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Transfer and conversion of shares
          </a>
          <br />
        </div>
        {/* Trading and Markets */}
        <div
          className="col-lg-4 col-md-6 col-sm-12 row p-5"
          style={{ fontFamily: "sans-serif", fontSize: "0.85rem" }}
        >
          <h4 className="fs-6 mb-4">
            <i className="fa-solid fa-trademark"></i> Trading and Markets
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Trading FAQs
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Kite
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Margins
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Product and order types
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Corporate actions
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Kite features
          </a>
          <br />
        </div>
        {/* Funds */}
        <div
          className="col-lg-4 col-md-6 col-sm-12 row p-5"
          style={{ fontFamily: "sans-serif", fontSize: "0.85rem" }}
        >
          <h4 className="fs-6 mb-4">
            <i className="fa-solid fa-credit-card"></i> Funds
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Fund withdrawal
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Adding funds
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Adding bank accounts
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            eMandates
          </a>
          <br />
        </div>
        {/* Console */}
        <div
          className="col-lg-4 col-md-6 col-sm-12 row p-5"
          style={{ fontFamily: "sans-serif", fontSize: "0.85rem" }}
        >
          <h4 className="fs-6 mb-4">
            <i className="fa-brands fa-creative-commons-sa"></i> Console
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            IPO
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Portfolio
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Funds statement
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Profile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Reports
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Referral program
          </a>
          <br />
        </div>
        {/* Coin */}
        <div
          className="col-lg-4 col-md-6 col-sm-12 row p-5"
          style={{ fontFamily: "sans-serif", fontSize: "0.85rem" }}
        >
          <h4 className="fs-6 mb-4">
            <i className="fa-solid fa-coins"></i> Coin
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Understanding mutual funds and Coin
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Coin app
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Coin web
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Transactions and reports
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            National Pension Scheme (NPS)
          </a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;

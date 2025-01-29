import React from "react";

const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 createTicket">
        <h1 className="fs-5 py-5 mb-5 pb-0 text-muted">
          To create a ticket, select a relevant topic
        </h1>

        {/* Ticket Categories */}
        {[
          {
            icon: "fa-circle-plus",
            title: "Account Opening",
            links: [
              "Getting started",
              "Online",
              "Offline",
              "Charges",
              "Company, Partnership and HUF",
              "Non Resident Indian (NRI)",
            ],
          },
          {
            icon: "fa-user",
            title: "Your Zerodha Account",
            links: [
              "Login credentials",
              "Your Profile",
              "Account modification and segment addition",
              "CMR & DP ID",
              "Nomination",
              "Transfer and conversion of shares",
            ],
          },
          {
            icon: "fa-trademark",
            title: "Trading and Markets",
            links: [
              "Trading FAQs",
              "Kite",
              "Margins",
              "Product and order types",
              "Corporate actions",
              "Kite features",
            ],
          },
          {
            icon: "fa-credit-card",
            title: "Funds",
            links: ["Fund withdrawal", "Adding funds", "Adding bank accounts", "eMandates"],
          },
          {
            icon: "fa-creative-commons-sa",
            title: "Console",
            links: ["IPO", "Portfolio", "Funds statement", "Profile", "Reports", "Referral program"],
          },
          {
            icon: "fa-coins",
            title: "Coin",
            links: [
              "Understanding mutual funds and Coin",
              "Coin app",
              "Coin web",
              "Transactions and reports",
              "National Pension Scheme (NPS)",
            ],
          },
        ].map((category, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 p-4">
            <h4 className="fs-6 mb-4">
              <i className={`fa-solid ${category.icon}`}></i> {category.title}
            </h4>
            {category.links.map((link, idx) => (
              <a key={idx} href="#" className="d-block text-decoration-none mb-2">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTicket;

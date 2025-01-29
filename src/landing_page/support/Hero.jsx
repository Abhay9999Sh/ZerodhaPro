import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4 className="text-center mb-4">Support Portal</h4>
        <a href="" className="d-block text-center mb-4">
          Track Tickets
        </a>
      </div>
      <div className="row px-3" id="supportQuery">
        <div className="col-lg-6 col-md-12 mb-4">
          <h5 className="fs-5 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h5>
          <input
            className="form-control mb-3"
            placeholder="Eg. how do I activate F&O"
            aria-label="Search for an answer"
          />
          <div className="d-flex flex-wrap">
            <a href="" className="me-3 mb-2 text-muted">
              Track account opening
            </a>
            <a href="" className="me-3 mb-2 text-muted">
              Track segment activation
            </a>
            <a href="" className="me-3 mb-2 text-muted">
              Intraday margins
            </a>
            <a href="" className="me-3 mb-2 text-muted">
              Kite user manual
            </a>
          </div>
        </div>

        <div className="col-lg-2 col-md-12"></div>

        <div className="col-lg-4 col-md-12">
          <h1 className="fs-4 mb-3 text-center">Featured</h1>
          <ol className="list-unstyled">
            <li>
              <a href="" className="text-primary">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="" className="text-primary">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;

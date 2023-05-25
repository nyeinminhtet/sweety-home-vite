import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div
        className="paddings innerWidth flexCenter f-container"
        style={{ justifyContent: "space-between" }}
      >
        {/* left side */}
        <div className="f-left flexColStart">
          <h2 className="f-logo">SweetyHome</h2>
          <span className="secondaryText">
            Our Mission is to give the best place and can live there with happy.
          </span>
        </div>
        {/* right side */}
        <div className="f-right flexColStart">
          <span className="primaryText">Our Location</span>
          <span className="secondaryText">
            52th * 53th ,103th Street, Mandalay
          </span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

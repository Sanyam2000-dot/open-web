import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const ContactUs = () => {
  return (
    <div className="container">
      <section className="page-header">
        <h1>Contact Us</h1>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
        </Breadcrumb>
      </section>
    </div>
  );
};

export default ContactUs;

import React from "react";
import facebook from "../../images/icons/facebook.svg";

import instagram from "../../images/icons/instagram.svg";

import linkedin from "../../images/icons/linkedin.svg";

import youtube from "../../images/icons/youtube.svg";
import twitter from "../../images/icons/twitter.svg";
import footer from "../../images/footer.png";
import "../.././App.css";

const FooterComponent = () => {
  return (
    <footer className="foi-footer text-white">
      <div className="container">
        <div className="row footer-content">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <h2 className="mb-0">Want to contribute to Open Source?</h2>
          </div>
          <div className="col-md-4 col-lg-5 col-xl-6 py-3 py-md-0 d-md-flex align-items-center justify-content-end">
            <a href="register.html" className="btn btn-primary btn-lg">
              Register Now
            </a>
          </div>
        </div>
        <div className="row footer-widget-area">
          <div className="col-md-5">
            <div className="py-3">
              <img
                style={{ height: "150px", width: "160px" }}
                src={footer}
                alt="Open Community Logo"
              />
            </div>
          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <nav>
              <ul className="nav flex-column">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="aboutus.html">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contactus.html">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="projects.html">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="gallery.html" className="nav-link">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a href="register.html" className="nav-link">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a href="login.html" className="nav-link">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md-3 mt-3 mt-md-0">
            <p>
              &copy; Open Community{" "}
              <script>document.write(new Date().getFullYear())</script>
            </p>
            <nav className="social-menu">
              <a href="https://www.facebook.com/upesopen/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/upesopen_/">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="https://in.linkedin.com/company/open-community">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://twitter.com/upesopen">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="https://www.youtube.com/channel/UCxdpyRSNdAKQ6R6Jpv_-nKQ/featured">
                <img src={youtube} alt="youtube" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

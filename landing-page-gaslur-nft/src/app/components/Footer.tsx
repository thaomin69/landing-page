import React from 'react';

function Footer() {
  return (
    <footer className="cor-fundo-site pdt-0 mgt-2">
      <div className="footer cor-fundo-site">
        <div className="container">
          <div className="row">
            <div className="mgb-4 xs-12 sm-12 md-12 lg-4">
              <h2 className="eas19 colorletra2">Etiam et id tincidunt<br /> faucibus mollis a<br /> sociis pretium<br /> fermentum quis<br /> magna faucibus<br /> lacus.</h2>
            </div>
            <div className="lg-1"></div>
            <div className="xs-12 sm-6 md-4 lg-3">
              <p className="colorletra2 t3 eas20">Marketplace</p>
              <nav>
                <ul className="eas8 eas20 mgb-2">
                  <li className="mgb-3">
                    <a className="p2 colorletra4 eas20" href="http://Google.com">Home</a>
                  </li>
                  <li className="mgb-3 ">
                    <a className="p2 colorletra4 eas20" href="http://Google.com">Activity</a>
                  </li>
                  <li className="mgb-3 ">
                    <a className="p2 colorletra4 eas20" href="http://Google.com">Discover</a>
                  </li>
                  <li className="mgb-5 ">
                    <a className="p2 colorletra4 eas20" href="http://Google.com">Learn more</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="xs-12 sm-6 md-4 lg-2">
              <p className="colorletra2 t3 eas20">Company</p>
              <nav>
                <ul className="eas8 eas20 mgb-2">
                  <li className="mgb-3">
                    <a className="p2 colorletra4" href="http://Google.com">About Us</a>
                  </li>
                  <li className="mgb-3">
                    <a className="p2 colorletra4" href="http://Google.com">Services</a>
                  </li>
                  <li className="mgb-5">
                    <a className="p2 colorletra4 " href="http://Google.com">Portfolio</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="xs-12 sm-6 md-4 lg-2">
              <p className="mgl-2 colorletra2 t3 eas20">Contact</p>
              <nav>
                <ul className="eas8 eas20">
                  <li className="mgb-3 ">
                    <a className="p2 colorletra4" href="http://Google.com">Facebook</a>
                  </li>
                  <li className="mgb-3 ">
                    <a className="p2 colorletra4" href="http://Google.com">Instagram</a>
                  </li>
                  <li className="mgb-3 ">
                    <a className="p2 colorletra4" href="http://Google.com">Twitter</a>
                  </li>
                  <li className="mgb-5">
                    <a className="p2 colorletra4" href="http://Google.com">Email</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <hr />
          <div className="eas9">
            <div>
              <img src="./img/Instagram.png" alt="Instagram" />
              <img src="./img/Facebook.png" alt="Facebook" />
              <img src="./img/Twitter Squared.png" alt="Twitter" />
            </div>
            <div>
              <p className="p2 colorletra5 eas11">Copyright 2021 Gaslur</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';

function Header() {
  return (
    <header className="mg pd">
      <div className="container">
        <div className="header1">
          <div>
            <p className="mgt-3 titulo-gaslur-home">Gaslur</p>
          </div>
          <div>
            <nav>
              <ul className="ulheader1">
                <li className="lihome">
                  <a className="mgr-3 texto-home-colorido" href="https://www.google.com">HOME</a>
                </li>
                <li>
                  <a className="colorletra1 mgr-3 p1" href="https://www.google.com">MY PROFILE</a>
                </li>
                <li>
                  <a className="colorletra1 mgr-3 p1" href="https://www.google.com">ACTIVITY</a>
                </li>
                <li>
                  <a className="colorletra1 p1" href="https://www.google.com">HOW IT WORKS</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <button className="cor-fundo-site buttonheader1 mgr-3">
              <a className="eas colorletra1 p1" href="https://www.google.com">CREATE</a>
            </button>
            <button className="cor-fundo-site buttonheader2">
              <a className="colorletra1 p1" href="https://www.google.com">SIGN IN</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
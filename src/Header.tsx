import React from 'react';
import logo from "./assets/img/babble_logo.png";
import { useState as S } from 'react';

function Header() {
  const [menuActive, setMenuActive] = S(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
      <>
        <nav id="navbar">
          <div className="container">
            <ul className={`menu ${menuActive ? 'menu_active' : ''}`}>
              <li className="menu_item">
                <a href="https://babble.yakovlevdev.com" className="menu_link">Main</a>
              </li>
              <li className="menu_item">
                <a href="https://yakovlevdev.com" className="menu_link">With your car</a>
              </li>
              <li className="menu_item">
                <a href="https://yakovlevdev.com" className="menu_link">By company car</a>
              </li>
              <li className="menu_item">
                <a href="#terms" className="menu_link">Terms</a>
              </li>
              <li className="menu_item">
                <a href="#contacts" className="menu_link">Contacts</a>
              </li>
              <li className="menu_item">
                <a href="https://yakovlevdev.com" className="menu_link">Submit your request</a>
              </li>
            </ul>
          </div>
          <div className={`hamburger ${menuActive ? 'hamburger_active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        <div className="subheader">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-4 offset-md-1">
                <a href="https://babble.yakovlevdev.com" className="subheader_logo">
                  <img src={logo} alt="Babble Taxi Service"/>
                </a>
                <div className="subheader_official">
                  An air taxi will babble you home
                </div>
              </div>

              <div className="xs-hidden col-md-3 offset-md-1 col-xl-2 offset-xl-2">
                <div className="subheader_call">Call us every day</div>
                <a href="tel:.84957970988" className="subheader_phone">8 495 797 09 88</a>
              </div>

              <div className="col-6 col-md-3 col-lg-2">
                <a href="tel:.84957970988" className="xs-visible subheader_phone">8 495 797 09 88</a>
                <button className="subheader_btn">
                  <div className="btn_text">Request a call</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Header;

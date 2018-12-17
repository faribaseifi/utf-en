import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthContext from '../utils/authContext';
import NavItem from './NavItem';

export class Header extends Component {
  static contextType = AuthContext;
  render() {
    return (
      <header id="header-container">
        <div id="top-bar">
          <div className="container">
            <div className="left-side">
              <ul className="top-bar-menu">
                <li>
                  <i className="fa fa-phone" /> 021-88390459{' '}
                </li>
                <li>
                  <i className="fa fa-envelope" /> info@utf.ut.ac.ir{' '}
                  <a href="#">
                    <span
                      className="__cf_email__"
                      data-cfemail="1e717878777d7b5e7b667f736e727b307d7173"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="right-side">
              <ul className="social-icons">
                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/hamiyanut/">
                    <i className="icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clearfix" />

        <div id="header">
          <div className="container-fluid">
            <div className="left-side">
              <div id="logo">
                <a href="/">
                  <img src="images/Capture.PNG" alt="" href="/" />
                </a>
              </div>

              <div className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>

              <nav id="navigation" className="style-1">
                <ul id="responsive">
                  <NavItem exact={true} to="/en/">
                    Home
                  </NavItem>

                  <li>
                    <a style = {{fontSize: "13px"}} href="#">About</a>
                    <ul>
                      <NavItem to="/en/AboutUni">about university</NavItem>

                      <NavItem to="/en/Donator">Donators</NavItem>

                      <NavItem to="/en/GoalsandGuidelines">
                        Goals and Guidelines
                      </NavItem>

                      <li>
                        <a style = {{fontSize: "13px"}} >Reports</a>

                        <ul>
                          <NavItem to="/en/OperationReport">
                            Operation Report
                          </NavItem>

                          <NavItem to="/en/DonationsReport">
                            Donations Report
                          </NavItem>

                          <NavItem to="/en/InspectorsReport">
                            Inspectors Report
                          </NavItem>

                          <NavItem  to="/en/FinancialReport">
                            Financial Report
                          </NavItem>
                        </ul>
                      </li>
                      <li>
                        <a style = {{fontSize: "13px"}} >Elements</a>
                        <ul>
                          <NavItem to="/en/OrganizationalChart">
                            Organizational Chart
                          </NavItem>

                          <NavItem to="/en/BoardofTrustees">
                            Board of Trustees
                          </NavItem>

                          <li>
                            <a style = {{fontSize: "13px"}} >
                              Board of Directors
                            </a>
                            <ul>
                              <NavItem to="/en/Inspector">Inspector</NavItem>
                            </ul>

                            <NavItem to="/en/CEO">CEO</NavItem>

                          </li>
                        </ul>
                      </li>

                      <NavItem to="/en/FAQ">FAQ</NavItem>
                    </ul>
                  </li>

                  <li>
                    <a style = {{fontSize: "13px"}} href="#">Donate Now!</a>
                    <ul>
                      <NavItem to="/en/BecomeaDonator">Become a Donator</NavItem>

                      <NavItem to="/en/DonateviaTime">
                        Donate via Time/Skill
                      </NavItem>
                    </ul>
                  </li>

                  <li>
                    <a style = {{fontSize: "13px"}} href="#">How To</a>
                    <ul>
                      <li>
                        <a style = {{fontSize: "13px"}}>Help with Student Loans</a>
                        <ul>
                          <NavItem to="/en/SupportSus">
                            Support Susceptible Students
                          </NavItem>

                          <NavItem to="/en/SupportInt">
                            Support International Susceptible Students
                          </NavItem>
                        </ul>
                      </li>

                      <NavItem to="/en/HelpActionProjs">
                        Help with Projects in Action
                      </NavItem>

                      <NavItem to="/en/JoinDonators">
                        Join Donators Community
                      </NavItem>

                      <NavItem to="/en/DonateEdu">
                        Donate Educational Products
                      </NavItem>
                    </ul>
                  </li>

                  <NavItem to="/en/Branches">Branches</NavItem>

                  <NavItem to="/en/ContactUs">Contact Us</NavItem>
                </ul>
              </nav>
              <div className="clearfix" />
            </div>

            <div className="right-side">
              <div className="header-widget">
                {this.context.userIsLoggedIn ? (

<a onClick={this.context.removeToken} class="button border sign-in margin-right-10">
Log Out</a>
                ) : (
                  <Link to="/en/login" className="sign-in">
                    <i className="fa fa-user" /> Log In / Register
                  </Link>
                )}
                <a href="/profile" className="button border">
                  UserName
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

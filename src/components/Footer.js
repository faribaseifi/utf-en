import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
            <div id="footer" className="dark">
              <div className="container">
                <div className="row">
                  <div className="col-md-5 col-sm-6">

                    <h4>University Foundation Chart</h4>
                    <ul className="footer-links small h6">
                      <li>
                        <Link to="/OrganizationalChart">Organizational Chart</Link>
                      </li>
                      <li>
                        <Link to="/BoardofTrustees">Board Of Trustees</Link>
                      </li>
                      <li>
                        <Link to="/Inspector">Board Of Directors</Link>
                      </li>
                      <li>
                        <Link to="/CEO">CEO</Link>
                      </li>

                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="#">Donators</Link>
                      </li>
                      <li>
                        <Link to="/JoinDonators">How to</Link>
                      </li>
                      <li>
                        <Link to="/ContactUs">Contact</Link>
                      </li>

                    </ul>

                    <span>

              // this is a place holder for EnAmAd :|

                    </span>
                      </div>

                  <div className="col-md-4 col-sm-6 small">
                    <h4>Partnerships</h4>
                    <ul className="footer-links h6">
                      <li>
                        <Link to="/studentfunds">Student Funds</Link>
                      </li>
                      <li>
                        <Link to="HelpActionProjs">Projects In Action</Link>
                      </li>
                      <li>
                        <Link to="/BecomeaDonator">Join Partnership Program</Link>
                      </li>
                      <li>
                        <Link to="/DonateEdu">Donate Books</Link>
                      </li>
                      <li>
                        <Link to="/SupportSus">Support Top Students</Link>
                      </li>
                      <li>
                        <Link to="/Need">Join The Organization</Link>
                      </li>

                    

                    </ul>


                    <div className="clearfix" />
                  </div>

                  <div className="col-md-3 col-sm-12 small">
                    <h4>Contact Us</h4>
                    <div className="text-widget">
                      <span>50th Block, across Blood Donation Organization, Vesal Shirazi ST.</span> <br />
                      Phone: <span>021-88390459 </span>
                      <br />
                      E-Mail: info@utf.ut.ac.ir
                      <br />
                    </div>

                  <ul className="social-icons margin-top-20 h6">
                    <li>
                      <a className="instagram" href="https://www.instagram.com/hamiyanut/">
                        <i className="icon-instagram" />
                      </a>
                    </li>

                  </ul>
                </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="copyrights">
                © 2018 all rights reserved for University of Tehran
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

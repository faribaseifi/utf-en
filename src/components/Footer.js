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
                  <a href="/OrganizationalChart">Organizational Chart</a>
                </li>
                <li>
                  <a href="/BoardofTrustees">Board Of Trustees</a>
                </li>
                <li>
                  <a href="/Inspector">Board Of Directors</a>
                </li>
                <li>
                  <a href="/CEO">CEO</a>
                </li>

                <li>
                  <a href="/faq">FAQ</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="#">Donators</a>
                </li>
                <li>
                  <a href="/JoinDonators">How to</a>
                </li>
                <li>
                  <a href="/ContactUs">Contact</a>
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
                  <a href="/studentfunds">Student Funds</a>
                </li>
                <li>
                  <a href="HelpActionProjs">Projects In Action</a>
                </li>
                <li>
                  <a href="/BecomeaDonator">Join Partnership Program</a>
                </li>
                <li>
                  <a href="/DonateEdu">Donate Books</a>
                </li>
                <li>
                  <a href="/SupportSus">Support Top Students</a>
                </li>
                <li>
                  <a href="/Need">Join The Organization</a>
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
                <span>
                  {' '}
                  <a href="#">

                  </a>{' '}
                </span>
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

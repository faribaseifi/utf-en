import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const Benefactor = ({khayer_id,khayer_name,khayer_pic}) => {
    return(
      <div
        className="carousel-item"
        style={{ position: 'relative', height: '550.4px' }}>
        <div
          className="grid-item"
          style={{ position: 'absolute', left: '0%', top: '0px' }}>
          <div className="agent">
            <div className="agent-avatar">
              <Link to={`/BenefactorDetail/${khayer_id}`}>
                <img src={`https:/utf.ut.ac.ir/${khayer_pic}`} alt="" />
                <span className="view-profile-btn">
                  View Profile
                </span>
              </Link>
            </div>

            <div className="agent-content">
              <div className="agent-name">
                <h4>
                  <a href="agent-page.html">{khayer_name}</a>
                </h4>
              </div>

              <ul className="agent-contact-details">
                <li>
                  <i className="sl sl-icon-call-in" />
                  (123) 123-456
                </li>
                <li>
                  <i className="fa fa-envelope-o " />
                  <a href="#">
                    <span
                      className="__cf_email__"
                      data-cfemail="f0849f9db09588919d809c95de939f9d">
                      [email&nbsp;protected]
                    </span>
                  </a>
                </li>
              </ul>

            
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>

    )
  }
export default Benefactor;

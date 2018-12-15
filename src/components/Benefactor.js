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
                <Link to={`/BenefactorDetail/${khayer_id}`}>
              {khayer_name}
                  </Link>
                </h4>
              </div>




              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>

    )
  }
export default Benefactor;

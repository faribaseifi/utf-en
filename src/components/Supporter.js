import React,{Component} from 'react';
import {Link} from 'react-router-dom';
const Supporter = ({supporter_id,supporter_little_logo,supporter_name}) => {
    return(
    <div className="item">
        <Link to={`/en/SupporterDetail/${supporter_id}`}>
          <img src={`https://utf.ut.ac.ir/${supporter_little_logo}`} alt="" />
          <p>{supporter_name}</p>
        </Link>
    </div>

    )
  };

export default Supporter;

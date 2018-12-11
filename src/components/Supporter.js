import React,{Component} from 'react';

<<<<<<< HEAD

const Supporter = ({supporter_little_logo}) => {
    return(
      <div className="item">
        <img src={`https://utf.ut.ac.ir/${supporter_little_logo}`} alt="" />
      </div>

    )
  }
=======
const Supporter = ({supporter_little_logo,supporter_name}) => {
    return(
    <div className="item">
        <img src={`https://utf.ut.ac.ir/${supporter_little_logo}`} alt="" />
          <p>{supporter_name}</p>
      </div>

    )
  };
>>>>>>> First commit

export default Supporter;

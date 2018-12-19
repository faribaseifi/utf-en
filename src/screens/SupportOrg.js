import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'


class SupportOrg extends Component {
render(){
  return (
    <Fragment>
    <div className="parallax titlebar" data-background="images/headerSingle.jpg" data-color="#333333" data-color-opacity="0.7" data-img-width="800" data-img-height="505" style={{backgroundImage: "url(images/headerSingle.jpg)", backgroundAttachment: "fixed", backgroundSize: "1349px 851.556px", backgroundPosition: "50% -468.098px" }}  >
    <div className="parallax-overlay" style={{backgroundColor: "rgb(51, 51, 51)", opacity: 0.7}}></div>

      <div id="titlebar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <h2>supporting organization</h2>
              <span>donators and givers</span>

              <nav id="breadcrumbs">
                <ul>
                  <NavItem to="/">Homepage</NavItem>
                  <NavItem to="/SupportOrg">supporting organization</NavItem>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </div>

<div className="container">
  <div className="row">
      <h2 className="text-center margin-bottom-50">support organization (only donators and givers) </h2>




<div className="col-md-6 margin-bottom-50">
  <a href="/DonateviaTime" className="post-imgn">
          <img src="images/emotional.jpg" alt=""></img >
        </a>
        <p className="text-center margin-top-20">emotional support</p>

</div>

<div className="col-md-6 margin-bottom-50">
  <a href="#" className="post-imgn">
          <img src="images/physical.jpg" alt=""></img >
        </a>
        <p className="text-center margin-top-20">physical support</p>

</div>







  </div>
</div>



        </Fragment>


  )
}
}

export default SupportOrg;

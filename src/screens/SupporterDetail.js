
import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'


class SupporterDetail extends Component {
render(){
  return (

    <Fragment>

    <div className="parallax titlebar" data-background="images/headerSingle.jpg" data-color="#333333" data-color-opacity="0.7" data-img-width="800" data-img-height="505" style={{backgroundImage: "url(images/headerSingle.jpg)", backgroundAttachment: "fixed", backgroundSize: "1349px 851.556px", backgroundPosition: "50% -468.098px" }}  >
    <div className="parallax-overlay" style={{backgroundColor: "rgb(51, 51, 51)", opacity: 0.7}}></div>

      <div id="titlebar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <h2>about this supporter</h2>

              <nav id="breadcrumbs">
                <ul>
                  <NavItem to="/">Homepage</NavItem>
                  <NavItem to="/SupporterDetail">supporters</NavItem>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="container">
    	<div className="row">
    		<div className="col-md-12">

    			<div className="agent agent-page agency long-content">

    				<div className="agent-avatar">
    					<img src="images/agency-01.jpg" alt=""></img>
    				</div>

    				<div className="agent-content">
    					<div className="agent-name">
    						<h4>King Properties</h4>
    						<span><i className="fa fa-map-marker"></i> New York</span>
    					</div>

    					<p>Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>

    					<ul className="agent-contact-details">
    						<li><i className="sl sl-icon-call-in"></i>(123) 123-456</li>
    						<li><i className="fa fa-envelope-o "></i><a href="#"><span className="__cf_email__" data-cfemail="e784888993868493a7829f868a978b82c984888a">[email&nbsp;protected]</span></a></li>
    					</ul>

    					<div className="clearfix"></div>
    				</div>

    			</div>

    		</div>
    	</div>
    </div>
      </Fragment>

  )
}
}

export default SupporterDetail;

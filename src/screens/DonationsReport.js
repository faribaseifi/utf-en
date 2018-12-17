import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'



class DonationsReport extends Component {
render(){
  return (
    <div className="parallax titlebar" data-background="images/headerSingle.jpg" data-color="#333333" data-color-opacity="0.7" data-img-width="800" data-img-height="505" style={{backgroundImage: "url(images/headerSingle.jpg)", backgroundAttachment: "fixed", backgroundSize: "1349px 851.556px", backgroundPosition: "50% -468.098px" }}  >
    <div className="parallax-overlay" style={{backgroundColor: "rgb(51, 51, 51)", opacity: 0.7}}></div>

      <div id="titlebar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <h2>Listings</h2>
              <span>Grid Layout With Sidebar</span>

              <nav id="breadcrumbs">
                <ul>
                  <NavItem to="/en/">Homepage</NavItem>
                  <NavItem to="/en/DonationsReport">Donations Report</NavItem>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default DonationsReport;

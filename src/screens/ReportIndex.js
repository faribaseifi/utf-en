import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'
import {loadScripts, scripts} from '../utils/withScripts';



class ReportIndex extends Component {
  constructor(props){
  super(props);
  loadScripts(scripts);
  }
render(){
  return (
    <Fragment>



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
                        <NavItem to="/">Homepage</NavItem>
                        <NavItem to="/ReportIndex">Report Index</NavItem>

                      </ul>
                    </nav>

                  </div>
                </div>
              </div>
            </div>
          </div>



<div className="container">
  <div className="row">


    <div className="row">

      <h1 className="text-center"> founding for suspecious and top students </h1>

    			<div className="col-md-3 col-sm-6">
    				<div className="icon-box-1">

    					<div className="icon-container">
    						<i className="im im-icon-Office"></i>
    						<div className="icon-links">
    							<a href="listings-grid-standard-with-sidebar.html">For Sale</a>
    							<a href="listings-grid-standard-with-sidebar.html">For Rent</a>
    						</div>
    					</div>

    					<h3>Apartments</h3>
    					<p>Aliquam dictum elit vitae mauris facilisis, at dictum urna dignissim donec vel lectus vel felis.</p>
    				</div>
    			</div>

    			<div className="col-md-3 col-sm-6">
    				<div className="icon-box-1">

    					<div className="icon-container">
    						<i className="im im-icon-Home-2"></i>
    						<div className="icon-links">
    							<a href="listings-grid-standard-with-sidebar.html">For Sale</a>
    							<a href="listings-grid-standard-with-sidebar.html">For Rent</a>
    						</div>
    					</div>

    					<h3>Houses</h3>
    					<p>Aliquam dictum elit vitae mauris facilisis, at dictum urna dignissim donec vel lectus vel felis.</p>
    				</div>
    			</div>

    			<div className="col-md-3 col-sm-6">
    				<div className="icon-box-1">

    					<div className="icon-container">
    						<i className="im im-icon-Car-3"></i>
    						<div className="icon-links">
    							<a href="listings-grid-standard-with-sidebar.html">For Sale</a>
    							<a href="listings-grid-standard-with-sidebar.html">For Rent</a>
    						</div>
    					</div>

    					<h3>Garages</h3>
    					<p>Aliquam dictum elit vitae mauris facilisis, at dictum urna dignissim donec vel lectus vel felis.</p>
    				</div>
    			</div>

    			<div className="col-md-3 col-sm-6">
    				<div className="icon-box-1">

    					<div className="icon-container">
    						<i className="im im-icon-Clothing-Store"></i>
    						<div className="icon-links">
    							<a href="listings-grid-standard-with-sidebar.html">For Sale</a>
    							<a href="listings-grid-standard-with-sidebar.html">For Rent</a>
    						</div>
    					</div>

    					<h3>Commercial</h3>
    					<p>Aliquam dictum elit vitae mauris facilisis, at dictum urna dignissim donec vel lectus vel felis.</p>
    				</div>
    			</div>

    		</div>



<div className="col-md-12">
  <h3 className="text-center"> founding for suspecious and top students </h3>

<div class="col-md-2">
  <a href="http://utf.ut.ac.ir/assets/pdf/nashrie1.pdf"><br/><img href="" src="images/1.jpg" alt=""/></a>
</div>
<div class="col-md-2">
  <a href="http://utf.ut.ac.ir/assets/pdf/vaghf_95_(4).pdf"><br/><img href="" src="images/2.jpg" alt=""/></a>
</div>
<div class="col-md-2">
  <a href="http://utf.ut.ac.ir/assets/pdf/3.pdf"><br/><img href="" src="images/5.jpg" alt=""/></a>
</div>
<div class="col-md-2">
  <a href="http://utf.ut.ac.ir/assets/pdf/zemestan94.pdf"><br/><img href="" src="images/3.jpg" alt=""/></a>
</div>
<div class="col-md-2">
  <a href="http://utf.ut.ac.ir/assets/pdf/khordad94.pdf"><br/><img href="" src="images/4.jpg" alt=""/></a>
</div>
</div>




<div className="col-md-12">
  <h3 className="text-center"> specials and readmore books </h3>

<div class="col-md-3">
  <a href="http://utf.ut.ac.ir/assets/pdf/leaflet/1.pdf"><br/><img href="" src="images/14.jpg" alt=""/></a>
</div>
<div class="col-md-3">
  <a href="http://utf.ut.ac.ir/assets/pdf/leaflet/front.pdf"><br/><img href="" src="images/11.jpg" alt=""/></a>
</div>
<div class="col-md-3">
  <a href="http://utf.ut.ac.ir/assets/pdf/leaflet/back.pdf"><br/><img href="" src="images/12.jpg" alt=""/></a>
</div>
<div class="col-md-3">
  <a href="http://utf.ut.ac.ir/assets/pdf/mandegaran.pdf"><br/><img href="" src="images/13.jpg" alt=""/></a>
</div>
</div>



<div className="col-md-12">
  <h3 className="text-center"> specials and readmore books </h3>

  <div class="col-md-4">
  <figure class="figure">
    <img src="images/66.jpg" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
    <figcaption class="figure-caption">A caption for the above image.</figcaption>
  </figure>
  </div>

<div class="col-md-4">
<figure class="figure">
  <img src="images/55.jpg" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
</div>

<div class="col-md-4">
<figure class="figure">
  <img src="images/44.jpg" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
</div>
</div>




  </div>
</div>



        </Fragment>


  )
}
}

export default ReportIndex;

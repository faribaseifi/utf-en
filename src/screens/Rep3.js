import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'

class Rep3 extends Component {

render(){
  return (
    <Fragment>
    <div className="parallax titlebar" data-background="images/headerSingle.jpg" data-color="#333333" data-color-opacity="0.7" data-img-width="800" data-img-height="505" style={{backgroundImage: "url(images/headerSingle.jpg)", backgroundAttachment: "fixed", backgroundSize: "1349px 851.556px", backgroundPosition: "50% -468.098px" }}  >
    <div className="parallax-overlay" style={{backgroundColor: "rgb(51, 51, 51)", opacity: 0.7}}></div>

      <div id="titlebar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <h2>Report</h2>
              <span>University of Tehran
</span>

              <nav id="breadcrumbs">
                <ul>
                  <NavItem to="/">Homepage</NavItem>
                  <NavItem to="/Reports1">Report of Patron’s Foundation Building </NavItem>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </div>






        <div className="container">

      	<div className="blog-page">
      	<div className="row">


      		<div className="margin-top-20 col-md-12">


      			<div className="blog-post single-post">



      				<div className="post-content">
      					<h3>Achievements of the Supporters Foundation program of the University of Tehran
    </h3>



      					<p>The Foundation has taken an initiative for acceleration and promotion of scientific and educational purposes with the cooperation of honorable donors since 2015. Details are as follows: </p>

      					<div className="post-quote">
      						<span className="icon"></span>
      						<blockquote>
                1. Collecting and charting out a statistical record of donations.
        <br/>        2. Correspondence with the donators.
        <br/>        3. Conducting the first scholarship program in 2015 for 5oo students.
          <br/>      4. Holding the first scholarship gathering of foundation students on December 26th 2015.
        <br/>        5. Third festival in honor of benefactors held on 2nd January, 2015.
        <br/>        6. Donor’s convention in Faculty of Entrepreneurship.
        <br/>        7. Arranging Donor’s convention at the Faculty of Literature and Humanities.
        <br/>        8. Forming network cooperation between students and university personals.
        <br/>        9. Setting up a wireless system at the Faculty of Literature with a total cost of 150 million tomans. 10. Rebuilding university W.C’s.
      <br/>          11. Rebuilding Hamedi Hall located at the Veterinary   College
      <br/>          12. Rebuilding the Foundation’s new building
      <br/>          13. Setting up a saving’s account
      <br/>          14. In the month of Ramadan, serving dinner to benefactors.
      <br/>          15. Conducting a national plan for future entrepreneur.
      <br/>          16. Holding academic meetings in the area of charity and donations.
      <br/>          17. Formation of an international section of the foundation.
      <br/>          18. Initiating the first website for the Foundation.
      <br/>          19. Second scholarship gathering held on 3rd January, 2016.
      <br/>          20. Activating Second round of scholarship program of the foundation in2016 for 1024 students.
      <br/>          21. Second scholarship gathering on 3rd January 2016.
      <br/>          22. First meeting of donors’ convention held at the Faculty of Fine Arts.
      <br/>          23. Non-Iranian student scholarship.
      <br/>          24. First seminar held for donors
      <br/>          25. Fourth festival held for supporters’ foundation on 26th February, 2016.
      						</blockquote>



      					</div>


      				</div>
      			</div>

      			<div className="margin-top-15"></div>


      	</div>




      	<div className="col-md-4">

      	</div>
      	</div>


      </div>
      </div>






        </Fragment>


  )
}
}

export default Rep3;

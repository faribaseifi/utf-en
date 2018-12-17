import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'
import { loadScripts, scripts } from '../utils/withScripts';


class JoinDonators extends Component {

render(){
  return (
    <Fragment>
    <div className="parallax titlebar" data-background="images/headerSingle.jpg" data-color="#333333" data-color-opacity="0.7" data-img-width="800" data-img-height="505" style={{backgroundImage: "url(images/headerSingle.jpg)", backgroundAttachment: "fixed", backgroundSize: "1349px 851.556px", backgroundPosition: "50% -468.098px" }}  >
    <div className="parallax-overlay" style={{backgroundColor: "rgb(51, 51, 51)", opacity: 0.7}}></div>

      <div id="titlebar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <h2>Founding</h2>
              <span>Student's Founding Program</span>

              <nav id="breadcrumbs">
                <ul>
                  <NavItem to="/en/">Homepage</NavItem>
                  <NavItem to="/en/StudentFunds">Student's Funding Program</NavItem>
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

                    <div className="">
                      <a href="/ClickForRes" className="button border block-btnf">click here to see funding results</a>
                    </div>

<br/>


                    <h3 className="text-center">Founds</h3>
                    <div className="col-md-12">

<div className="col-md-8">


                    <p>The charity deposit account was opened in the past year during an Eftar(breaking ones fast) banquet. The charity deposit account forms were distributed among the guests and 433 forms were filled out.  There, the benevolent donors, staffs, retired personnel and students of the University of Tehran voiced their readiness within the framework of cash aids and non-cash aids and cooperative assistances. At present, 8 people have helped with the deposit account within the framework of assistance, 107 people within the framework of non-cash aids, and 148 students, faculty members, staff, and retired personnel of UT within the framework of cooperative assistance. The total payment in cash to the account is 336 million Tomans.  The purpose of establishment of this account is to help with the needy and talented students of UT, paying interest-free loan to the deserving students of UT , helping with the development of the activities of the Foundation and meeting the public goals mentioned in the constitution and other suggested cases.</p>

</div>

<br/>


<div className="col-md-4">

    <div className="">
      <a href="#" className="button border block-btns">Border Button</a>
    </div>
    <div classNames="">
      <a href="#" className="button border block-btns">Border Button</a>
    </div>
    <div classNames="">
      <a href="#" className="button border block-btns">Border Button</a>
    </div>
    <div classNames="">
      <a href="#" className="button border block-btns">Border Button</a>
    </div>


    <div className="notification error">
    				<p><span>Error!</span> Please fill in all the fields required.</p>
    				<a className="close"></a>
    			</div>

</div>

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

export default JoinDonators;

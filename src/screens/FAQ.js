import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'
<<<<<<< HEAD
import { loadScripts, scripts } from '../utils/withScripts';
=======
>>>>>>> First commit



class FAQ extends Component {
<<<<<<< HEAD
constructor(props){
super(props);
loadScripts(scripts);

}
render(){
return (

<Fragment>

  <div id="titlebar">

    <div className="container">
      <div className="row">
        <div className="col-md-12">

          <h2>Listings</h2>
          <span>Grid Layout With Sidebar</span>

          <nav id="breadcrumbs">
            <ul>
              <NavItem to="/">Homepage</NavItem>
              <NavItem to="/Donator">Donators</NavItem>
            </ul>
          </nav>

        </div>
      </div>
    </div>
  </div>

  <div className="container">
    <div className="row">
      <div className="style-2">

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">First Toggle<i className="sl sl-icon-plus" /></a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Vivamus justo arcu, elementum a sollicitudin pellentesque, tincidunt ac enim. Proin id arcu ut
              ipsum vestibulum elementum.</p>
          </div>
        </div>


        <div className="toggle-wrap">
          <span className="trigger"><a href="#"> Second Toggle <i className="sl sl-icon-plus" /></a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>




        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Third Toggle With Icon <i className="sl sl-icon-plus" /> </a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Third Toggle With Icon <i className="sl sl-icon-plus" /> </a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Third Toggle With Icon <i className="sl sl-icon-plus" /> </a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Third Toggle With Icon <i className="sl sl-icon-plus" /> </a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Third Toggle With Icon <i className="sl sl-icon-plus" /> </a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Third Toggle With Icon <i className="sl sl-icon-plus" /> </a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Third Toggle With Icon <i className="sl sl-icon-plus" /> </a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</Fragment>

);
=======
render(){
  return (
    <div class="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="#333333" data-color-opacity="0.7" data-img-width="800" data-img-height="505" style={{backgroundImage: "url(&quot;images/listings-parallax.jpg&quot;)", backgroundAttachment: "fixed", backgroundSize: "1199.21px 757px", backgroundPosition: "50% -101.294px" }}  >
    <div class="parallax-overlay" style={{backgroundColor: "rgb(51, 51, 51)", opacity: 0.7}}></div>

      <div id="titlebar">
        <div class="container">
          <div class="row">
            <div class="col-md-12">

              <h2>Listings</h2>
              <span>Grid Layout With Sidebar</span>

              <nav id="breadcrumbs">
                <ul>
                  <NavItem to="/">Homepage</NavItem>
                  <NavItem to="/FAQ">FAQ</NavItem>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
>>>>>>> First commit
}
}

export default FAQ;

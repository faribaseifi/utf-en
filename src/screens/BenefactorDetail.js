
import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'


class BenefactorDetail extends Component {

  state = {
    benefactor_detail : null
  };

  componentDidMount(){
      const Benefactor_id = this.props.match.params.id;
      fetch('http://utf.ut.ac.ir/index.php/wsrv/getBenefactorById', {
      method: 'POST',
      body: JSON.stringify({
        id: Benefactor_id
      })
    }).then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
      this.setState({
benefactor_detail : data
      })
    }).catch(error => {
      console.log(error);
    })
  }
  
render(){
  const benefactor_detail = this.state.benefactor_detail;
  return (

    <Fragment>
    {
      benefactor_detail ? (
    <Fragment>
    <div className="parallax titlebar" data-background="images/headerSingle.jpg" data-color="#333333" data-color-opacity="0.7" data-img-width="800" data-img-height="505" style={{backgroundImage: "url(images/headerSingle.jpg)", backgroundAttachment: "fixed", backgroundSize: "1349px 851.556px", backgroundPosition: "50% -468.098px" }}  >
    <div className="parallax-overlay" style={{backgroundColor: "rgb(51, 51, 51)", opacity: 0.7}}></div>

      <div id="titlebar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <h2>{benefactor_detail.khayer_name}</h2>

              <nav id="breadcrumbs">
                <ul>
                  <NavItem to="/">Homepage</NavItem>
                  <NavItem to="/BenefactorDetail">donators</NavItem>
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
    					<img src={`http://utf.ut.ac.ir/${benefactor_detail.khayer_pic}`} alt=""/>
    				</div>

    				<div className="agent-content">
    					<div className="agent-name">
    						<h4>{benefactor_detail.khayer_name}</h4>
    					</div>

    					<p>{benefactor_detail.khayer_description}</p>

    					<div className="clearfix"></div>
    				</div>

    			</div>

    		</div>
    	</div>
    </div>

    </Fragment>
    ) : null
  }

   
  </Fragment>


  )
}
}

export default BenefactorDetail;


import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'

class SuporterDetail extends Component {

  state = {
    supporter_detail : null
  };

  componentDidMount(){
    const supporter_id = this.props.match.params.supporter_id;
    fetch('http://utf.ut.ac.ir/index.php/wsrv/getSupporterById', {
      method: 'POST',
      body: JSON.stringify({
        id: supporter_id
      })
    }).then(res => {
      return res.json();
    }).then(data => {
      this.setState({
        supporter_detail : data
      })
    }).catch(error => {
      console.log(error);
    })
  }

render(){
  const supporter_detail = this.state.supporter_detail;
  return (

    <Fragment>
    {
      supporter_detail ? (
    <Fragment>
    <div className="parallax titlebar" data-background="images/headerSingle.jpg" data-color="#333333" data-color-opacity="0.7" data-img-width="800" data-img-height="505" style={{backgroundImage: "url(images/headerSingle.jpg)", backgroundAttachment: "fixed", backgroundSize: "1349px 851.556px", backgroundPosition: "50% -468.098px" }}  >
    <div className="parallax-overlay" style={{backgroundColor: "rgb(51, 51, 51)", opacity: 0.7}}></div>

      <div id="titlebar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <h2>{supporter_detail.supporter_name}</h2>

              <nav id="breadcrumbs">
                <ul>
                  <NavItem to="/">Homepage</NavItem>
                  <NavItem to="#">SupporterDetail</NavItem>
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
    					<img src={`http://utf.ut.ac.ir/${supporter_detail.supporter_big_logo}`} alt=""/>
    				</div>

    				<div className="agent-content">
    					<div className="agent-name">
    						<h4>{supporter_detail.supporter_name}</h4>
    					</div>

    					<p>{supporter_detail.supporter_description}</p>

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

export default SuporterDetail;

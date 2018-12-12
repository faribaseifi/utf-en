import React, { Component, Fragment } from 'react';
import AuthContext from '../utils/authContext';
import Axios from 'axios';
import ProfMenu from '../components/ProfMenu.js';


export class MyInfo extends Component {
  static contextType = AuthContext;
  state = {
    data: null
  };
  componentDidMount() {
    const token = this.context.getToken();
    Axios.get('https://www.kanoonbook.ir/index.php/app/test', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.data)
      .then(data => this.setState({ data }))
      .catch(err => console.error('Err', err));
  }
  render() {
    return (
  <Fragment>

      <div>
        <p>Profile page {this.state.data}</p>
      </div>




      <div className="container">
      	<div className="row">












        <ProfMenu/>








      		<div className="col-md-8">
      			<div className="row">


      				<div className="col-md-12 my-profile">
      					<h4 className="margin-top-0 margin-bottom-30">My Account</h4>

      					<label>First name & Last name</label>
      					<input disabled value="Jennie Wilson" type="text"></input>

      					<label>National country code (Iranian)</label>
      					<input disabled value="036156419845" type="text"></input>

      					<label>Phone</label>
      					<input disabled value="(123) 123-456" type="text"></input>

                <label>Mobile Phone</label>
                <input disabled value="(123) 123-456" type="text"></input>

      					<label>Email</label>
      					<input disabled placeholder="something@gmail.com" type="email"></input>

                <label>Date of Birth</label>
                <input disabled type="date" name="bday"></input>

                <label>year of graduation</label>
                <input disabled type="date" name="gday"></input>

                <label>Level of Education</label>
                <input disabled type="text" name="levelGrad"></input>

                <label>Studied Subjects</label>
                <input disabled type="text" name="subsLevel"></input>



      				</div>


      			</div>
      		</div>

      	</div>
      </div>



</Fragment>
    );
  }
}

export default MyInfo;

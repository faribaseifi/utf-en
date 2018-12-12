import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'

class ClickForRes extends Component {
render(){
  return (




    <Fragment>


<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="notification error">
              <p><span>Error!</span> Please fill in all the fields required.</p>
              <a className="close"></a>
            </div>

<div className="col-md-4">
  <label>student code (ID) : </label>
  <input type="text" name="levelGrad"></input>
</div>

<div className="col-md-4">
  <label>national code (ID) : </label>
  <input type="text" name="levelGrad"></input>
</div>

<div className="col-md-4">
  <label>peygiri (ID) : </label>
  <input type="text" name="levelGrad"></input>
</div>

<div className="col-md-12" >
  <a href="#" class="button border block-btns">search</a>
</div>
  </div>
  </div>
</div>








        </Fragment>







          )
        }
        }

        export default ClickForRes;

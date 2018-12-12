import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProfItem from './ProfItem';


export class ProfMenu extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="sidebar left">

          <div className="my-account-nav-container">

            <ul className="my-account-nav">
              <li className="sub-nav-title">Manage Account</li>

              <ProfItem exact={true} to="/profile">
                My Profile
              </ProfItem>

              <ProfItem exact={true} to="/Payments">
               Payments (Donations)
              </ProfItem>


            </ul>

            <ul className="my-account-nav">
              <li className="sub-nav-title">Details</li>
              <ProfItem exact={true} to="/myinfo">
                My Info
              </ProfItem>

              <ProfItem exact={true} to="/PaymentsHis">
                Payments History
              </ProfItem>

              <ProfItem exact={true} to="/PaymentsRem">
                Payments Reminder
              </ProfItem>

            </ul>


          </div>

        </div>
      </div>
    );
  }
}

export default ProfMenu;

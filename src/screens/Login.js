import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../utils/authContext';

export class Login extends Component {
  static contextType = AuthContext;
  state = {
    username: '',
    password: '',
    loading: false,
    redirectToReferer: false
  };

  onUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    this.setState({ loading: true });
    event.preventDefault();
    this.setState({ username: '', password: '' });
    fetch('https://www.kanoonbook.ir/index.php/app/login', {
      method: 'POST',
      body: JSON.stringify({
        user: this.state.username,
        pass: this.state.password
      })
    })
      .then(response => response.json())
      .then(data => {
        this.context.setToken(data.token);
        this.setState({ redirectToReferer: true });
      })
      .catch(err => console.error(err))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const from = (this.props.location.state &&
      this.props.location.state.from) || { pathname: '/' };
    console.log(this.props.location.state);
    if (this.state.redirectToReferer) return <Redirect to={from} />;

    return (
      <div id="wrapper">


        <div className="clearfix" />

        <div id="titlebar">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Log In & Register</h2>

                <nav id="breadcrumbs">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>Log In & Register</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="my-account style-1 margin-top-5 margin-bottom-40">
                <ul className="tabs-nav">
                  <li className="">
                    <a href="#tab1">Log In</a>
                  </li>
                  <li>
                    <a href="#tab2">Register</a>
                  </li>
                </ul>

                <div className="tabs-container alt">
                  <div className="tab-content" id="tab1">
                    <form onSubmit={this.handleSubmit} className="login">
                      <p className="form-row form-row-wide">
                        <label for="username">
                          Username:
                          <i className="im im-icon-Male" />
                          <input
                            type="text"
                            className="input-text"
                            name="username"
                            id="username"
                            value={this.state.username}
                            onChange={this.onUsernameChange}
                          />
                        </label>
                      </p>

                      <p className="form-row form-row-wide">
                        <label for="password">
                          Password:
                          <i className="im im-icon-Lock-2" />
                          <input
                            className="input-text"
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                          />
                        </label>
                      </p>

                      <p className="form-row">
                        <input
                          type="submit"
                          className="button border margin-top-10"
                          name="login"
                          value="Login"
                        />

                        <label for="rememberme" className="rememberme">
                          <input
                            name="rememberme"
                            type="checkbox"
                            id="rememberme"
                            value="forever"
                          />{' '}
                          Remember Me
                        </label>
                      </p>

                      <p className="lost_password">
                        <a href="#">Lost Your Password?</a>
                      </p>
                    </form>
                  </div>

                  <div className="tab-content" id="tab2">

                  				<form method="post" className="register">

                  				<p className="form-row form-row-wide">
                  					<label for="username2">Username:
                  						<i className="im im-icon-Male"></i>
                  						<input type="text" className="input-text" name="username" id="username2" value=""></input>
                  					</label>
                  				</p>

                  				<p className="form-row form-row-wide">
                  					<label for="email2">Email Address:
                  						<i className="im im-icon-Mail"></i>
                  						<input type="text" className="input-text" name="email" id="email2" value=""></input>
                  					</label>
                  				</p>

                  				<p className="form-row form-row-wide">
                  					<label for="password1">Password:
                  						<i className="im im-icon-Lock-2"></i>
                  						<input className="input-text" type="password" name="password1" id="password1"></input>
                  					</label>
                  				</p>

                  				<p className="form-row form-row-wide">
                  					<label for="password2">Repeat Password:
                  						<i className="im im-icon-Lock-2"></i>
                  						<input className="input-text" type="password" name="password2" id="password2"></input>
                  					</label>
                  				</p>

                  				<p className="form-row">
                  					<input type="submit" className="button border fw margin-top-10" name="register" value="Register"></input>
                  				</p>

                  				</form>
                  			</div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        <div className="margin-top-55" />



        <div id="backtotop">
          <a href="#" />
        </div>


      </div>
    );
  }
}

export default Login;

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../utils/authContext';
import validator from 'validator';
export class Login extends Component {
  static contextType = AuthContext;
  state = {
    fields : {
      member_name : '',
      member_family : '',
      member_mobile : '',
      member_national_code : '',
      member_pass1 : '',
      member_pass2 : ''
    },
    username: '',
    password: '',
    loading: false,
    redirectToReferer: false,
    errors : {}
  };

  onUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmitLogin = event => {
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

  handleValidation(callback){
      let {fields} = this.state;
      let errors = {};
      let formIsValid = true;
      //name
      if(validator.isEmpty(fields.member_name)){
        formIsValid = false;
        errors['member_name'] = 'plaese enter your name';
      }
      else if(!(validator.isLength(fields.member_name,{min:3,max:undefined})))
      {
        formIsValid = false;
        errors['member_name'] = 'length of name at least 3 character ';
      }
      //family
      if(validator.isEmpty(fields.member_family)){
        formIsValid = false;
        errors['member_family'] = 'plaese enter your family';
      }
      else if(!(validator.isLength(fields.member_family,{min:3,max:undefined})))
      {
        formIsValid = false;
        errors['member_family'] = 'length of family at least 3 character ';
      }
      //phone
      if(validator.isEmpty(fields.member_mobile)){
        formIsValid = false;
        errors['member_mobile'] = 'plaese enter your mobile';
      }
      //national_code
      if(validator.isEmpty(fields.member_national_code)){
        formIsValid = false;
        errors['member_national_code'] = 'plaese enter your national code';
      }
      else if(!(validator.isLength(fields.member_national_code,{min:10,max:10})))
      {
        formIsValid = false;
        errors['member_national_code'] = 'length of national code at least  character ';
      }
      //password
      if(!(validator.equals(fields.member_pass2,fields.member_pass1))){
          formIsValid = false;
          errors['member_pass2'] = 'not same pass';
      }

      this.setState({errors},()=>{
        return callback(formIsValid);
      });
  }  


  handleSubmitRegister = event => {
    event.preventDefault();
    this.handleValidation((valid)=>{
      if(valid)
        {
          console.log('okye');
        }else{
          console.log('ok nis');
        }
  });
  }


  handleChange(event){
    let fields = this.state.fields;
    let target = event.target;
    fields[target.name] = target.value;
    this.setState({fields});
  }

  render() {
    const from = (this.props.location.state && this.props.location.state.from) || { pathname: '/' };
    // console.log(this.props.location.state);
    if (this.state.redirectToReferer) return <Redirect to={from} />;
const {errors} = this.state;
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
            <div className="col-md-6">
              <div className="my-account style-1 margin-top-5 margin-bottom-40">
                  <h3>Login :</h3>
                  <form onSubmit={this.handleSubmitLogin} className="login">
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
            </div>
            <div className="col-md-6">
                <h3>Register :</h3>

                <div className="my-account style-1 margin-top-5 margin-bottom-40">
                <form onSubmit={this.handleSubmitRegister} className="register">

                  <p className="form-row form-row-wide">
                    <label for="username2">Name:  <span className="inValid-feedback" style={{display:errors['member_name']?'block':'none',border:errors['member_name']?'solid 1px red':''}}>{errors['member_name']}</span>

                      <i className="im im-icon-Male"></i>
                      <input type="text" 
                            onChange={this.handleChange.bind(this)}
                            className={["input-text",errors['member_name']?'is-invalid':''].join(' ')}
                            name="member_name" />
                    </label>
                  </p>

                  <p className="form-row form-row-wide">
                    <label for="username2">Family: <span className="inValid-feedback" style={{display:errors['member_family']?'block':'none',border:errors['member_family']?'solid 1px red':''}}>{errors['member_family']}</span>
                      <i className="im im-icon-Male"></i>
                      <input type="text" onChange={this.handleChange.bind(this)} className="input-text" name="member_family"/>
                    </label>
                  </p>

                  <p className="form-row form-row-wide">
                    <label for="username2">National Code:  <span className="inValid-feedback" style={{display:errors['member_national_code']?'block':'none',border:errors['member_national_code']?'solid 1px red':''}}>{errors['member_national_code']}</span>
                      <i className="im im-icon-Male"></i>
                      <input type="text" onChange={this.handleChange.bind(this)} className="input-text" name="member_national_code"/>
                    </label>
                  </p>

                  <p className="form-row form-row-wide">
                    <label for="email2">Mobile: <span className="inValid-feedback" style={{display:errors['member_mobile']?'block':'none',border:errors['member_mobile']?'solid 1px red':''}}>{errors['member_mobile']}</span>
                      <i className="im im-icon-Mail"></i>
                      <input type="text" onChange={this.handleChange.bind(this)} className="input-text" name="member_mobile"/>
                    </label>
                  </p>

                  <p className="form-row form-row-wide">
                    <label for="password1">Password: <span className="inValid-feedback" style={{display:errors['member_pass1']?'block':'none',border:errors['member_pass1']?'solid 1px red':''}}>{errors['member_pass1']}</span>
                      <i className="im im-icon-Lock-2"></i>
                      <input className="input-text" onChange={this.handleChange.bind(this)} type="password" name="member_pass1"/>
                    </label>
                  </p>

                  <p className="form-row form-row-wide">
                    <label for="password2">Repeat Password: <span className="inValid-feedback" style={{display:errors['member_pass2']?'block':'none',border:errors['member_pass2']?'solid 1px red':''}}>{errors['member_pass2']}</span>
                      <i className="im im-icon-Lock-2"></i>
                      <input className="input-text" onChange={this.handleChange.bind(this)} type="password" name="member_pass2"/>
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
          
        <div className="margin-top-55" />



        <div id="backtotop">
          <a href="#" />
        </div>


      </div>
    );
  }
}

export default Login;

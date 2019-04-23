import React, { Component } from 'react'
import { connect } from 'react-redux'
import BannerImg from '../../images/automation.jpg'


class Login extends Component {

    state = {
      email: '',
      password: ''
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      }, () => {
        console.log("New state in ASYNC callback:", this.state);
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      console.log("on submit", this.state);
      // this.props.signIn(this.state)
    }

    render() {

        document.body.classList.add("login-page");

        return (
            <div className="row justify-content-md-center h-100">
                <div className="banner-image d-none d-xl-block col-xl-9 h-100">
                    <img src={BannerImg} alt="Banner" />
                </div>
                <div className="col-xl-3 col-xs-12 h-100">
                    <div className="brand">
                        <h3 className="text-center">Oracle Cloud Automation</h3>
                    </div>
                    <div className="card fat">
                        <div className="card-body">
                            <h4 className="card-title">Login</h4>
                            <form className="my-login-validation" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input id="email" type="text" className="form-control" name="userName" required autoFocus onChange={this.handleChange}/>
                                    <div className="invalid-feedback">
                                        User Name is invalid
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input id="password" type="password" className="form-control" name="password" required data-eye  onChange={this.handleChange}/>
                                    <div className="invalid-feedback">
                                        Password is required
                                    </div>
                                </div>

                                <div className="form-group m-0">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login

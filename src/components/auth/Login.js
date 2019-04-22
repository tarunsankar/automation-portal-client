import React from 'react'
import BannerImg from '../../images/automation.jpg'


const Login = (props) => {

  document.body.classList.add("login-page");

  return (
    <div className="row justify-content-md-center h-100">
        <div className="banner-image d-none d-xl-block col-xl-9 h-100">
            <img src={BannerImg} alt="Banner Image" />
        </div>
        <div className="col-xl-3 col-xs-12 h-100">
            <div className="brand">
                <h3 className="text-center">Oracle Cloud Automation</h3>
            </div>
            <div className="card fat">
                <div className="card-body">
                    <h4 className="card-title">Login</h4>
                    <form method="POST" className="my-login-validation" novalidate="">
                        <div className="form-group">
                            <label>User Name</label>
                            <input id="email" type="text" className="form-control" name="userName" value="" required
                                autoFocus/>
                            <div className="invalid-feedback">
                                User Name is invalid
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Password
                                <a href="forgot.html" className="float-right link-primary">
                                    Forgot Password?
                                </a>
                            </label>
                            <input id="password" type="password" className="form-control" name="password" required
                                data-eye/>
                            <div className="invalid-feedback">
                                Password is required
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="custom-checkbox custom-control">
                                <input type="checkbox" name="remember" id="remember"
                                    className="custom-control-input"/>
                                <label for="remember" className="custom-control-label">Remember Me</label>
                            </div>
                        </div>

                        <div className="form-group m-0">
                            <button type="submit" className="btn btn-primary btn-block">
                                Login
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            Don't have an account? <a className="link-primary" href="register.html">Create One</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Login

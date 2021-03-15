import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import alertCustom from "../../../components/Alerts";
import logoDesktop from "../../../assets/img/logo_desktop.png";
import "./assets/StyleSignIn.css";

const SignIn = () => {
  const history = useHistory();

  const [users, setUsers] = useState({ email: "", passowrd: "" });
  const { REACT_APP_API_TICKET } = process.env;
  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(REACT_APP_API_TICKET + "user/login", users)
      .then((res) => {
        alertCustom("success", res.data.message);
        history.push("/");
      })
      .catch((err) => {
        alertCustom("error", err.response.data.message);
      });
  };
  const btnGoogle = () => {
    alertCustom("info", "Google");
  };
  const btnFb = () => {
    alertCustom("info", "Facebook");
  };
  return (
    <div className="signup">
      {/* web */}
      <div className="web d-sm-block d-none">
        <div className="container-fluid">
          <div className="row">
            {/* asside */}
            <div className="col-sm-7 banner text-center">
              <div className="bg-banner d-flex flex-column  align-items-center">
                <img
                  className="img-fluid mx-5 logo-desktop-sign-in"
                  src={logoDesktop}
                  alt="Logo Tickitz"
                />
                <h1 className="color4 f-xxl ">wait, watch, wow!</h1>
              </div>
            </div>
            {/* content */}
            <div className="col-sm-5">
              <div className="container">
                <div className="row mt-5">
                  <div className="col-12 mt-4">
                    <h4 className="c-black f-xxl f-weight">Sign in</h4>
                    <p className="color2">
                      Sign in with your data that you entered during your
                      registration
                    </p>
                  </div>
                </div>
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-12 form-group">
                      <label htmlFor="form-email" className="f-md">
                        Email
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        placeholder="Write your email"
                        required
                        className="form-control h-75 w-100 box"
                        onChange={(e) =>
                          setUsers({ ...users, email: e.target.value })
                        }
                        value={users.email}
                      />
                    </div>
                    <div className="col-12 form-group mt-4">
                      <label htmlFor="form-pass" className="f-md">
                        Password
                      </label>
                      <input
                        id="form-pass"
                        type="password"
                        placeholder="Write your password"
                        minLength="8"
                        required
                        className="form-control h-75 w-100 box"
                        onChange={(e) =>
                          setUsers({ ...users, password: e.target.value })
                        }
                        value={users.password}
                      />
                    </div>
                    <div className="col-12 mt-5">
                      <button type="submit" className="btn btn-input w-100">
                        Sign In
                      </button>
                    </div>
                  </div>
                </form>
                <div className="row text-center">
                  <div className="col-12 mt-5">
                    <p>
                      Forgot password?{" "}
                      <Link className="line" to="/forgot">
                        Reset now
                      </Link>
                    </p>
                  </div>
                  <div className="col-12">
                    <p className="f-sm color2">or</p>
                  </div>
                  <div className="col-12 mb-5">
                    <button
                      onClick={btnGoogle}
                      className="text-align-center btn btn-shadow  mr-4"
                    >
                      <i className="fab fa-google bg-google"></i>
                      <span className="color2 f-sm ml-2">Google</span>
                    </button>
                    <button
                      onClick={btnFb}
                      className="text-align-center btn btn-shadow bg-fb"
                    >
                      <i className="fab fa-facebook"></i>
                      <span className="color2 f-sm ml-2">Facebook</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="mobile d-sm-none d-block">
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="color1 f-xl f-weight">Tickitz</h3>
            </div>
            <div className="col-12 mt-4 mb-4">
              <h4 className="c-black f-lg f-weight">Sign in</h4>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-12 form-group">
                <label htmlFor="form-email" className="f-md">
                  Email
                </label>
                <input
                  id="form-email"
                  type="email"
                  placeholder="Write your email"
                  required
                  className="form-control h-75 w-100 box"
                  onChange={(e) =>
                    setUsers({ ...users, email: e.target.value })
                  }
                  value={users.email}
                />
              </div>
              <div className="col-12 form-group mt-4">
                <label htmlFor="form-pass" className="f-md">
                  Password
                </label>
                <input
                  id="form-pass"
                  type="password"
                  placeholder="Write your password"
                  minLength="8"
                  required
                  className="form-control h-75 w-100 box"
                  onChange={(e) =>
                    setUsers({ ...users, password: e.target.value })
                  }
                  value={users.password}
                />
              </div>
              <div className="col-12 mt-5">
                <button type="submit" className="btn btn-input w-100">
                  Sign In
                </button>
              </div>
            </div>
          </form>
          <div className="row text-center">
            <div className="col-12 mt-5">
              <p>
                Forgot password?{" "}
                <Link className="line" to="/forgot">
                  Reset now
                </Link>
              </p>
            </div>
            <div className="col-12">
              <p className="f-sm color2">or</p>
            </div>
            <div className="col-12">
              <button onClick={btnGoogle} className="btn btn-shadow  mr-4">
                <i className="fab fa-google bg-google"></i>
              </button>
              <button onClick={btnFb} className="btn btn-shadow bg-fb">
                <i className="fab fa-facebook"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;

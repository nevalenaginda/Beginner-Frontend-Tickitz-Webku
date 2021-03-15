import React from "react";
import { ProgressBar } from "react-bootstrap/";
import "./assets/StyleProfile.css";
import CustomNavBar from "../../../components/NavBar";
import CustomFooter from "../../../components/Footer";
import ProfileImage from "./assets/img/profile_image.png";

export default function index() {
  return (
    <>
      <CustomNavBar />
      <div className="container-fluid">
        <div className="row pt-5 pb-5 bg4">
          <div className="col-md-4 mt-5">
            <div className="card mt-5">
              <div className="card-header mt-3 bg3">
                <div className="col-12 mb-5 d-flex col-profile  align-items-center  justify-content-between">
                  <span className="f-md color7">INFO</span>
                  <span className="f-weight f-xl color1">...</span>
                </div>
                <div className="col-12 text-center">
                  <img src={ProfileImage} alt="profile" />
                </div>
                <div className="col-12 text-center f-lg f-weight color6">
                  Jonas El Rodriguez
                </div>
                <div className="col-12 mb-3 text-center f-sm color7">
                  Moviegoers
                </div>
              </div>
              <div className="card-footer pt-4 bg3">
                <div className="col-12 f-md color7 mb-4">Loyalty Points</div>
                <div clasName="col-12 ">
                  <div className="border-points d-flex flex-column align-items-start bg1 color4 font-weight">
                    <h6 className="mb-auto p2">Moviegoers</h6>
                    <h6 className="p2 ">
                      <span className="f-lg">320 </span>
                      <span className="f-md">points</span>
                    </h6>
                  </div>
                </div>
                <div className="col-12 f-md color7 mt-5 text-center">
                  180 points become a master
                </div>
                <div className="col-12 mt-2 mb-4">
                  <ProgressBar className="color1" now={64} />
                </div>
              </div>
            </div>
          </div>
          {/* Personal Profile Data */}
          <div className="col-md-8 mt-5">
            <div className="border-profile mt-5 bg-white">
              <div className="col-12 pt-4 d-flex flex-column">
                <h5>
                  <span className="mr-4 border-profile-active">
                    Account Setting
                  </span>
                  <span>Order History</span>{" "}
                </h5>
                <hr className="hr-color color-black w-100" />
              </div>
              <div className="col-12 pt-4 d-flex flex-column f-md">
                <h5>Details Information</h5>
                <hr className="hr-color color-black w-100" />
              </div>
              <div className="col-12 mt-3">
                <form>
                  <div className="form-row">
                    <div className="col">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>

                    <div className="col">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="form-row mt-3">
                    <div className="col">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>

                    <div className="col">
                      <label>Phone Number</label>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text bg-white">+62</div>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="inlineFormInputGroup"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-12 mt-5 d-flex flex-column f-md">
                <h5>Account and Privacy</h5>
                <hr className="hr-color color-black w-100" />
              </div>
              <div className="col-12 mt-3">
                <form>
                  <div className="form-row">
                    <div className="col">
                      <label>New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="New Password"
                      />
                    </div>

                    <div className="col">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-8 col-md-6 pb-5 mt-5 d-flex flex-column f-md">
                <a className="btn btn-input" href="/">
                  Update Change
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="bg-white mt-5">
        <CustomFooter />
      </div>
    </>
  );
}

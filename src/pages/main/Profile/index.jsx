import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap/";
import "./assets/StyleProfile.css";
import CustomNavBar from "../../../components/NavBar";
import CustomFooter from "../../../components/Footer";
import ProfileImage from "./assets/img/profile_image.png";
import alertCustom from "../../../components/Alerts";

export default function Profile() {
  const [dataUser, setDatauser] = useState({});
  const id_user = localStorage.getItem("id");
  const { REACT_APP_API_TICKET } = process.env;
  const getDataUser = () => {
    axios
      .get(`${REACT_APP_API_TICKET}user/${id_user}`)
      .then((response) => {
        setDatauser(response.data.data[0]);
        console.log(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getDataUser();
  }, []);

  const updateDataUser = (e) => {
    const dataBaru = {
      full_name: dataUser.first_name + " " + dataUser.last_name,
      first_name: dataUser.first_name,
      last_name: dataUser.last_name,
      email: dataUser.email,
      phone_number: dataUser.phone_number,
    };
    axios
      .patch(REACT_APP_API_TICKET + "user/" + id_user, dataBaru)
      .then((res) => {
        alertCustom("success", res.data.message);
        // get ulang
        getDataUser();
      })
      .catch((err) => {
        alertCustom("error", err.response.data.message);
      });
  };

  return (
    <>
      <CustomNavBar login={localStorage.getItem("token")} />
      <div className="container-fluid">
        <div className="col-12 d-flex d-sm-none d-lg-none d-xl-none">
          <h5 className="pt-5 mt-5 f-md">
            <span className="mr-4 border-profile-active">Details Account</span>
            <span>Order History</span>
          </h5>
        </div>
        <div className="row  justify-content-center pt-0 pt-sm-5 pt-md-5 pb-5 bg4">
          <div className="col-12 col-sm-10 col-md-4 mt-5">
            <div className="card mt-sm-0 mt-md-5">
              <div className="card-header mt-3 bg3">
                <div className="col-12 mb-5 d-flex col-profile  align-items-center  justify-content-between">
                  <span className="f-md color7">INFO</span>
                  <span className="f-weight f-xl color1">...</span>
                </div>
                <div className="col-12 text-center">
                  <img className="img-fluid" src={ProfileImage} alt="profile" />
                </div>
                <div className="col-12 text-center f-lg f-weight color6">
                  {dataUser.full_name}
                </div>
                <div className="col-12 mb-3 text-center f-sm color7">
                  Moviegoers
                </div>
              </div>
              <div className="card-footer pt-4 bg3">
                <div className="col-12 f-md color7 mb-4">Loyalty Points</div>
                <div clasName="row d-flex justify-content-centerr ">
                  <div className="col-6 col-sm-6 col-lg-6 border-points color4 font-weight d-flex align-items-start flex-column">
                    <h6 className="mb-auto mt-4 p2">Moviegoers</h6>
                    <h6 className="p2 pb-3">
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
          <div className="col-12 col-sm-10 col-md-7 mt-5">
            <div className="border-profile mt-5 bg-white  ">
              <div className=" col-12 pt-4 d-none d-sm-flex flex-column ">
                <h5 className=" f-md">
                  <span className="mr-4 border-profile-active">
                    Account settings
                  </span>
                  <span>Order History</span>
                </h5>
                <hr className="hr-color color-black w-100" />
              </div>
              <div className="col-12 pt-4 d-flex flex-column ">
                <div clasName="f-md">Details Information</div>
                <hr className="hr-color color-black w-100" />
              </div>
              <div className="web col-12 mt-3">
                <form className="web d-none d-sm-block">
                  <div className=" form-row ">
                    <div className="col">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        onChange={(e) =>
                          setDatauser({
                            ...dataUser,
                            first_name: e.target.value,
                          })
                        }
                        value={dataUser.first_name}
                      />
                    </div>

                    <div className="col">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        onChange={(e) =>
                          setDatauser({
                            ...dataUser,
                            last_name: e.target.value,
                          })
                        }
                        value={dataUser.last_name}
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
                        onChange={(e) =>
                          setDatauser({
                            ...dataUser,
                            email: e.target.value,
                          })
                        }
                        value={dataUser.email}
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
                          onChange={(e) =>
                            setDatauser({
                              ...dataUser,
                              phone_number: e.target.value,
                            })
                          }
                          value={dataUser.phone_number}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="mobile col-12 mt-3">
                <form className="d-block d-sm-none">
                  <div className=" form-row ">
                    <div className="col">
                      <label>Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        onChange={(e) =>
                          setDatauser({
                            ...dataUser,
                            full_name: e.target.value,
                          })
                        }
                        value={dataUser.full_name}
                      />
                    </div>
                  </div>
                  <div className="form-row mt-3">
                    <div className="col-sm-6">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={(e) =>
                          setDatauser({
                            ...dataUser,
                            email: e.target.value,
                          })
                        }
                        value={dataUser.email}
                      />
                    </div>

                    <div className="col-sm-6 mt-3">
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
                          onChange={(e) =>
                            setDatauser({
                              ...dataUser,
                              phone_number: e.target.value,
                            })
                          }
                          value={dataUser.phone_number}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-12 mt-5 d-flex flex-column f-md">
                <div clasName="f-md">Account and Privacy</div>
                <hr className="hr-color color-black w-100" />
              </div>
              <div className="web col-12 mt-3">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-sm-6 mb-3">
                      <label>New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="New Password"
                      />
                    </div>

                    <div className="col-12 col-sm-6 mt-0">
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
              <div className="col-12 col-md-6 pb-5 mt-5 d-flex flex-column f-md">
                <button
                  className="btn btn-input"
                  onClick={(e) => updateDataUser(e)}
                >
                  Update Change
                </button>
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

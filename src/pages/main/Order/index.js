import React, { Component } from "react";
import CustomFooter from "../../../components/Footer";
import CustomNavBar from "../../../components/NavBar";
import "./assets/styleOrder.css";

export class Order extends Component {
  render() {
    return (
      <div>
        <div className="fixed-top">
          <CustomNavBar />
        </div>
        <div className="row  bg4">
          <div className="col-12 col-md-7 col-lg-7 pt-5">
            <div className="col-12 pt-5 font2-rs mx-lg-2">Payment Info</div>
            <div className="col-12 pt-5order-card-payment-info">
              <p className="float-left font1-rs mx-lg-2">Date & Time</p>
              <p className="float-right font1-rs mx-lg-2">
                Tuesday, 07 July 2020 at 02:00pm
              </p>
            </div>
          </div>
        </div>

        <div className="fixed mt-3 mt-md-5 mt-lg-5">
          <CustomFooter />
        </div>
      </div>
    );
  }
}

export default Order;

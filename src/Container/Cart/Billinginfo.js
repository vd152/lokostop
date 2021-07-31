import "./Billinginfo.css";
import StateDropdown from "./StateDropdown";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {saveOrderDetails} from '../../Redux/Actions/OrderActions'
class Billinginfo extends Component {
  state = {
    data: {
      Address: [
        {
          AddressLine1: "",
          AddressLine2: "",
          Country: "",
          State: "",
          City: "",
          Pin: "",
        },
      ],
    },
    selected: -1,
    selectedAddress: {
      AddressLine1: "",
      AddressLine2: "",
      Country: "",
      State: "",
      City: "",
      Pin: "",
    },
    Receiver: {
      FullName: "",
      Phone: "",
      Email: "",
    },
  };
  componentDidMount() {
    let address = this.props.user.Address ? this.props.user.Address : [];
    if (address.length == 0) {
      address = this.state.data.Address;
    }
    this.setState({ data: { ...this.props.user, Address: address } });
  }
  setAddress = (key, value) => {
    const { selectedAddress } = this.state;
    selectedAddress[key] = value;
    this.setState({ selectedAddress, selected: -2 });
  };
  render() {
    return (
      <React.Fragment>
        <div className="billinginfobox">
          <div className="total_head_no">
            <p>02.</p>
            <p>BILLING INFORMATION</p>
          </div>
          <div className="details_billing">
            <div className="detail_add_billing">
              <div className="first_bill_box">
                <p className="head_bill_reciever">Receiver details</p>
                <input
                  className="input_box"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  className="input_box"
                  type="text"
                  placeholder="Phone Number"
                />
                <input
                  className="input_box"
                  type="text"
                  placeholder="Email Address"
                />
                <p className="check_box">
                  <label className="containerCheck">
                    I want to get offers in my mail
                    <input type="checkbox"></input>
                    <span className="checkMark"></span>
                  </label>
                </p>
                <p className="check_box">
                  <label className="containerCheck">
                    Save this information for future
                    <input type="checkbox"></input>
                    <span className="checkMark"></span>
                  </label>
                </p>
              </div>
              <div className="second_bill_box">
                <p className="head_bill_reciever">Receiver address</p>
                <div className="insidebox_secondbill">
                  <input
                    className="second_input_box"
                    type="text"
                    name="AddressLine1"
                    placeholder="Address (First Line)"
                    value={this.state.selectedAddress.AddressLine1}
                    onChange={(e) => {
                      this.setAddress(e.target.name, e.target.value);
                    }}
                  />
                  <input
                    className="second_input_box"
                    type="text"
                    placeholder="Address (SecondLine)"
                    name="AddressLine2"
                    value={this.state.selectedAddress.AddressLine2}
                    onChange={(e) => {
                      this.setAddress(e.target.name, e.target.value);
                    }}
                  />
                </div>
                <div className="insidebox_secondbill">
                  <input
                    className="second_input_box"
                    type="text"
                    name="City"
                    placeholder="City"
                    value={this.state.selectedAddress.City}
                    onChange={(e) => {
                      this.setAddress(e.target.name, e.target.value);
                    }}
                  />
                  <input
                    className="second_input_box"
                    type="text"
                    placeholder="state"
                    name="State"
                    value={this.state.selectedAddress.State}
                    onChange={(e) => {
                      this.setAddress(e.target.name, e.target.value);
                    }}
                  />
                  {/* <StateDropdown /> */}
                </div>
                <div className="insidebox_secondbill">
                  <input
                    className="second_input_box"
                    type="text"
                    name="Country"
                    placeholder="Country"
                    value={this.state.selectedAddress.Country}
                    onChange={(e) => {
                      this.setAddress(e.target.name, e.target.value);
                    }}
                  />
                  <input
                    className="second_input_box"
                    type="text"
                    placeholder="Pin"
                    name="Pin"
                    value={this.state.selectedAddress.Pin}
                    onChange={(e) => {
                      this.setAddress(e.target.name, e.target.value);
                    }}
                  />
                </div>
                {/* <p className="check_box">
                                <label className="containerCheck">
                                Set this as my default address
                                <input type="checkbox"></input>
                                <span className="checkMark"></span>
                                </label>
                            </p> */}
                <hr id="bill_line" className="w-100 mt-1" />
                <p className="head_bill_reciever">Or choose one from below</p>
                {this.state.data.Address.map((address, key) => {
                  return (
                    <div className="form-check" key={key}>
                      <input
                        className="form-check-input colorradio"
                        type="radio"
                        name="flexRadioDefault"
                        id={"flexRadioDefault1" + key}
                        checked={this.state.selected == key ? true : false}
                        onChange={(e) => {
                          this.setState({
                            selectedAddress: address,
                            selected: key,
                          });
                        }}
                      />
                      <label
                        className="form-check-label fontP"
                        htmlFor={"flexRadioDefault1" + key}
                      >
                        {address.AddressLine1 +
                          ", " +
                          address.AddressLine2 +
                          ", " +
                          address.City +
                          ", " +
                          address.State +
                          ", " +
                          address.Country +
                          "- " +
                          address.Pin}
                      </label>
                    </div>
                  );
                })}
                <div className="finaladdress mt-3">
                  {this.state.selected == -1 ? (
                    <p>Your address will be shown here..</p>
                  ) : (
                    <React.Fragment>
                      <p>{this.state.selectedAddress.AddressLine1}</p>
                      <p>{this.state.selectedAddress.AddressLine2}</p>
                      <p>
                        {this.state.selectedAddress.City},{" "}
                        {this.state.selectedAddress.State},{" "}
                        {this.state.selectedAddress.Country}
                      </p>
                      <p>{this.state.selectedAddress.Pin}</p>
                    </React.Fragment>
                  )}
                </div>
                <button className="save_cont_billing">Save</button>
              </div>
              <div className="third_bill_box">
                <div className="cart_thirdbox_end">
                  <div className="billing_third">
                    <div className="inside_box_third">
                      <p className="para1_insidethird">Subtotal</p>
                      <p className="para2_insidethird">Rs. 44,989.00</p>
                    </div>
                    <div className="inside_box_third">
                      <p className="para1_insidethird">Shipping Cost</p>
                      <p className="para2_insidethird">Rs. 200.00</p>
                    </div>
                    <div className="inside_box_third">
                      <p className="para1_insidethird">Transportation Cost</p>
                      <p className="para2_insidethird">Rs. 100.00</p>
                    </div>
                    <div className="inside_box_third">
                      <p className="para1_insidethird">Your Savings</p>
                      <p
                        className="para2_insidethird"
                        style={{ color: "#08E5A9" }}
                      >
                        Rs. MRP-Our price
                      </p>
                    </div>
                  </div>
                  <div className="billing_third">
                    <div className="discountbox">
                      <input
                        type="text"
                        className="discountcode"
                        placeholder="Discount Code"
                      />
                      <p className="applycode">Apply</p>
                    </div>
                    <div className="inside_box_third">
                      <p className="para1_insidethird">Discount</p>
                      <p className="para2_insidethird">Rs. 0</p>
                    </div>
                  </div>
                </div>
                <hr id="bill_line" />
                <div className="inside_box_third">
                  <p
                    className="para1_insidethird"
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    GRAND TOTAL
                  </p>
                  <p
                    className="para2_insidethird"
                    style={{ fontWeight: "bold" }}
                  >
                    Rs. 45,289.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons_cart_continue">
          <button className="button_blog_one"> Continue Shopping</button>
          <Link to="/payment">
            <button className="button_blog_two">Proceed to Payment</button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.getUser.user,
    userLoading: state.getUser.loading,
    savedOrder: state.saveOrder.orderDetails
  };
};
export default connect(mapStateToProps, { saveOrderDetails })(Billinginfo);

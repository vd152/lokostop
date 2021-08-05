import React, { Component } from "react";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import Header01 from "../Component/Header/Header01";
import "./paymentCart.css";
import "./PaymentNet.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NetBank from "./NetBank";
import Wallet from "./Wallet";
import Loader from "../Loader/Loader";
import { connect } from "react-redux";
import { getFeatures } from "../../Redux/Actions/StorefrontActions";

class paymentCart extends Component {
  state = {
    paymentMethods:{
      CashonDelivery:{}
    }
  }
  componentDidMount() {
    this.props.getFeatures();
    this.setState({paymentMethods: this.props.settings.PaymentMethods})
  }
  render() {
    if (this.props.featuresLoading || this.props.settingsLoading) {
      return <Loader />;
    } else
      return (
        <div>
          <Header01 />
          <Header />
          <div className="Heading_about">
            <p>PAYMENT</p>
            <hr />
          </div>
          <Link to="/cart">
            <div className="goblog">
              <IoIosArrowBack id="blog_icon" />
              <p>Back to cart</p>
            </div>
          </Link>
          <div className="outerpaymentbox">
            <div className="firstpaybox">
              <div className="total_head_no">
                <p>03.</p>
                <p>PAYMENT METHOD</p>
              </div>
              <div className="insidepay">
                <div
                  className="d-flex align-items-start"
                  style={{ width: "100%" }}
                >
                  <div
                    className="nav flex-column nav-pills me-3 nav1new"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active payment_css"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      CREDIT CARD
                    </button>
                    <button
                      className="nav-link payment_css"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      DEBIT CARD
                    </button>
                    <button
                      className="nav-link payment_css"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      NET BANKING
                    </button>
                    <button
                      className="nav-link payment_css"
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-settings"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      WALLET/UPI
                    </button>
                    {this.state.paymentMethods.CashonDelivery.Status && 
                    <button
                      className="nav-link payment_css"
                      id="v-pills-cash-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-cash"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-cash"
                      aria-selected="false"
                    >
                      {this.state.paymentMethods.CashonDelivery.Label}
                    </button>
  }
                  </div>
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <CreditCard />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <DebitCard />
                    </div>
                    <div
                      style={{ width: "34vw" }}
                      className="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <NetBank />
                    </div>
                    <div
                      style={{ width: "34vw" }}
                      className="tab-pane fade"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <Wallet />
                    </div>
                    {this.state.paymentMethods.CashonDelivery.Status && 
                    <div
                      style={{ width: "34vw" }}
                      className="tab-pane fade"
                      id="v-pills-cash"
                      role="tabpanel"
                      aria-labelledby="v-pills-cash-tab"
                    >
                      <div className="boxdetail">
                        <div className="netboxmain">
                          <p className="netbanking text-center py-2">{this.state.paymentMethods.CashonDelivery.Description}</p>
                        </div>
                        <button className="paynow">BUY NOW</button>
                      </div>
                    </div>
  }
                  </div>
                </div>
              </div>
            </div>
            <div className="secondpaybox">
              <div className="secondpay_1box">
                <p className="para1_pay">ABCDEF</p>
                <span className="small_screen_text payline">|</span>
                <hr id="payline large_screen_text" />
                <div className="paymntbox_card">
                  <p>PAYMENT OF</p>
                  <p>
                    <b>Rs. 45,289.00</b>
                  </p>
                </div>
              </div>
              {this.props.allFeatures.Features &&
              this.props.allFeatures.Features.SectionStatus ? (
                <div className="Free_box d-block m-0 w-100">
                  {this.props.allFeatures.Features.Features.filter(
                    (feature) => {
                      if (
                        feature.Icon != "" &&
                        feature.SubTitle != "" &&
                        feature.Title != ""
                      )
                        return true;
                      return false;
                    }
                  ).map((feature, key) => {
                    return (
                      <div className="Free_Shipping" key={key}>
                        <i className={feature.Icon}></i>
                        <div className="shipping_text">
                          <p className="shipping_text1">{feature.Title}</p>
                          <p className="shipping_text2">{feature.SubTitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <Footer />
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    featuresLoading: state.getFeatures.loading,
    allFeatures: state.getFeatures.features,
    settings: state.getSettings.settings,
    settingsLoading: state.getSettings.loading,
  };
};
export default connect(mapStateToProps, { getFeatures })(paymentCart);

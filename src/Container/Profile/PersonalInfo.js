import React, { Component } from "react";
import "./PersonalInfo.css";
import { connect } from "react-redux";
class PersonalInfo extends Component {
  state = {
    disabled: true,
    data: {
        "First Name": "",
        "Last Name": "",
        Email: ""
    }
  };

  handleGameClik() {
    this.setState({ disabled: !this.state.disabled });
  }
  componentDidMount(){
      this.setState({data: this.props.user})
  }
  render() {
    return (
      <div>
        <div className="headingPersonalEdit">
          <p className="headPersonal">Personal Information</p>
          <p className="headedit" onClick={this.handleGameClik.bind(this)}>
            Edit
          </p>
        </div>
        <div className="profilepersonalImg">
          <img
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Reload"
          />
        </div>
        <div className="inputboxpersonal">
          <div className="namefulllast">
            <input
              type="text"
              name="firstname"
              id="FirstName"
              value={this.state.data["First Name"]}
              className="personalInput"
              disabled={this.state.disabled ? "disabled" : ""}
            />
            <input
              type="text"
              name="Lastname"
              id="LastName"
              value={this.state.data["Last Name"]}
              className="personalInput"
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="personalInput"
            value={this.state.data["Email"]}
            disabled={this.state.disabled ? "disabled" : ""}
          />
          <div className="namefulllast">
            <input
              type="text"
              name="countryCode"
              id="countryCode"
              placeholder="+91"
              className="personalInput"
              disabled={this.state.disabled ? "disabled" : ""}
            />
            <input
              type="text"
              name="phoneNo"
              id="phoneNo"
              placeholder="0123456789"
              className="personalInput"
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>
        </div>
        <p className="lastLinepersonal">
          ** All this information will not be shared with anyone. We believe in
          privacy and it shall be given to all our customers.**
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.getUser.user,
  };
};
export default connect(mapStateToProps)(PersonalInfo);

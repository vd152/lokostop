import React, { Component } from "react";
import { connect } from "react-redux";
import "./Login.css";
import { loginUser, registerUser } from "../../../../Redux/Actions/UserActions";
class Login extends Component {
  state = {
    data: {
      Email: "",
      Password: "",
    },
    user: {
      "First Name": "",
      "Last Name": "",
      "Email": "",
      "Password": "",
      "Confirm": "",
      Roles:[],
      Permissions:[],
    }
  };
  setData = (key, val) => {
    const { data } = this.state;
    data[key] = val;
    this.setState({ data });
  };
  setUser = (key, val) => {
    const { user } = this.state;
    user[key] = val;
    this.setState({ user });
  };
  signIn = () => {
    this.props.loginUser(this.state.data.Email, this.state.data.Password);
    document.querySelector("#staticBackdrop").click();
  };
  signUp = () =>{
    this.props.registerUser(this.state.user);
    document.querySelector("#staticBackdrop").click();
  }
  render() {
    return (
      <div>
        <div
          className="imagevl"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Login
        </div>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title logoval" id="staticBackdropLabel">
                  Lokostop
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <p className="promiseword">
                We promise products from best brands with assurance.
              </p>
              <div className="modal-body modalPadding">
                <ul
                  className="nav nav-pills mb-3 signval"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item " role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Sign In
                    </button>
                  </li>
                  <li className="nav-item " role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Sign Up
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div>
                      <input
                        className="signinput"
                        name="Email"
                        type="text"
                        placeholder="Email-address"
                        value={this.state.data.Email}
                        onChange={(e) =>
                          this.setData(e.target.name, e.target.value)
                        }
                      />
                      <input
                        className="signinput"
                        name="Password"
                        type="password"
                        placeholder="Password"
                        value={this.state.data.Password}
                        onChange={(e) =>
                          this.setData(e.target.name, e.target.value)
                        }
                      />
                      <button className="forgotbutton">forgot password?</button>
                      <button
                        className="signButton"
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          this.signIn();
                        }}
                      >
                        SIGN - IN
                      </button>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div>
                      <input
                        className="signinput"
                        type="text"
                        name="First Name"
                        placeholder="First Name"
                        value={this.state.user["First Name"]}
                        onChange={(e) =>{
                          this.setUser(e.target.name, e.target.value)
                        }}
                      />
                      <input
                        className="signinput"
                        type="text"
                        name="Last Name"
                        placeholder="Last Name"
                        value={this.state.user["Last Name"]}
                        onChange={(e) =>{
                          this.setUser(e.target.name, e.target.value)
                        }}
                      />
                      <input
                        className="signinput"
                        type="email"
                        placeholder="Email-address"
                        name="Email"
                        value={this.state.user.Email}
                        onChange={(e) =>{
                          this.setUser(e.target.name, e.target.value)
                        }}
                      />
                      <input
                        className="signinput"
                        type="text"
                        name="Password"
                        placeholder="Enter Password"
                        value={this.state.user.Password}
                        onChange={(e) =>{
                          this.setUser(e.target.name, e.target.value)
                        }}
                      />
                      <input
                        className="signinput"
                        type="text"
                        name="Confirm"
                        value={this.state.user.Confirm}
                        placeholder="Re-enter password"
                        onChange={(e) =>{
                          this.setUser(e.target.name, e.target.value)
                        }}
                      />
                      <button className="signButton" onClick={(e) => {
                          e.preventDefault();
                          this.signUp();
                        }}>SIGN - UP</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer googleface">
                <p className="orWord">OR</p>
                <button type="button" className="btn signgoogle">
                  Sign in with google
                </button>
                <button type="button" className="btn signface">
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.loginUser.user,
  };
};
export default connect(mapStateToProps, { loginUser, registerUser })(Login);

import React, { Component } from "react";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import Header01 from "../Component/Header/Header01";
import "./sendQuery.css";
import "../../Apis/api";
class sendQuery extends Component {
  state = {
    data: {
      Body: "",
      Subject: "",
      Country: "",
      OrderId: null,
      Email: "",
      FullName: "",
    },
  };
  setData = (key, val) => {
    const { data } = this.state;
    data[key] = val;
    this.setState({ data });
  };
  handleSubmit = () => {};
  render() {
    return (
      <div>
        <Header01></Header01>
        <Header></Header>
        <div className="Heading_about">
          <p>ASK HERE</p>
          <hr />
        </div>
        <div className="sendquerybox">
          <p className="sendtext">
            Loving our products or have a question to ask , write to us and we
            will revert in less than 24 hours. We accept all kinds of questions
            and customer reviews.You can also write a mail to the given email
            addresses separately.
          </p>
          <form className="formval">
            <p className="sendtext1">Fill in the details</p>
            <input
              type="text"
              className="sendinput"
              name="FullName"
              placeholder="Full Name"
              value={this.state.data.FullName}
              onChange={(e) => {
                this.setData(e.target.name, e.target.value);
              }}
            ></input>
            <input
              type="text"
              className="sendinput"
              placeholder="Email"
              name="Email"
              value={this.state.data.Email}
              onChange={(e) => {
                this.setData(e.target.name, e.target.value);
              }}
            ></input>
            <input
              type="text"
              className="sendinput"
              placeholder="Country"
              name="Country"
              value={this.state.data.Country}
              onChange={(e) => {
                this.setData(e.target.name, e.target.value);
              }}
            ></input>
            <input
              type="text"
              className="sendinput"
              placeholder="Subject"
              name="Subject"
              value={this.state.data.Subject}
              onChange={(e) => {
                this.setData(e.target.name, e.target.value);
              }}
            ></input>
            <textarea
              className="textarea"
              maxLength="200"
              rows="10"
              name="Body"
              value={this.state.data.Body}
              onChange={(e) => {
                this.setData(e.target.name, e.target.value);
              }}
              placeholder="Write your query here"
            ></textarea>
            <button
              className="sendquery"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Send
            </button>
          </form>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default sendQuery;

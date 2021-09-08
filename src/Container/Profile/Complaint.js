import React, { Component } from "react";
import ComplaintPop from "./ComplaintPop";

class Complaint extends Component {
  state = {
    view: false,
  };
  render() {
    return (
      <div>
        <p className="complaintshead" style={{ marginTop: "2%" }}>
          My Complaints
        </p>
        <div className="scroll_x_box">
          <div className="tble_box1complaint">
            <table className="col_names1">
              <tbody>
                <tr className="table_headingnew">
                  <td className="product_imagecomplaint">S.No</td>
                  <td className="product_Namecomplaint">
                    <span className="large_screen_text_425">
                      Complaint Heading
                    </span>
                    <span className="small_screen_text_425">Complaint</span>
                  </td>
                  <td className="product_availnewcomplaint">Complaint ID</td>
                  <td className="product_codenewcomplaint">Status</td>
                  <td className="product_pricenewcomplaint">Replied</td>
                </tr>
                <tr className="table_heading2">
                  <td className="product_image1complaint">1</td>
                  <td className="product_Name1complaint">
                    My LG washing machine is not working properly
                  </td>
                  <td className="product_avail1newcomplaint">8273791MG</td>
                  <td className="product_code1complaint">Sent</td>
                  <td className="product_price1newcomplaint">
                    <div className="save_box">
                      <select className="dropdown_colors1">
                        <option value="WH">Yes</option>
                        <option value="BL">No</option>
                      </select>
                    </div>
                  </td>
                  <td className="product_quantity1newcomplaint">
                    <button
                      style={{ outline: "none" }}
                      type="button"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={(e) => this.setState({ view: true })}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button
          style={{ outline: "none" }}
          type="button"
          className="btn complaintbutton"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={(e) => this.setState({ view: false })}
        >
          WRITE COMPLAINT
        </button>

        <ComplaintPop view={this.state.view} />
        <p className="mailId">Write to us at lokostop1@gmail.com</p>
      </div>
    );
  }
}

export default Complaint;

import "./Header02.css";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowForward, IoIosHeart } from "react-icons/io";
import Loader from '../../Loader/Loader'
import { Dropdown } from "react-bootstrap"

// function opennav() {
//     var x = document.getElementsByClassName("navvvvul");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

class Header02 extends Component {
  state = {
    menus: [],
  };
  setMenuLink = (item) => {
    if (item.type == "URL") {
      return item.url
    } else if (item.type == "Page") {
      return "/page/" + item.page.url
    } else if (item.type == "Category") {
      let url = "/category/" + item.category.url + "/" + item.category._id
      return url
    }
  }
  componentDidMount() {
    const { menus } = this.state;
    const setCategories = (root, key) => {
      if (root.childrenMenu.length == 0) {
        return (
          <li key={key}>
            <Link
              style={{
                background: "transparent",
                color: "#1D1D1D",
                display: "flex",
                justifyContent: "space-between",
              }}
              className={"dropdown-item"}
              to={this.setMenuLink(root)}
            >
              {root.name}
            </Link>
          </li>
        );
      } else
        return (
          <li key={key}>
            <Link
              style={{
                background: "transparent",
                color: "#1D1D1D",
                display: "flex",
                justifyContent: "space-between",
              }}
              className={"dropdown-item"}
              to={this.setMenuLink(root)}
            >
              {root.name}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <IoIosArrowForward className="ForwardArrow" />
            </Link>
            {root.childrenMenu.length > 0 ? (
              <ul className="dropdown-menu dropdown-submenu">
                {root.childrenMenu.map((child, key2) => {
                  return setCategories(child, key2);
                })}
              </ul>
            ) : (
              ""
            )}
          </li>
        );
    };
    this.props.menus.PrimaryMenu.menuItems.forEach((menu, key) => {
      let tempData = { content: [] };
      if (menu.childrenMenu.length > 0) {
        tempData.title = (
          <React.Fragment>
            <Link
              style={{
                background: "transparent",
                color: "#1D1D1D",
              }}
              to={this.setMenuLink(menu)}
            >
              {menu.name}
            </Link>
            <button
              style={{ fontWeight: "bold" }}
              className="btn  dropdown-toggle"
              type="button"
              id={"dropdownMenuButton" + key}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            </button>
          </React.Fragment>
        );
        menu.childrenMenu.forEach((menuItem, key) => {
          tempData.content.push(setCategories(menuItem, key));
        });
      } else {
        tempData.title = (
          <Link
            style={{
              background: "transparent",
              color: "#1D1D1D",
              display: "flex",
              justifyContent: "space-between",
            }}
            className={"dropdown-item"}
            to={this.setMenuLink(menu)}
          >
            {menu.name}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        );
      }
      // tempData.content = setCategories(menu);
      menus.push(tempData);
    });
    this.setState({ menus });
  }
  render() {
    if (
      this.props.menuLoading
    ) {
      return <Loader />;
    } else
      return (
        <div className="Header_two">
          {/* <input type="checkbox" id="check"></input>
                <button className="checkbtn" ><FiMenu /></button> */}

          <div className="logo">
            <img
              src={
                this.props.logos && this.props.logos.Logo
                  ? "https://api.lokostop.in/" +
                  this.props.logos.Logo.HeaderLogo.image
                  : ""
              }
              alt="Reload"
            />
          </div>
          <div className="navbar">
            <ul className="navvvvul">
              <Link to="/">
                <li className="navli">Home</li>
              </Link>
              {this.state.menus.map((menu, key) => {
                return (
                  <li className="navli" key={key}>
                    <div className="dropdown">
                      {menu.title}
                      <ul
                        className="dropdown-menu "
                        aria-labelledby="dropdownMenuButton1"
                      >
                        {menu.content}
                      </ul>
                    </div>
                  </li>
                );
              })}
              {/* <Link to='/aboutUs'><li className="navli">About us</li></Link> */}
              <Link to="/sendquery">
                <li className="navli">Send query</li>
              </Link>
              <Link to="/profile">
                <li className="navli">Complaint</li>
              </Link>
              <Link to="/blogs">
                <li className="navli">Blogs</li>
              </Link>
            </ul>
          </div>
          <div className="Navbar_hamburger">
            <Dropdown>
              <Dropdown.Toggle className="Dropdown_toggle_button" id="dropdown-basic">
                <FiMenu className="Hamburger_icon" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="Dropdown_items_link">
                  <Link to="/">
                    <li className="navli">Home</li>
                  </Link>
                </Dropdown.Item>
                {this.state.menus.map((menu, key) => {
                  return (
                    <Dropdown.Item className="Dropdown_items_link">
                      <li className="navli" key={key}>
                          <div className="dropdown">
                              {menu.title}
                              <ul
                                className="dropdown-menu "
                                aria-labelledby="dropdownMenuButton1"
                              >
                                {menu.content}
                              </ul>
                          </div>
                      </li> 
                    </Dropdown.Item>
                  );
                })}
                <Dropdown.Item className="Dropdown_items_link">
                  <Link to="/sendquery">
                    <li className="navli">Send query</li>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item className="Dropdown_items_link">
                  <Link to="/profile">
                    <li className="navli">Complaint</li>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item className="Dropdown_items_link">
                  <Link to="/blogs">
                    <li className="navli">Blogs</li>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="Header_two_part3">
            <div className="mobile_part">
              <p>+91-9898989898</p>
              <MdLocalPhone id="phone" />
            </div>
            <div className="email_part">
              <p>sidhuelectronics1@gmail.com</p>
              <MdEmail id="mail" />
            </div>
          </div>
        </div>
      );
  }
}
const mapStateToProps = (state) => {
  return {
    menus: state.getMenus.menus,
    menuLoading: state.getMenus.loading,
    logos: state.getLogos.logos,
  };
};
export default connect(mapStateToProps)(Header02);

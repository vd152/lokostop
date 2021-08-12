import "./Header2.css";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../Loader/Loader";
import Dropdown from "react-multilevel-dropdown";
import { IoIosArrowForward } from "react-icons/io";


class Header02 extends Component {
  state = {
    menus: [],
  };
  setMenuLink = (item) => {
    if (item.type == "URL") {
      return item.url;
    } else if (item.type == "Page") {
      return "/page/" + item.page.url;
    } else if (item.type == "Category") {
      let url =
        "/categories/" +
        item.category.name +
        "/" +
        item.category.url +
        "/" +
        item.category._id;
      return url;
    }
  };
  componentDidMount() {
    const { menus } = this.state;
    const setCategories = (root, key) => {
      if (root.childrenMenu.length == 0) {
        return (
          <Dropdown.Item key={root._id}>
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
          </Dropdown.Item>
        );
      } else
        return (
          <div key={root._id} className="d-flex ">
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
            </Link>


            <Dropdown.Item  >
          <IoIosArrowForward className="ForwardArrow" />

            {root.childrenMenu.length > 0 ? (
              <Dropdown.Submenu position={"right"}>
                {root.childrenMenu.map((child, key) => {
                  return setCategories(child)
                })}
             </Dropdown.Submenu>
            ) : (
              ""
            )}
          </Dropdown.Item>

          </div>
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
              className="nav-link "
              to={this.setMenuLink(menu)}
            >
              {menu.name}
            </Link>
            

            {/* <a
              className=" dropdown-toggle toggler"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            ></a> */}
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
            className="nav-link "
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
    if (this.props.menuLoading) {
      return <Loader />;
    } else
      return (
        <nav className="navbar navbar-expand-lg navbar-light  ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <div className="logo">
                <img
                  src={
                    this.props.logos && this.props.logos.Logo
                      ? "https://api.lokostop.in/" +
                        this.props.logos.Logo.HeaderLogo.image
                      : ""
                  }
                  height="40"
                  alt="Reload"
                />
              </div>
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-content"
            >
              <div className="hamburger-toggle">
                <div className="hamburger">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </button>
            <div className="collapse navbar-collapse " id="navbar-content">
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0 m-auto header2">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                {this.state.menus.map((menu, key) => {
                  return (
                      <li className="nav-item dropdown d-flex align-items-center" key={key}>
                        {menu.title}
                        {menu.content && 
                        <Dropdown className=" category-dropdownbutton browseCat" position="right" title="&#8595;" >
                          {menu.content}
                        </Dropdown>}
                      </li>
                  );
                })}
                <li className="nav-item">
                  <Link to="/sendquery" className="nav-link">
                    Send query
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    Complaint
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blogs" className="nav-link">
                    Blogs
                  </Link>
                </li>
              </ul>

              <div className="">
                <div className="mobile_part d-flex flex-row-reverse">
                  <p>+91-9898989898</p>
                  <MdLocalPhone id="phone" />
                </div>
                <div className="email_part d-flex flex-row-reverse">
                  <p>sidhuelectronics1@gmail.com</p>
                  <MdEmail id="mail" />
                </div>
              </div>
            </div>
          </div>
        </nav>
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

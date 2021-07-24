import "./Header01.css";
import { IoIosArrowForward, IoIosHeart } from "react-icons/io";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./Header03.css";
import { connect } from "react-redux";
import Login from "./Login/Login";

class Header01 extends Component {
  state = {
    categories: [],
    categories2: [],
    selectedCategory: {
      url: "",
      id: "",
      name: ""
  }
  };
  componentDidMount() {
    const { categories, categories2 } = this.state;
    const setCategories = (root) => {
      if (root.childrenCategory.length == 0) {
        return (
          <Link
            style={{
              background: "transparent",
              color: "#1D1D1D",
              display: "flex",
              justifyContent: "space-between",
            }}
            className={"dropdown-item"}
            to={"/category/" + root.url+"/"+root._id}
          >
            {root.name}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {root.childrenCategory.length > 0 ? (
              <IoIosArrowForward className="ForwardArrow" />
            ) : (
              ""
            )}
          </Link>
        );
      } else
        return (
          <React.Fragment>
            <Link
              style={{
                background: "transparent",
                color: "#1D1D1D",
                display: "flex",
                justifyContent: "space-between",
              }}
              className={"dropdown-item"}
              to={"/category/" + root.url+"/"+root._id}
            >
              {root.name}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <IoIosArrowForward className="ForwardArrow" />
            </Link>
            {root.childrenCategory.length > 0 ? (
              <ul className="dropdown-menu dropdown-submenu">
                {root.childrenCategory.map((child, key) => {
                  return <li key={key}>{setCategories(child)}</li>;
                })}
              </ul>
            ) : (
              ""
            )}
          </React.Fragment>
        );
    };
    const setCategories2 = (root) => {
      if (root.childrenCategory.length == 0) {
        return (
          <div
            style={{
              background: "transparent",
              color: "#1D1D1D",
              display: "flex",
              justifyContent: "space-between",
            }}
            className={"dropdown-item"}
            onClick={(e)=>{
                const {selectedCategory} = this.state
                selectedCategory.id = root._id
                selectedCategory.name = root.name
                selectedCategory.url = root.url
                this.setState({selectedCategory})
            }}
          >
            {root.name}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {root.childrenCategory.length > 0 ? (
              <IoIosArrowForward className="ForwardArrow" />
            ) : (
              ""
            )}
          </div>
        );
      } else
        return (
          <React.Fragment>
            <div
              style={{
                background: "transparent",
                color: "#1D1D1D",
                display: "flex",
                justifyContent: "space-between",
              }}
              className={"dropdown-item"}
              onClick={(e)=>{
                const {selectedCategory} = this.state
                selectedCategory.id = root._id
                selectedCategory.name = root.name
                selectedCategory.url = root.url
                this.setState({selectedCategory})
            }}
            >
              {root.name}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <IoIosArrowForward className="ForwardArrow" />
            </div>
            {root.childrenCategory.length > 0 ? (
              <ul className="dropdown-menu dropdown-submenu">
                {root.childrenCategory.map((child, key) => {
                  return <li key={key}>{setCategories2(child)}</li>;
                })}
              </ul>
            ) : (
              ""
            )}
          </React.Fragment>
        );
    };
    this.props.categories.forEach((category) => {
      let tempData = {};
      let tempData2 = {};
      tempData.content = setCategories(category);
      tempData2.content = setCategories2(category);
      categories.push(tempData);
      categories2.push(tempData2)
    });
    this.setState({ categories, categories2 });
  }
  render() {
    return (
      <div className="Header_one">
        <div className="Header_one_left">
          <div className="browseCat">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* <FiMenu id="MenuIcon" /> */}
              &nbsp;&nbsp; Browse categories
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {this.state.categories.map((category, key) => {
                return <li key={key}>{category.content}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="Header_one_centre">
          <div className="centre_first_part">
            <div className="dropdown">
              <button
                style={{ marginTop: "1.5%" }}
                className="btn  dropdown-toggle catdropdown"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {this.state.selectedCategory.name == ""? "All Categories": this.state.selectedCategory.name}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {this.state.categories2.map((category, key) => {
                  return <li key={key}>{category.content}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="centre_second_part">
            <div className="inputstyle">
            <input type="text" placeholder="Enter your search key..." />
            </div>
            
          </div>
          <div className="centre_third_part">
            <p style={{ marginTop: "0.878vw" }}>Search</p>
            <FiSearch id="search" />
          </div>
        </div>

        <div className="Header_one_right">
          <Link to={{pathname:"/profile", wishlistActive: true}}>
          <div className="Favorites"  style={{ color: "#1D1D1D" }}>
            <IoIosHeart id="Heart" />
            <span id="count">{this.props.wishlist.length}</span>
            <p>Favorites</p>
          </div>
          </Link>
          <Link to="/Cart">
            <div style={{ color: "#1D1D1D" }} className="cart">
              <FiShoppingCart id="Cart" />
              <span id="count"></span>
              <p>Cart</p>
            </div>
          </Link>
          {this.props.user._id ? (
            <Link to="/profile">
            <div className="image_user"><img
            alt="Reload"
            className="image_userimage"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          ></img></div>
          </Link>
          ) : (        
            <Login />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.getCategories.categories,
    user: state.getUser.user,
    wishlist: state.userWishlist.wishlist
  };
};
export default connect(mapStateToProps)(Header01);

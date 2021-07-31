import "./Header01.css";
import { IoIosArrowForward, IoIosHeart } from "react-icons/io";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link, Redirect } from "react-router-dom";
import React, { Component } from "react";
import "./Header03.css";
import { connect } from "react-redux";
import Login from "./Login/Login";
import Search from "./Search";

class Header01 extends Component {
  state = {
    categories: [],

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
            to={"/categories/" + root.url + "/" + root._id}
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
              to={"/categories/" + root.url + "/" + root._id}
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

    this.props.categories.forEach((category) => {
      let tempData = {};
      tempData.content = setCategories(category);
      categories.push(tempData);
    });
    this.setState({ categories });
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
              &nbsp;&nbsp; <span className="large_screen_text">Browse categories</span>
              <span className="small_screen_text">Browse</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {this.state.categories.map((category, key) => {
                return <li key={key}>{category.content}</li>;
              })}
            </ul>
          </div>
        </div>

              <Search />
        <div className="Header_one_right">
          {this.props.user._id && <React.Fragment>
            <Link to={{ pathname: "/profile", wishlistActive: true }}>
            <div className="Favorites" style={{ color: "#1D1D1D" }}>
              <IoIosHeart id="Heart" />
              <span id="count">{this.props.wishlist.length}</span>
              <p><span className="large_screen_text">Favorites</span></p>
            </div>
          </Link>
          <Link to="/cart">
            <div style={{ color: "#1D1D1D" }} className="cart">
              <FiShoppingCart id="Cart" />
              <span id="count">{this.props.cart.length}</span>
              <p><span className="large_screen_text">Cart</span></p>
            </div>
          </Link>
          </React.Fragment>}
         
          {this.props.user._id ? (
            <Link to="/profile">
              <div className="image_user">
                <img
                  alt="Reload"
                  className="image_userimage"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                ></img>
              </div>
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
    wishlist: state.userWishlist.wishlist,
    cart: state.userCart.cart,
  };
};
export default connect(mapStateToProps)(Header01);

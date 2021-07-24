import { FaRegHeart } from "react-icons/fa";
import { BiGitCompare, BiCart } from "react-icons/bi";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addToWishlist } from "../../Redux/Actions/WishlistActions";
import { connect } from "react-redux";

class Product extends Component {
  state = {
    product: {
      price: 1000,
      specialPrice: 900,
      categories: [],
      name: "Product ABC",
      shortDescription: "This is a nice product",
    },
  };
  componentDidMount() {
    if (this.props.product) this.setState({ product: this.props.product });
  }
  addToWishlist = () => {
      this.props.addToWishlist(this.state.product._id)
  };
  render() {
    return (
      <div className="product_details_list">
        <Link to="product/123">
          {" "}
          <div className="image_box">
            {this.state.product.baseImage ? (
              <img
                src={
                  "https://api.lokostop.in/" +
                  this.state.product.baseImage.image
                }
                alt="RELOAD"
              />
            ) : (
              <img src="https://via.placeholder.com/200" alt="RELOAD" />
            )}

            {this.state.product.specialPrice != null &&
            this.state.product.specialPrice &&
            this.state.product.specialPriceType == "Percent" ? (
              <p className="discount">{this.state.product.specialPrice}%off</p>
            ) : (
              ""
            )}
            {this.state.product.specialPrice != null &&
            this.state.product.specialPrice &&
            this.state.product.specialPriceType == "Fixed" ? (
              <p className="discount">
                {Math.trunc(
                  ((this.state.product.price -
                    this.state.product.specialPrice) /
                    this.state.product.price) *
                    100
                )}
                %off
              </p>
            ) : (
              ""
            )}
          </div>
        </Link>
        <div className="add_to_cart_box">
          <div id="div_first" className="add_to_cart_inner_box">
            <BiGitCompare className="Compare_Icon" />
            <div className="add_to_cart_text_icon">
              <p style={{ marginTop: "0.439vw" }}>ADD TO CART</p>
              <BiCart className="Bicartnew" />
            </div>
            <FaRegHeart
              className="Fav_icon"
              style={{ color: "#9d9d9d" }}
              onClick={(e) => {
                e.preventDefault();
                this.addToWishlist()
              }}
            />
          </div>
        </div>
        <div className="product_details">
          {this.props.category
            ? this.state.product.categories.map((category, key) => {
                return (
                  <Link
                    key={key}
                    to={"/category/" + category.url + "/" + category._id}
                  >
                    <p className="category_name_product">{category.name}</p>{" "}
                  </Link>
                );
              })
            : ""}

          <Link to="product/123">
            <p className="name_details_each_product">
              {this.state.product.name}
              <br />
              {this.state.product.shortDescription}
            </p>
            <div className="price_of_product">
              {this.state.product.specialPrice != null &&
              this.state.product.specialPrice ? (
                <React.Fragment>
                  <p className="para_price_one">₹ {this.state.product.price}</p>
                  <p className="para_price_two">
                    ₹ {this.state.product.specialPrice}
                  </p>
                </React.Fragment>
              ) : (
                <p className="para_price_two">₹ {this.state.product.price}</p>
              )}
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    wishlist: state.userWishlist.wishlist,
  };
};
export default connect(mapStateToProps, { addToWishlist })(Product);

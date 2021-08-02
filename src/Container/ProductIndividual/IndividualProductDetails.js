import { BiCart } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getFeatures } from "../../Redux/Actions/StorefrontActions";

class IndividualProductDetails extends Component {
  state = {
    productId: this.props.productDetails._id,
    qty: 0,
    footerDetails: {
      Footer: {
        AcceptedPaymentMethodsImage: "",
      },
    }
  }
  componentDidMount() {
    this.props.getFeatures();
    this.setState({
      footerDetails: this.props.footerData.Footer
        ? this.props.footerData
        : this.state.footerDetails,
    });
  }
  getOption = (type, label, required, values, unique) =>{
    if(type == "Field"){
      return (
        <div className="save_box individual_save_box" key={unique}>
                <p className="color_text individual_color_text"> {label}: {required && "*"}</p>
                <input className="product-qty individual_product-qty" type="text" />
              </div>
      )
    }else if(type == "Textarea"){
     return (
<div className="save_box individual_save_box" key={unique}>
      <p className="color_text individual_color_text"> {label}: {required && "*"}</p>
      <textarea className="product-qty individual_product-qty" type="text" row="3"></textarea>
    </div>
     ) 
    }else if(type == "Dropdown"){
      return (
        <div className="save_box individual_save_box" key={unique}>
                <p className="color_text individual_color_text"> {label}: {required && "*"}</p>
                <select className="dropdown_colors individual_dropdown_colors">
                  {values.map((value,key)=>{
                    return <option value={value.label} key={key}>{value.label}</option>
                  })}
                </select>
              </div>
      )
    }else if(type == "Checkbox"){

    }else if(type == "Custom Checkbox"){
      
    }else if(type == "Radio Button"){

    }else if(type == "Custom Radio Button"){

    }else if(type == "Multiple Select"){

    }else if(type == "Date"){

    }else if(type == "Date Time"){

    }else if(type == "Time"){

    }
  }
  render() {
    return (
      <div>
        <div className="Heading_about">
          <p>PRODUCT DETAILS</p>
          <hr />
        </div>
        <div className="individualproduct_detail_outer_box">
          {this.props.productDetails.additionalImages && this.props.productDetails.additionalImages.length > 0 ?
            <div className="similar_product_images">
              <IoIosArrowUp id="upIconNew" />
              <div className="similar_image_three_image_box">
                {this.props.productDetails.additionalImages.map((image, key) => {
                  return <img
                    key={key}
                    className="similar_particular_image"
                    src={"https://api.lokostop.in/" + image.image}
                    alt="RELOAD"
                  />
                })}
              </div>

              <IoIosArrowDown
                id="upIconNew"
                style={{ marginTop: "1.684vw" }}
              ></IoIosArrowDown>
            </div>
            : ""}
          <div className="product_big_image_cart_compare">
            <img
              className="big_image"
              src={ this.props.productDetails.baseImage? "https://api.lokostop.in/" +this.props.productDetails.baseImage.image: "https://via.placeholder.com/150"}
              alt="Loading"
            />
            <div
              className="buttons_compare individual_buttons_compare"
              style={{ marginTop: "1.025vw", marginLeft: "1.171vw" }}
            >
              <button className="cart_button individual_cart_button">
                <span className="large_screen_text">ADD TO CART</span>
                <span className="small_screen_text individual_">ADD</span>
                {" "}
                <BiCart
                  className="individual_bicart"
                  style={{
                    // color: 'white',
                    marginLeft: "0.952vw",
                    marginTop: "-0.5vw",
                    fontSize: "1.3vw",
                  }}
                />
              </button>
              <button className="compare_button individual_compare_button">COMPARE</button>
            </div>
          </div>
          <div className="details_of_individual_product_with_rating">
            <p className="name_of_the_particular_product">
              {this.props.productDetails.name}
            </p>
            <div className="category_of_that_particular_product_box">
              {this.props.productDetails.categories.map((category, key) => {
                return (
                  <p className="category_of_that_particular_product" key={key}>
                    {category.name}
                  </p>
                )
              })}
            </div>
            <div className="rating_product individual_rating_product">
              <div className="star">
              <i className={this.props.productDetails.rating>0?"fas fa-star": "far fa-star"} style={{color: 'yellow'}}></i>
              <i className={this.props.productDetails.rating>1?"fas fa-star": "far fa-star"} style={{color: 'yellow'}}></i>
              <i className={this.props.productDetails.rating>2?"fas fa-star": "far fa-star"} style={{color: 'yellow'}}></i>
              <i className={this.props.productDetails.rating>3?"fas fa-star": "far fa-star"} style={{color: 'yellow'}}></i>
              <i className={this.props.productDetails.rating>4?"fas fa-star": "far fa-star"} style={{color: 'yellow'}}></i>

              </div>
              <p className="text_rating individual_text_rating">{this.props.productDetails.rating.toFixed(1)}({this.props.reviews.length} Ratings)</p>
            </div>
            <hr className="product_individual_detail_line" />
            <div className="details_box_margin">
              {this.props.productDetails.specialPrice ? <React.Fragment>
                <div className="rating_product individual_rating_product">
                  <p className="mrp_text individual_mrp_text">MRP:</p>
                  <p className="price_of_the_product individual_price_of_the_product">{this.props.productDetails.price}</p>
                </div>
                <div className="price_box_discount individual_price_box_discount">
                  <p className="our_price_text individual_our_price_text">Our Price:</p>
                  <p className="price_of_the_product_after_discount individual_price_of_the_product_after_discount">Rs. {this.props.productDetails.specialPrice ? (this.props.productDetails.specialPriceType == "Fixed" ? this.props.productDetails.specialPrice : ((this.props.productDetails.price).toString() - ((this.props.productDetails.specialPrice).toString() / 100) * (this.props.productDetails.price).toString())) : this.props.productDetails.price}</p>
                </div>
              </React.Fragment> : <div className="rating_product">
                <p className="mrp_text">MRP:</p>
                <p className="price_of_the_product">{this.props.productDetails.price}</p>
              </div>}
              {this.props.productDetails.specialPrice ?
                <React.Fragment>
                  <div className="discount_box_in_compare individual_discount_box_in_compare">
                    <p className="discount_text_product individual_discount_text_product"> Discount:</p>
                    <p className="how_much_discount individual_how_much_discount">{this.props.productDetails.specialPriceType == "Fixed" ? Math.trunc(
                      ((this.props.productDetails.price -
                        this.props.productDetails.specialPrice) /
                        this.props.productDetails.price) *
                      100
                    ) : this.props.productDetails.specialPrice}% OFF</p>
                  </div>
                  <div className="save_box individual_save_box">
                    <p className="save_text individual_save_text">You save:</p>
                    <p className="discount_amount individual_discount_amount">Rs {this.props.productDetails.price - this.props.productDetails.specialPrice}</p>
                  </div>
                </React.Fragment>
                : ""}

              {/* <div className="save_box">
                <p className="delivery_text">Delivery in:</p>
                <p className="time_delivery">10 days after ordering</p>
              </div> */}
              {this.props.productDetails.options.map((option, key)=>{
                return this.getOption(option.type, option.name, option.required, option.value, key)
              })}
             
              <div className="save_box individual_save_box">
                <p className="color_text individual_color_text"> Qty:</p>
                <input className="product-qty individual_product-qty" type="number" placeholder="0" value={this.state.qty} onChange={(e) => { this.setState({ qty: e.target.value }) }} />
              </div>
            </div>
            {this.props.productDetails.SKU != "" ?
              <div className="save_box">
                <p
                  className="delivery_text"
                  style={{ width: "auto", marginLeft: "0" }}
                >
                  Product Code:
                </p>
                <p className="time_delivery">{this.props.productDetails.SKU}</p>
              </div>
              : ""}
            <div className="pay_via">
              <p
                className="save_text individual_save_text"
                style={{ marginLeft: "-0.952vw", marginTop: "1.025vw" }}
              >
                Pay via:
              </p>
              <div className="logo2pay">
              <img src={"https://api.lokostop.in/"+this.state.footerDetails.Footer.AcceptedPaymentMethodsImage.image} />

             </div>
            </div>
            {!this.props.featuresLoading && this.props.allFeatures.Features &&
              this.props.allFeatures.Features.SectionStatus ? (
                <div className="Free_box w-100 m-0">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    footerData: state.getFooter.footerData,
    footerLoading: state.getFooter.loading,
    featuresLoading: state.getFeatures.loading,
    allFeatures: state.getFeatures.features,
  };
};
export default connect(mapStateToProps, { getFeatures })(IndividualProductDetails);

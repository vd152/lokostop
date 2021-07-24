import Header from "../Component/Header/Header";
import { FaShippingFast, FaRegClock } from "react-icons/fa";
import { MdSettingsBackupRestore, MdPayment } from "react-icons/md";
import "./Home.css";
import Footer from "../Component/Footer/Footer";
import FindByCategory from "../Component/Boxes/FindByCategory";
import Header01 from "../Component/Header/Header01";
import React, { Component } from "react";
import NewArrival from "../Component/Boxes/NewArrival";
import PopularBox from "../Component/Boxes/PopularBox";
import ProductRowBox from "../Component/Boxes/ProductRowBox";
import SixImageSlider from "../Component/Slider/SixImageSlider";
import ClientImage from "../Component/Slider/ClientImage";
import VideoContainer from "../Component/Slider/VideoContainer";
import CategoryBox from "../Component/Boxes/CategoryBox";
import MostViewedBox from "../Component/Boxes/MostViewedBox";
import TopClients from "../Component/Boxes/TopClients";
import Loader from "../Loader/Loader";
import { connect } from "react-redux";
import {
  getFeatures,
  getProductTabs,
} from "../../Redux/Actions/StorefrontActions";
class Home extends Component {  
  state = {
    products: [],
  };
  componentDidMount() {
    this.props.getFeatures();
    this.props.getProductTabs();
    this.setState({ products: this.props.products });
  }
  render() {
    if (
      this.props.loading ||
      this.props.allProductRowsLoading ||
      this.props.featuresLoading
    ) {
      return <Loader />;
    } else
      return (
        <div>
          <Header01 />
          <Header />
          <VideoContainer />
          {this.props.allFeatures.Features &&
          this.props.allFeatures.Features.SectionStatus ? (
            <div className="Free_box">
              {this.props.allFeatures.Features.Features.filter((feature) => {
                if (
                  feature.Icon != "" &&
                  feature.SubTitle != "" &&
                  feature.Title != ""
                )
                  return true;
                return false;
              }).map((feature, key) => {
                return (
                  <div className="Free_Shipping" key={key}>
                    <FaShippingFast id="shipping_Icon" />
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

          {/* <NewArrival products={[]}/> */}
          <ProductRowBox tab={this.props.allProductRows[0].Tabs[0]} />
          <MostViewedBox />
          <FindByCategory />
          <CategoryBox />
          <TopClients />
          <ClientImage />
          <ProductRowBox tab={this.props.allProductRows[0].Tabs[2]} />
          <VideoContainer />
          <ProductRowBox tab={this.props.allProductRows[0].Tabs[3]} />
          {/* <PopularBox /> */}
          <SixImageSlider />
          <Footer />
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.getProducts.products,
    loading: state.getProducts.loading,
    productDetails: state.getProductDetails.product,
    allProductRows: state.getProductTabs.allTabs,
    allProductRowsLoading: state.getProductTabs.loading,
    featuresLoading: state.getFeatures.loading,
    allFeatures: state.getFeatures.features,
  };
};
export default connect(mapStateToProps, { getFeatures, getProductTabs })(Home);

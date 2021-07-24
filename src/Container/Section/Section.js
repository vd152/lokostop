import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import Header01 from "../Component/Header/Header01";
import Product from "../Component/Product";
import "./Section.css";
import React, { Component } from "react";
import Filter from "./Filter";
import { connect } from "react-redux";
import { getCategoryProducts } from "../../Redux/Actions/CategoryActions";
import Loader from "../Loader/Loader";

class Section extends Component {
  componentDidMount() {
    this.props.getCategoryProducts(
      "-createdAt",
      0,
      0,
      this.props.match.params.id
    );
  }

  render() {
    // if (this.props.loading) {
    //   return <Loader />;
    // }
    return (
      <div>
        <Header01></Header01>
        <Header></Header>
        <div className="sectionBox">
          <Filter />
          <div className="ParticularSection">
            <div className="headParticular">
              <p>WASHING MACHINE</p>
              <hr />
            </div>
            <div className="dropSort">
              <p>Sort by :</p>
              <select
                className="sortIndividual"
                onChange={(e) => {
                  this.props.getCategoryProducts(
                    e.target.value,
                    0,
                    0,
                    this.props.match.params.id
                  );
                }}
              >
                <option value="createdAt">Newest</option>
                <option value="-specialPrice">Price highest to lowest</option>
                <option value="specialPrice">Price lowest to highest</option>
                <option value="">Discount</option>
                <option value="">Customer Rating</option>
              </select>
            </div>
            <div className="individualcategorybox">
              {this.props.categoryProducts.length == 0 ? (
                <div>No products found.</div>
              ) : (
                this.props.categoryProducts.map((product, key) => {
                  return (
                    <Product product={product} key={key} category={true} />
                  );
                })
              )}
            </div>
            {this.props.categoryProducts.length != 0 ? (
              <button
                className="load_more_blogs"
                style={{ marginLeft: "30.015vw" }}
              >
                Load more
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categoryProducts: state.getCategoryProducts.categoryProducts,
    loading: state.getCategoryProducts.loading,
  };
};
export default connect(mapStateToProps, { getCategoryProducts })(Section);

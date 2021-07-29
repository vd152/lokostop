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
  state={
    categoryProducts: [],
    filter: "-createdAt",
    skip: 0,
    limit: 2,
  }
  UNSAFE_componentWillMount() {
    this.getProducts()
  }
  getProducts = () =>{
    this.props.getCategoryProducts(
      this.state.filter,
      this.state.skip,
      this.state.limit,
      this.props.match.params.fieldname,
      this.props.match.params.id,
      this.props.location.searchWord?this.props.location.searchWord: ""
    );
    const {categoryProducts} = this.state
    this.props.categoryProducts.forEach((product)=>{
      categoryProducts.push(product)

    })
    this.setState({categoryProducts})
    
  }
  render() {
 
    return (
      <div>
        <Header01 />
        <Header />
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
                  this.setState({filter: e.target.value,skip: 0, categoryProducts: []}, ()=>{

                    this.getProducts()
                  })
                }}
              >
                <option value="createdAt" >Newest</option>
                <option value="-specialPrice">Price highest to lowest</option>
                <option value="specialPrice">Price lowest to highest</option>
                <option value="">Discount</option>
                <option value="">Customer Rating</option>
              </select>
            </div>
            <div className="individualcategorybox">
              {!this.props.loading && this.state.categoryProducts.length == 0 ? (
                <div>No products found.</div>
              ) : (
                this.state.categoryProducts.map((product, key) => {
                  return (
                    <Product product={product} key={key} category={true} />
                  );
                })
              )}
            </div>
            { this.state.categoryProducts.length != 0 ? (
              <button
                className="load_more_blogs"
                style={{ marginLeft: "30.015vw" }}
                onClick={(e)=>{
                  this.setState({skip: this.state.skip+this.state.limit},()=>{
                    this.getProducts()
                  })
                }}
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

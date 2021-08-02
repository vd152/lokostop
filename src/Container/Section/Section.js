import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import Header01 from "../Component/Header/Header01";
import Product from "../Component/Product";
import "./Section.css";
import React, { Component } from "react";
import Filter from "./Filter";
import { connect } from "react-redux";
import { getSectionProducts } from "../../Redux/Actions/CategoryActions";
import Loader from "../Loader/Loader";

class Section extends Component {
  state={
    categoryProducts: [],
    filter: "-createdAt",
    skip: 0,
    limit: 2,
    filterArr: [],
    brand: {
      name: "",
      value: []
    }
  }
  componentDidMount() {
    let tmp = {
      name: this.props.match.params.fieldname, value: [this.props.match.params.id]
    }
    const { filterArr} = this.state
    filterArr.push(tmp);
    this.setState({filterArr},()=>{
      if(!this.props.loading){
        this.getProducts()
      }
    })

  }
  getProducts = () =>{
    this.props.getSectionProducts(
      this.state.filter,
      this.state.skip,
      this.state.limit,
      this.state.filterArr,
      this.props.location.searchWord?this.props.location.searchWord: ""
    );
    const {categoryProducts} = this.state
    this.props.categoryProducts.forEach((product)=>{
      categoryProducts.push(product)

    })
    // let temp = categoryProducts.map(JSON.stringify)
    // let unique = new Set(temp)
    // let newArr = Array.from(unique).map(JSON.parse)
    this.setState({categoryProducts,skip: this.state.skip + this.state.limit})
    
  }
  render() {
 
    return (
      <div>
        <Header01 />
        <Header />
        <div className="sectionBox">
        <div className="filterbox">
            <p className="filtersHeading">Filters</p>
            <p className="parafilter">Filter your preference and dig deep to buy what you want</p>
            <div className='filterCategories'>
              {this.props.tags.length > 0? 
                this.props.tags.map((tag, key)=>{
                  return <p key={key}>{tag.name}</p>
                })
              :""}
            </div>
            <div className="filter">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Filter by brand
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className='suboptions'>
                                  {this.props.brands.length > 0? 
                                    this.props.brands.map((brand,key)=>{
                                      return <div className="form-check" key={key}>
                                      <input className="form-check-input colorcheck" type="checkbox" value="" id="flexCheckDefault" />
                                      <label className="form-check-label checkfont" htmlFor="flexCheckDefault">
                                         {brand.name}
                                      </label>
                                  </div>
                                    })
                                  :""}
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               Find by category
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <div className='suboptions'>
                                    <div className="form-check">
                                        <input className="form-check-input colorcheck" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label checkfont " htmlFor="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input colorcheck" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label checkfont" htmlFor="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                filter by price
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <div className='suboptions'>
                                    <div className="form-check">
                                        <input className="form-check-input colorcheck" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label checkfont" htmlFor="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input colorcheck" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label checkfont" htmlFor="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          <div className="ParticularSection">
            <div className="headParticular">
              <p>{this.props.match.params.title}</p>
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
                <option value="rating">Customer Rating</option>
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
                id="load-more"
                onClick={(e)=>{
                  this.getProducts()
               
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
    categoryProducts: state.getSectionProducts.categoryProducts,
    loading: state.getSectionProducts.loading,
    tags: state.getTags.tags,
    brands: state.getBrands.brands,
  };
};
export default connect(mapStateToProps, { getSectionProducts })(Section);

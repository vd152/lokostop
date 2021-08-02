import React from "react";
import { IoIosArrowDown, IoIosArrowForward, IoIosHeart } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class FindByCategory extends React.Component {
  state = {
    categories: [],
    selectedCategory: {
        url: "",
        id: "",
        name: ""
    }, 
    selectedBrand: {
      url: "",
      id: "",
      name: ""
    }
  };
  componentDidMount() {
    const { categories } = this.state;
    const setCategories = (root) => {
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
      <div>
        <div className="find_by_category_box">
          <p className="most_viewd_text">Find by category</p>
          <hr id="line_category"></hr>
        </div>
        <div className="category_box">
          <p className="offers">
            Open category and sort according to your preferences. Unveil offers.
          </p>
          <div className="category_names">
          {this.props.categories.map((category,key)=>{
            return <p className="particular_cat" key={key} onClick={(e)=>{
              const {selectedCategory} = this.state
              selectedCategory.id = category._id
              selectedCategory.name = category.name
              selectedCategory.url = category.url
              this.setState({selectedCategory})
            }}>{category.name}</p>
          })}
            
            
          </div>
          <p className="or">OR</p>
          <div className="category_Search">
            <div className="centre_first_part1">
              <div className="dropdown" style={{width:'auto'}}>
                <button
                  style={{ marginTop: "1.5%" ,width:'auto' }}
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {this.state.selectedCategory.name == ""? 
                  <span>
                  <span className="large_screen_text">All Categories</span>
                  <span className="small_screen_text">All</span>
                  </span>
                  : this.state.selectedCategory.name}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {this.state.categories.map((category, key) => {
                return <li key={key}>{category.content}</li>;
              })}
            </ul>
             </div>
            </div>
            <div className="centre_first_part1">
              
              <div className="dropdown" style={{width:'auto'}}>
                <button
                 className="btn  dropdown-toggle"
                 type="button"
                 id="dropdownButton2"
                 data-bs-toggle="dropdown"
                 aria-expanded="false"
                >
                  {this.state.selectedBrand.name == ""? "Brands": this.state.selectedBrand.name}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownButton2">
                {!this.props.brandLoading && this.props.brands.map((brand, key)=>{
                    return <li key={key} onClick={(e)=>{
                      const {selectedBrand} = this.state
                      selectedBrand.id = brand._id
                      selectedBrand.name = brand.name
                      selectedBrand.url = brand.url
                      this.setState({selectedBrand})
                    }}>{brand.name}</li>
                  })} 
                </ul>

              </div>
              
            </div>
            <div className="centre_second_part2">
              <div className="budgetbox">
              <input type="text" placeholder="Budget (approximate)" />
              </div>
             
            </div>
            <div className="find_icon">
              <p style={{ marginTop: "0.805vw" }} className="large_screen_text">Find</p>
              <FiSearch id="search" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.getCategories.categories.filter(category=>category.status&&category.searchable),
    brands: state.getBrands.brands,
    brandLoading: state.getBrands.loading
  };
};
export default connect(mapStateToProps)(FindByCategory);

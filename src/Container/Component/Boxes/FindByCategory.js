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
            <p style={{ marginTop: "1.098vw" }} className="particular_cat">
              Mobile & Tablet
            </p>
            <p className="particular_cat">Washing Machine</p>
            <p className="particular_cat">Tv</p>
            <p className="particular_cat">Washing Machine</p>
            <p className="particular_cat">Tv</p>
            <p className="particular_cat">Washing Machine</p>
            <p className="particular_cat">Tv</p>
            <p className="particular_cat">Washing Machine</p>
            <p className="particular_cat">Tv</p>
            <p className="particular_cat">Washing Machine</p>
            
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
                  {this.state.selectedCategory.name == ""? "All Categories": this.state.selectedCategory.name}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {this.state.categories.map((category, key) => {
                return <li key={key}>{category.content}</li>;
              })}
            </ul>
             </div>
            </div>
            <div className="centre_first_part1">
              <div className="drop">
                <button
                  className="dropbtn1"
                >
                  Brand
                </button>
                <div style={{ left: "-1vw" }} className="dropdown-content1">
                  <Link to="#">Washing Machine</Link>
                  <Link to="#">Link 2</Link>
                  <Link to="#">Link 3</Link>
                </div>
              </div>
              
            </div>
            <div className="centre_second_part2">
              <div className="budgetbox">
              <input type="text" placeholder="Budget (approximate)" />
              </div>
             
            </div>
            <div className="find_icon">
              <p style={{ marginTop: "0.805vw" }}>Find</p>
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
    categories: state.getCategories.categories,
  };
};
export default connect(mapStateToProps)(FindByCategory);

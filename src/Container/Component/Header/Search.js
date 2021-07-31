import "./Header01.css";
import { IoIosArrowForward, IoIosHeart } from "react-icons/io";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link, Redirect } from "react-router-dom";
import React, { Component } from "react";
import "./Header03.css";
import { connect } from "react-redux";

class Search extends Component {
  state = {
    categories2: [],
    selectedCategory: {
      url: "",
      id: "",
      name: "",
    },
    searchWord: "",
    searchRedirect: false
  };
  componentDidMount() {
    const {  categories2 } = this.state;

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
            onClick={(e) => {
              const { selectedCategory } = this.state;
              selectedCategory.id = root._id;
              selectedCategory.name = root.name;
              selectedCategory.url = root.url;
              this.setState({ selectedCategory });
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
              onClick={(e) => {
                const { selectedCategory } = this.state;
                selectedCategory.id = root._id;
                selectedCategory.name = root.name;
                selectedCategory.url = root.url;
                this.setState({ selectedCategory });
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
      let tempData2 = {};
      tempData2.content = setCategories2(category);
      categories2.push(tempData2);
    });
    this.setState({  categories2 });
  }

  render() {
    if(this.state.searchRedirect){
      return <Redirect to={{ 
        pathname: "/categories/"+this.state.selectedCategory.name + "/"+ this.state.selectedCategory.url+"/"+this.state.selectedCategory.id,
        searchWord: this.state.searchWord
      }}/>
    }
    return (
        <div className={this.props.home? "Header_one_centre search-sm": "Header_one_centre search-xl"}>
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
                {this.state.selectedCategory.name == ""
                  ? <span className="center_first_part_text"><span className="large_screen_text">All Categories</span>
                    <span className="small_screen_text">All</span>
                  </span>
                  : this.state.selectedCategory.name}
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
              <input type="text" placeholder="Enter your search key..." value={this.state.searchWord} onChange={(e)=>this.setState({searchWord: e.target.value})} />
            </div>
          </div>
          <div className="centre_third_part" onClick={(e)=>{
            this.setState({searchRedirect: true})
          }}>
            <p style={{ marginTop: "0.878vw" }}><span className="large_screen_text">Search</span></p>
            <FiSearch id="search" />
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
export default connect(mapStateToProps)(Search);

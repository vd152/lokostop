import "./BlogMain.css";
import Header from "../Component/Header/Header";
import { IoIosArrowBack, IoIosEye } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Header01 from "../Component/Header/Header01";
import React, { Component } from "react";
import SingleBlog from "./SingleBlog";
import api from "../../Apis/api";
import { siteUrl} from '../../Utils/util'


class BlogMain extends Component {
  state = {
    blog: {},
  };
  componentDidMount() {
    let url = "/blog/get/" + this.props.match.params.id;
    api
      .get(url)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ blog: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Header01></Header01>
        <Header />
        <div className="Heading_about">
          <p>BLOGS</p>
          <hr />
        </div>
        <Link to="/blogs">
          <div className="goblog">
            {" "}
            <IoIosArrowBack id="blog_icon" /> <p>Go back to blogs</p>
          </div>
        </Link>
        <div className="blog_individual_box">
          <div className="inner_box_blogs_one">
            <div className="first_blog_one_comp">
              <p className="first_heading_blog_box_one">
                {this.state.blog.heading}
              </p>
              <BsThreeDotsVertical id="info_icon_dot" />
            </div>
            <div className="first_blog_second_component">
              <p>by Mohit Gopal</p>
              <p>5 mins</p>
            </div>
            {/* <div className="first_blog_second_component_views">
              <IoIosEye id="eye" />
              <p className="views_on_blog">320</p>
            </div> */}
            {this.state.blog.img && (
              <img
                className="image_blog_individual"
                src={siteUrl + this.state.blog.img.image}
                alt="Reload"
              />
            )}
            <p
              className="para_individual_blog"
              dangerouslySetInnerHTML={{ __html: this.state.blog.body }}
            >
            </p>
          </div>
          <div className="inner_box_blogs_two">
            <p className="Recommend_blogs">Recommended blogs</p>
            <div className="blog_main_1">
              {/* <Link style={{ textDecoration: 'none' }} to="blogIndividual">
                                <SingleBlog />
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to="blogIndividual">
                                <SingleBlog />
                            </Link> */}
            </div>
          </div>
        </div>
        <div className="buttons_blog">
          <button className="button_blog_one"> Continue Shopping</button>
          <button className="button_blog_two">Share blog</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BlogMain;

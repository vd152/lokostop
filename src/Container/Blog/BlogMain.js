import './BlogMain.css'
import Header from '../Component/Header/Header'
import { IoIosArrowBack, IoIosEye } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import Header01 from '../Component/Header/Header01';
import React, { Component } from 'react'
import SingleBlog from './SingleBlog';

export class BlogMain extends Component {
    render() {
        return (
            <div>
                <Header01></Header01>
                <Header />
                <div className="Heading_about">
                    <p>BLOGS</p>
                    <hr />
                </div>
                <Link to='/blogs'>
                    <div className="goblog"> <IoIosArrowBack id="blog_icon" />  <p>Go back to blogs</p></div>
                </Link>
                <div className="blog_individual_box">
                    <div className="inner_box_blogs_one">
                        <div className="first_blog_one_comp">
                            <p className='first_heading_blog_box_one'>This is going to the heading of the article in two lines maximum, otherwise we can also give the limit to this text box so that it does not show ellipsis...</p>
                            <BsThreeDotsVertical id="info_icon_dot" />
                        </div>
                        <div className="first_blog_second_component">
                            <p>by Mohit Gopal</p>
                            <p>5 mins</p>
                        </div>
                        <div className="first_blog_second_component_views">
                            <IoIosEye id='eye' />
                            <p className='views_on_blog'>320</p>

                        </div>
                        <img className='image_blog_individual' src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=853&q=80" alt="HR" />
                        <p className='para_individual_blog'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                    </div>
                    <div className="inner_box_blogs_two">
                        <p className='Recommend_blogs'>Recommended blogs</p>
                        <div className="blog_main_1">
                            <Link style={{ textDecoration: 'none' }} to="blogIndividual">
                                <SingleBlog />
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to="blogIndividual">
                                <SingleBlog />
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="buttons_blog">
                    <button className="button_blog_one"> Continue Shopping</button>
                    <button className="button_blog_two">Share blog</button>
                </div>
                <Footer />
            </div>
        )
    }
}

export default BlogMain

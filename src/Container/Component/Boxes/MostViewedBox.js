import React, { Component } from 'react'
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiCart } from "react-icons/bi";
export class MostViewedBox extends Component {
    render() {
        return (
            <div>
                <div className="most_view_box">
                    <p className="most_viewd_text">Most Viewed Products</p>
                    <hr id="line_view"></hr>
                    <div id="arrow_box">
                        <IoIosArrowBack id="Arrow_forward" />
                        <IoIosArrowForward id="Arrow_backward" />
                    </div>
                </div>
                <div className="most_viewed_compare">
                    <div className="image_box_second_one">
                        <img src="https://images.unsplash.com/photo-1583172747862-afcb755ebd13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="RELOAD" />
                        {/* <p className='discount_one'>10% off</p> */}
                    </div>
                    <div className="comparing_products_details">
                        <p className="compare_product_details_cat">WASHING MACHINE</p>
                        <p className="detail_of_product_comparing">LG 6.5kg 5 Star Smart Inverter Fully-Automatioc Top loading Washing Machine(T65SKSF4Z)</p>
                        <div className="rating_product">
                            <div className="star">
                                <FaRegStar id="star_feature" />
                                <FaRegStar id="star_feature" />
                                <FaRegStar id="star_feature" />
                                <FaRegStar id="star_feature" />
                                <FaRegStar id="star_feature" />
                            </div>
                            <p className="text_rating">3.0 (4 Ratings)</p>
                        </div>
                        <div className="rating_product">
                            <p className="mrp_text">MRP:</p>
                            <p className="price_of_the_product">Rs 25,000</p>
                        </div>
                        <div className="price_box_discount">
                            <p className="our_price_text">Our Price:</p>
                            <p className="price_of_the_product_after_discount">Rs 22,000</p>
                        </div>
                        <div className="discount_box_in_compare">
                            <p className="discount_text_product"> Discount:</p>
                            <p className="how_much_discount" style={{ paddingBottom: '1.903vw' }}>10% off</p>
                        </div>
                        <div className="save_box">
                            <p className="save_text">You save:</p>
                            <p className="discount_amount">Rs 3,000</p>
                        </div>
                        <div className="save_box">
                            <p className="delivery_text">Delivery in:</p>
                            <p className="time_delivery">10 days after ordering</p>
                        </div>
                        <div className="save_box">
                            <p className="color_text"> Color:</p>
                            <select className="dropdown_colors" >
                                <option value="WH">White</option>
                                <option value="BL">Black</option>
                            </select>
                        </div>
                        <div className="buttons_compare">
                            <button className="cart_button" >ADD TO CART <BiCart style={{
                                // color: 'white',
                                marginLeft: '0.952vw',
                                marginTop: '-0.5vw',
                                fontSize: '1.3vw'
                            }} /></button>
                            <button className="compare_button">COMPARE</button>
                        </div>
                        <p className="view_details">View details</p>
                    </div>
                    <div className="image_box_second">
                        <img src="https://images.unsplash.com/photo-1583172747862-afcb755ebd13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="RELOAD" />
                        {/* <p className='discount_one'>10% off</p> */}
                    </div>

                </div>
            </div>
        )
    }
}

export default MostViewedBox

import Product from '../Product'
import React, { Component } from 'react'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export class CategoryBox extends Component {
    render() {
        return (
            <div>
                <div className="find_by_category_box">
                    <p className="most_viewd_text">New arrivals</p>
                    <hr id="line_category"></hr>
                </div>
                <div className="advert_image"><img src="https://i.pinimg.com/originals/37/44/42/374442641969a8df7e783978e169d580.jpg" alt=""></img></div>
                <div className="find_by_category_box">
                    <p className="most_viewd_text">BEST SELLING</p>
                    <hr id="line_category"></hr>
                </div>
                <div className='category_dash_outer_box'>
                    <div className="category_dash">
                        <div className="particular_category_choice">
                            <p>Air conditioner</p>
                            <hr id="line_for_particular_box_category"></hr>
                            <div id="arrow_box_1">
                                <IoIosArrowBack id="Arrow_forward" />
                                <IoIosArrowForward id="Arrow_backward" />
                            </div>
                        </div>
                        <Product />
                    </div>
                    <div className="category_dash">
                        <div className="particular_category_choice">
                            <p>LED Television</p>
                            <hr id="line_for_particular_box_category"></hr>
                            <div id="arrow_box_1">
                                <IoIosArrowBack id="Arrow_forward" />
                                <IoIosArrowForward id="Arrow_backward" />
                            </div>
                        </div>
                        <Product />
                    </div>
                    <div className="category_dash">
                        <div className="particular_category_choice">
                            <p>Microwave</p>
                            <hr id="line_for_particular_box_category"></hr>
                            <div id="arrow_box_1">
                                <IoIosArrowBack id="Arrow_forward" />
                                <IoIosArrowForward id="Arrow_backward" />
                            </div>
                        </div>
                        <Product />
                    </div>
                    <div className="category_dash">
                        <div className="particular_category_choice">
                            <p>Accessories</p>
                            <hr id="line_for_particular_box_category"></hr>
                            <div id="arrow_box_1">
                                <IoIosArrowBack id="Arrow_forward" />
                                <IoIosArrowForward id="Arrow_backward" />
                            </div>
                        </div>
                        <Product />
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryBox

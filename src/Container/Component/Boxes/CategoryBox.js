import Product from '../Product'
import React, { Component } from 'react'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
class CategoryBox extends Component {
    componentDidMount() {
        // console.log(this.props.tab)
    }
    render() {
        return (
            this.props.tab.SectionStatus == "true"?
            <React.Fragment>
                
                <div className="find_by_category_box">
                    <p className="most_viewd_text">{this.props.tab.SectionTitle}</p>
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
                        <Product />
                    </div>
                </div>
            </React.Fragment>: <React.Fragment></React.Fragment>
        )
    }
}

export default CategoryBox

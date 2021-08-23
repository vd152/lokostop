import React, { Component } from 'react'
import './Compare.css'
import Header from '../Component/Header/Header'
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa"; import { FiSearch } from "react-icons/fi";
import { BiGitCompare, BiCart } from "react-icons/bi";
import Footer from '../Component/Footer/Footer';
import FindByCategory from '../Component/Boxes/FindByCategory';
import Product from '../Component/Product';
import Header01 from '../Component/Header/Header01';
import PopularBox from '../Component/Boxes/PopularBox';


class Compare extends Component {
    render() {
        return (
            <div>
                <Header01 />
                <Header />
                <div className="Heading_about compare">
                    <p>COMPARE</p>
                    <hr />
                </div>
                <div className="compare_container">
                <div className="left_compare">
            <div className="text">

                <p className="contact_details_compare" > Connect to shop: <br/> +91-9809890982</p>
            </div>
                <div className="specification_box_one">
                                <p className="p-2">Specifications</p>
                                <ul>
                                    <li>First heading</li>
                                    <li>First heading</li>
                                </ul>
                            </div>
                            <div className="button_box">
                            
                            </div>
                </div>
                <div className="top_compare">   
                
                <div className="product_display_comparing">
                    <div className="compare_box">
                        <div className="product">
                        <Product hidetop={true}/>
                        <div className="specification_box_one">
                                <p></p>
                                <ul>
                                    <li>First heading</li>
                                    <li>First heading</li>
                                </ul>
                            </div>
                            <div className="button_box">
                                <button className="add_to_cart_compare">
                                    <p>ADD TO CART</p>
                                    <BiCart style={{
                                        color: 'white',
                                        marginLeft: '0.439vw',
                                        marginTop: '0.366vw',
                                        fontSize: '1.3vw'
                                    }} />
                                </button>
                                <button id="remove_button">REMOVE</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="product_display_comparing">
                    <div className="compare_box">
                        <div className="product">
                        <Product hidetop={true}/>
                        <div className="specification_box_one">
                                <p></p>
                                <ul>
                                    <li>First heading</li>
                                    <li>First heading</li>
                                </ul>
                            </div>
                            <div className="button_box">
                                <button className="add_to_cart_compare">
                                    <p>ADD TO CART</p>
                                    <BiCart style={{
                                        color: 'white',
                                        marginLeft: '0.439vw',
                                        marginTop: '0.366vw',
                                        fontSize: '1.3vw'
                                    }} />
                                </button>
                                <button id="remove_button">REMOVE</button>
                            </div>
                        </div>
                        
                    </div>
                </div>      
                </div>
             </div>
             <div className="most_view_box">
                    <p className="most_viewd_text">PEOPLE ALSO BUY</p>
                    <hr id="line_view"></hr>
                  
                </div>
                <div className="new_arrival_box">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <FindByCategory />
                <PopularBox/>
                <Footer />
            </div>
        )
    }
}

export default Compare

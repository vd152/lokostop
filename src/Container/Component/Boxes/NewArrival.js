import Product from '../Product';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { Component } from 'react'
class NewArrival extends Component {
    componentDidMount(){
        // console.log(this.props.products)
    }
    render() {
        return (
            <div>
                <div className="new_Arrivals">
                    <p className="new_Arrival_text">New Arrivals</p>
                    <hr id="line_1"></hr>
                    <div className="list_names">
                        <ul>
                            <li>Washing Machines</li>
                            <li>Mobile Phones</li>
                            <li>Kitchen Appliances</li>
                            <li>Laptop & Printer</li>
                        </ul>
                    </div>
                    <div id="arrow_box">
                        <IoIosArrowBack id="Arrow_forward" />
                        <IoIosArrowForward id="Arrow_backward" />
                    </div>
                </div>
                <div className="new_arrival_box">
                    <Product />
                   
                </div>
            </div>
        )
    }
}

export default NewArrival

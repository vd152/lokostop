import './Footer.css'; import { FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiCopyrightLine } from "react-icons/ri";
import React, { Component } from 'react'
import {connect} from 'react-redux'


export class Footer extends Component {
    state = {
        footerDetails: {
            Footer: {
                FooterCopyrightText: 'Copyright © <a href="https://lokostop.in">Lokostop</a> 2021. All rights reserved.',
                AcceptedPaymentMethodsImage: ""
            }
        }
    }
    componentDidMount(){
        this.setState({footerDetails: this.props.footerData.Footer? this.props.footerData: this.state.footerDetails})     
    }
    render() {
        return (
            <footer className='footer'>
                <div className="area_1">
                    {/* <div className="logo1">SIDHU electronics</div>
                <p className="area_1_para">We promise products from best brands with assurance.</p> */}
                    <a href="https://www.google.com/maps/place/Shop+No.+4669,+1,+Shingar+Cinema+Rd,+Baba+Than+Singh+Chowk,+Opposite+Kalra+Hospital,+Fatehganj,+Ludhiana,+Punjab+141008/@30.9141817,75.8644781,17z/data=!3m1!4b1!4m5!3m4!1s0x391a8312c81bf2c7:0x3d7ec9369a0e025b!8m2!3d30.9141817!4d75.8666668" target="#">
                        <img src="https://www.google.com/maps/vt/data=2StCVG_pvqmZ1rje37RZrKw4YWfMf4yq_wsA1c_J4dZTYphMkKI7wXDrIg1fH7e84tBBvSWc96etbq6X3KeHfc4bR42oZ5dSNREcu-7Cuf4PngXjgopEus1LRM7H3BYjUF3ksoC9f_9vMiZSFQvHJqL4S-hTJYtRvuqYLv8" alt="RELOAD" />
                    </a>
                    {/* <p className="second_para_area_1">Shop No. 4669/1 Shingar Cinema Rd, Near Shingar Cinema, New Shivaji Nagar, Samrala Chowk, Ludhiana, Punjab 141008</p></a> */}
                </div>
                <div className="area_2">
                    <div className="outer_area_boxes">
                        <div className="box_one_area_2">
                            <p>INFORMATION</p>
                            <ul>
                                {/* <li>Delivery</li> */}
                                <li>About us</li>
                                <li>Secure Payment</li>
                                <li>Send Query</li>
                                {/* <li>Sitemap</li>
                            <li>Stores</li> */}
                            </ul>
                        </div>
                        <div className="box_one_area_2">
                            <p>CUSTOM LINKS</p>
                            <ul>
                                <li>New Arrivals</li>
                                <li>Popular Categories</li>
                                <li>Featured Products</li>
                                <li>Best Selling</li>
                                {/* <li>Query</li> */}
                            </ul>
                        </div>
                        <div className="box_one_area_2">
                            <p>HELP DESK</p>
                            <ul>
                                <li>Terms of Use</li>
                                <li> Privacy Policy</li>
                                <li>Payments and Returns</li>
                                <li>Shipping option</li>
                                <li>Help/FAQ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="second_box_profile">
                        <p>PROFILE</p>
                        <ul>
                            <li>My profile</li>
                            <li>My orders</li>
                            <li>My favorites</li>
                        </ul>
                    </div>
                    <p className='copyright' dangerouslySetInnerHTML={{__html: this.state.footerDetails.Footer.FooterCopyrightText}}></p>
                </div>
                <div className="area_3">
                    <div className="paymentmethod">
                        <p>PAYMENT METHODS</p>
                        <div className="logo2">
                            <ul>
                                <li><img src='data:image/png;base64,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' alt="HR" /></li>
                                <li><img src='data:image/png;base64,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' alt="HR" /></li>
                                <li><img src='data:image/png;base64,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' alt="HR" /></li>
                                <li><img src='https://cdn.iconscout.com/icon/free/png-512/paytm-226448.png' alt="HR" /></li>
                            </ul>
                        </div>

                    </div>
                    <div className="followUs">
                        <p>FOLLOW US ON</p>
                        <div className="social">
                            <ul>
                                <a href="https://www.facebook.com/" target="#"><li>
                                    <img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="" />
                                </li></a>
                                <a href="https://www.instagram.com/accounts/login/" target='#'>
                                    <li>
                                        <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg" alt="" />
                                    </li>
                                </a>

                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        )
    }
}

const mapStateToProps = state =>{
    return {       
        footerData: state.getFooter.footerData,
        footerLoading: state.getFooter.loading
    }
}
export default connect(mapStateToProps)(Footer)

import React, { Component } from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import Header01 from '../Component/Header/Header01'
import './paymentCart.css'
import './PaymentNet.css'
import { FaShippingFast, FaRegClock } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdSettingsBackupRestore, MdPayment } from "react-icons/md";
import { Link } from 'react-router-dom'
import CreditCard from './CreditCard'
import DebitCard from './DebitCard'
import NetBank from './NetBank'
import Wallet from './Wallet'
export class paymentCart extends Component {
    render() {
        return (
            <div>
                <Header01 />
                <Header />
                <div className="Heading_about">
                    <p>PAYMENT</p>
                    <hr />
                </div>
                <Link to='/cart'>
                    <div className="goblog">
                        <IoIosArrowBack id="blog_icon" />
                        <p>Back to cart</p>
                    </div>
                </Link>
                <div className="outerpaymentbox">
                    <div className="firstpaybox">
                        <div className='total_head_no'>
                            <p>03.</p>
                            <p>PAYMENT METHOD</p>
                        </div>
                        <div className="insidepay">
                            <div className="d-flex align-items-start" style={{ width: '100%' }}>
                                <div className="nav flex-column nav-pills me-3 nav1new" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">CREDIT CARD</button>
                                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">DEBIT CARD</button>
                                    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">NET BANKING</button>
                                    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">WALLET/UPI</button>
                                    <button className="nav-link" id="v-pills-cash-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cash" type="button" role="tab" aria-controls="v-pills-cash" aria-selected="false">CASH ON DELIVERY</button>
                                </div>
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <CreditCard/>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                        <DebitCard/>
                                    </div>
                                    <div style={{width:'34vw'}} className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                        <NetBank/>
                                    </div>
                                    <div style={{width:'34vw'}} className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                       <Wallet/>
                                    </div>
                                    <div style={{width:'34vw'}} className="tab-pane fade" id="v-pills-cash" role="tabpanel" aria-labelledby="v-pills-cash-tab">
                                        <div className="boxdetail">
                                            <div className="netboxmain">
                                                <p className="netbanking">Currently Unavailable</p>
                                            </div>
                                            <button className="paynow">PAY NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="secondpaybox">
                        <div className="secondpay_1box">
                            <p className='para1_pay'>ABCDEF</p>
                            <hr id='payline' />
                            <div className="paymntbox_card">
                                <p>PAYMENT OF</p>
                                <p><b>Rs. 45,289.00</b></p>
                            </div>
                        </div>
                        <div className="Free_boxpay">
                            <div className="Free_Shipping">
                                <FaShippingFast id="shipping_Icon" />
                                <div className="shipping_text">
                                    <p className="shipping_text1">Free shipping</p>
                                    <p className="shipping_text2">On orders over Rs. 30,000</p>
                                </div>
                            </div>
                            <div className="Free_Shipping">
                                <MdSettingsBackupRestore id="shipping_Icon" />
                                <div className="shipping_text">
                                    <p className="shipping_text1">Free returns</p>
                                    <p className="shipping_text2">Returns are free within 9 days</p>
                                </div>
                            </div>
                            <div className="Free_Shipping">
                                <MdPayment id="shipping_Icon" />
                                <div className="shipping_text">
                                    <p className="shipping_text1">100% Secure Payments</p>
                                    <p className="shipping_text2">Your payment are safe with us</p>
                                </div>
                            </div>
                            <div className="Free_Shipping">
                                <FaRegClock id="shipping_Icon" />
                                <div className="shipping_text">
                                    <p className="shipping_text1">Support 24/7</p>
                                    <p className="shipping_text2">Contact us 24 hours a day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default paymentCart
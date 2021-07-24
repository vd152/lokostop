import './Billinginfo.css';
import StateDropdown from './StateDropdown';
import React, { Component } from 'react'

export class Billinginfo extends Component {
    render() {
        return (
            <div className="billinginfobox">
            <div className='total_head_no'>
                <p>02.</p>
                <p>BILLING INFORMATION</p>
            </div>
            <div className="details_billing">
                <div className="detail_add_billing">
                    <div className="first_bill_box">
                        <p className="head_bill_reciever">Receiver details</p>
                        <input className="input_box" type="text" placeholder="Full Name" />
                        <input className="input_box" type="text" placeholder="Phone Number" />
                        <input className="input_box" type="text" placeholder="Email Address" />
                        <p className="check_box">
                            <label className="containerCheck">
                            I want to get offers in my mail
                        <input type="checkbox"></input>
                                <span className="checkMark"></span>
                            </label>
                        </p>
                        <p className="check_box">
                            <label className="containerCheck">
                            Save this information for future
                        <input type="checkbox"></input>
                                <span className="checkMark"></span>
                            </label>
                        </p>
                    </div>
                    <div className="second_bill_box">
                        <p className="head_bill_reciever">Receiver address</p>
                        <div className="insidebox_secondbill">
                            <input className="second_input_box" type="text"  placeholder="Address (First Line)"/>
                            <div className="dropdown_box">
                                <div className="countrybox_edit">
                                <select  name="country" id="country_name"> 
                                    <option  id="select_option"  disabled selected hidden>Country</option>
                                    <option  value="canada">Canada</option>
                                    <option value="india">India</option>
                                    <option value="unitedstates">United States</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className="insidebox_secondbill">
                            <input className="second_input_box" type="text"  placeholder="Address (SecondLine)"/>
                            
                            <StateDropdown/>
                        </div>
                        <div className="insidebox_secondbill">
                            <input className="second_input_box" type="text"  placeholder="Address (Third Line)"/>
                            <input className="second_input_box" type="text"  placeholder="District"/>
                        </div>
                        <div className="insidebox_secondbill">
                            <input className="second_input_box" type="text"  placeholder="Pin code"/>
                            <input className="second_input_box" type="text"  placeholder="Landmark"/>
                        </div>
                        <div className="finaladdress">
                            <p>Green Park (will be filled simultaneously)</p>
                            <p>Safdarjung Enclave</p>
                            <p>New Delhi- 110029</p>
                        </div>
                        <p className="check_box">
                            <label className="containerCheck">
                            Set this as my default address
                        <input type="checkbox"></input>
                                <span className="checkMark"></span>
                            </label>
                        </p>
                        <button className="save_cont_billing">Save & Continue</button>
                    </div>
                    <div className="third_bill_box">
                        <div className="inside_box_third">
                            <p className="para1_insidethird">Subtotal</p>
                            <p className="para2_insidethird">Rs. 44,989.00</p>
                        </div>
                        <div className="inside_box_third">
                            <p className="para1_insidethird">Shipping Cost</p>
                            <p className="para2_insidethird">Rs. 200.00</p>
                        </div>
                        <div className="inside_box_third">
                            <p className="para1_insidethird">Transportation Cost</p>
                            <p className="para2_insidethird">Rs. 100.00</p>
                        </div>
                        <div className="inside_box_third">
                            <p className="para1_insidethird">Your Savings</p>
                            <p className="para2_insidethird" style={{color: '#08E5A9'}}>Rs. MRP-Our price</p>
                        </div>
                        <div className="discountbox">
                            <input type="text" className="discountcode" placeholder='Discount Code' />
                            <p className="applycode">Apply</p>
                        </div>
                        <div className="inside_box_third">
                            <p className="para1_insidethird">Discount</p>
                            <p className="para2_insidethird">Rs. 0</p>
                        </div>
                        <hr id="bill_line" />
                        <div className="inside_box_third">
                            <p className="para1_insidethird" style={{textAlign:"center" , fontWeight:'bold'}}>GRAND TOTAL</p>
                            <p className="para2_insidethird" style={{fontWeight:'bold'}}>Rs. 45,289.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Billinginfo

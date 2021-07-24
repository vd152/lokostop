import React, { Component } from 'react'
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"
import Header from '../Component/Header/Header'
import Header01 from '../Component/Header/Header01';
import './ProfileIndividual.css'
import { FaBox } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import PopularBox from '../Component/Boxes/PopularBox';
import Footer from '../Component/Footer/Footer'
import Complaint from './Complaint';
import PersonalInfo from './PersonalInfo';
import Wishlist from './Wishlist';
import AddressProfile from './AddressProfile';
import {logoutUser} from '../../Redux/Actions/UserActions'

class ProfileIndividual extends Component {
    state={
        redirect: false
    }
    render() {
        if(this.state.redirect){
            return <Redirect to="/" />
        }
        return (
            <div>
                <Header01></Header01>
                <Header></Header>
                <div className="Heading_about">
                    <p>PROFILE</p>
                    <hr />
                </div>
                <div className="profileOuterMainBOx">
                    <div className="firstboxprofile">
                        <div className="name_individual_Hi">
                            <div className="image_user1" ><img   alt='reload' style={{ cursor: 'pointer' }} src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img></div>
                            <div className="name_hi">
                                <p className="himessage">Hi,</p>
                                <p className="nameperson">ABCDEF</p>
                            </div>
                        </div>
                        <div className='orderboxsummary'>
                            <FaBox className='boxIcon'></FaBox>
                            <p>MY ORDERS</p>
                        </div>
                        <div className='orderboxsummary1'>
                            <MdAccountCircle className='accountIcon'></MdAccountCircle>
                            <p>ACCOUNT SETTINGS</p>
                        </div>
                        <div className="settingcategory">
                            <div className="nav flex-column nav-pills me-3 navcolor" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button className="nav-link active pillval" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Personal Information</button>
                                <button className="nav-link pillval" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">My Address</button>
                                <button className="nav-link pillval" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">My wishlist</button>
                                <button className="nav-link pillval" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Complaints</button>
                            </div>
                        </div>
                        <div className='orderboxsummary1'>
                            <BiLogOut className='accountIcon'></BiLogOut>
                            <p onClick={()=>{
                                this.props.logoutUser()
                                this.setState({redirect: true})
                                }}>LOGOUT</p>
                        </div>
                    </div>
                    <div className="secondBoxprofile">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div  className={this.props.location.wishlistActive? "tab-pane fade": "tab-pane fade show active"} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <PersonalInfo/>
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <AddressProfile/>
                            </div>
                            <div  className={this.props.location.wishlistActive? "tab-pane fade show active": "tab-pane fade"} id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <Wishlist/>
                            </div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <Complaint />
                            </div>
                        </div>
                    </div>
                </div >
                <PopularBox />
                <Footer></Footer>
            </div >
        )
    }
}
const mapStateToProps = (state) =>{
    return {
    }
}
export default connect(mapStateToProps,{logoutUser})(ProfileIndividual)

import React, { Component } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {getTopBrands} from '../../../Redux/Actions/StorefrontActions'
import { connect } from "react-redux";

class TopClients extends Component {
    componentDidMount() {
        this.props.getTopBrands()
    }
    render() {
        return (
            <div>
                <div className="find_by_category_box">
                    <p className="most_viewd_text">Our Top Brands</p>
                    <hr id="line_category"></hr>
                </div>
                <div className="clients_name">
                    <img className='client_icon' src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvZ29zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD"></img>
                    <img className='client_icon' src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvZ29zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD"></img>
                    <img className='client_icon' src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvZ29zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD"></img>
                    <img className='client_icon' src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvZ29zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD"></img>
                    <img className='client_icon' src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvZ29zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD"></img>



                </div>
                <p className="para_client">We provide our clients with bulk buying for their desired amount. See what our biggest clients have to say about us below.</p>
                <button className="start_buying">Start bulk buying<IoIosArrowForward id="Arrow_buying" /></button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      brandsLoading: state.getTopBrands.loading,
      topBrands: state.getTopBrands.topBrands   
    };
  };
export default connect(mapStateToProps, {getTopBrands})(TopClients)

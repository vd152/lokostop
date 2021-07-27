import React, { Component } from 'react'
import { FiMinusCircle } from "react-icons/fi";
import { IoAddCircleOutline, IoCloseCircleSharp } from "react-icons/io5";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import {deleteFromCart} from '../../Redux/Actions/CartActions'

class CartItem extends Component {
    render() {
        return (
            <div className="tble_box">
                        <table className="col_names">
                            <tbody>
                            <tr className="table_heading">
                                <td className="product_image">PRODUCT IMAGE</td>
                                <td className="product_Name">PRODUCT NAME</td>
                                <td className="product_avail">AVAILABILITY</td>
                                <td className="product_price">UNIT PRICE</td>
                                <td className="product_quantity">QUANTITY</td>
                                <td className="product_subtotal">SUBTOTAL</td>
                            </tr>
                            {this.props.cart.map((product,key)=>{
                                return (
                            <tr className="table_heading1" key={key}>
                                <td className="product_image1"><img src={product.baseImage && product.baseImage.image?"https://api.lokostop.in/"+product.baseImage.image: "https://via.placeholder.com/150"} alt='Reload'></img></td>
                                <td className="product_Name1">
                                    <p className="product_para_1">{product.name}</p>
                                    <p className="product_para_2">Tags: First tag, Second tag</p>
                                    <Link to={"/product/"+product.url+"/"+product._id}><p className="product_para_3">View Detail</p></Link>
                                </td>
                                <td className="product_avail1">{product.stockAvailability?"Available":"Out of Stock"}</td>
                                <td className="product_price1">Rs.{product.specialPrice?(product.specialPriceType == "Fixed"?product.specialPrice:((product.price).toString()-((product.specialPrice).toString()/100)*(product.price).toString())):product.price}</td>
                                <td className="product_quantity1">
                                    <FiMinusCircle id="minus_icon"></FiMinusCircle>
                                    <p className="product_quant_para">01</p>
                                    <IoAddCircleOutline id="add_icon" />
                                </td>
                                <td className="product_subtotal1">
                                    <p className="product__sub_para">Rs. 4,999.00</p>
                                    <IoCloseCircleSharp id="closeIcon" onClick={(e)=>{
                                        this.props.deleteFromCart(product._id)
                                    }}/>
                                </td>
                            </tr>
                            )})}
                          </tbody>
                        </table>
                        <div className="button_box_1">
                                <button id="continue_shopping"> Continue Shopping</button>
                                <button id="cartUpdate">Update Cart</button>
                            </div>

                    </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      cart: state.userCart.cart,
    };
  };
export default connect(mapStateToProps, {deleteFromCart})(CartItem)

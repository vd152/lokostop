import * as actionTypes from '../Constants/ShopConstants'
import api from '../../Apis/api'
import {getUser} from '../../Utils/Local'

export const getCart = () => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_CART_REQUEST})
        let url = "/users/get/"+getUser()
        const {data} = await api.get(url)
        data.data.Cart.forEach(item=>{
            item.couponDiscount = 0;
            item.totalPrice = item.product.specialPrice
            ? item.product.specialPriceType == "Fixed"
              ? item.product.specialPrice * item.qty
              : (item.product.price.toString() -
                (item.product.specialPrice.toString() / 100) *
                item.product.price) *
              item.qty.toString()
            : item.product.price * item.qty;
            
        })
        dispatch({
            type: actionTypes.GET_CART_SUCCESS,
            payload: data.data.Cart
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_CART_FAIL,
            payload: "something went wrong"
        })
    }
}

export const addToCart = (productId,qty,stockId) => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.ADD_CART_REQUEST})
        const {data} = await api.put('/customer/cart', {productId, qty,stockId})
        data.data.Cart.forEach(item=>{
            item.couponDiscount = 0;
            item.totalPrice = item.product.specialPrice
            ? item.product.specialPriceType == "Fixed"
              ? item.product.specialPrice * item.qty
              : (item.product.price.toString() -
                (item.product.specialPrice.toString() / 100) *
                item.product.price) *
              item.qty.toString()
            : item.product.price * item.qty
        })
        dispatch({
            type: actionTypes.ADD_CART_SUCCESS,
            payload: data.data.Cart
        })
    }catch(error){
        dispatch({
            type: actionTypes.ADD_CART_FAIL,
            payload: "something went wrong"
        })
    }
}
export const updateCartQty = (productId, qty) => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.ADD_CART_REQUEST})
        const {data} = await api.put('/customer/cart/increase', {productId, qty})
        data.data.Cart.forEach(item=>{
            item.couponDiscount = 0;
            item.totalPrice = item.product.specialPrice
            ? item.product.specialPriceType == "Fixed"
              ? item.product.specialPrice * item.qty
              : (item.product.price.toString() -
                (item.product.specialPrice.toString() / 100) *
                item.product.price) *
              item.qty.toString()
            : item.product.price * item.qty
        })
        dispatch({
            type: actionTypes.ADD_CART_SUCCESS,
            payload: data.data.Cart
        })
    }catch(error){
        dispatch({
            type: actionTypes.ADD_CART_FAIL,
            payload: "something went wrong"
        })
    }
}
export const deleteFromCart = (productId) => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.DELETE_CART_REQUEST})
        const {data} = await api.delete('/customer/cart', {data:{productId}})
        dispatch({
            type: actionTypes.DELETE_CART_SUCCESS,
            payload: data.data.Cart
        })
    }catch(error){
        dispatch({
            type: actionTypes.DELETE_CART_FAIL,
            payload: "something went wrong"
        })
    }
}


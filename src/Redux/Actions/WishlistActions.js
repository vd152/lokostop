import * as actionTypes from '../Constants/WishlistConstants'
import api from '../../Apis/api'
import {getUser} from '../../Utils/Local'

export const getWishlist = () => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_WISHLIST_REQUEST})
        let url = "/users/get/"+getUser()
        const {data} = await api.get(url)
        dispatch({
            type: actionTypes.GET_WISHLIST_SUCCESS,
            payload: data.data.Wishlist
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_WISHLIST_FAIL,
            payload: "something went wrong"
        })
    }
}

export const addToWishlist = (productId) => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.ADD_WISHLIST_REQUEST})
        const {data} = await api.put('/customer/wishlist', {productId})
        dispatch({
            type: actionTypes.ADD_WISHLIST_SUCCESS,
            payload: data.data.Wishlist
        })
    }catch(error){
        dispatch({
            type: actionTypes.ADD_WISHLIST_FAIL,
            payload: "something went wrong"
        })
    }
}

export const deleteFromWishlist = (productId) => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.DELETE_WISHLIST_REQUEST})
        const {data} = await api.delete('/customer/wishlist', {productId})
        dispatch({
            type: actionTypes.DELETE_WISHLIST_SUCCESS,
            payload: data.data.Wishlist
        })
    }catch(error){
        dispatch({
            type: actionTypes.DELETE_WISHLIST_FAIL,
            payload: "something went wrong"
        })
    }
}


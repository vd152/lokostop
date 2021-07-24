import * as actionTypes from '../Constants/ProductConstants'
import api from '../../Apis/api'

export const getAllProducts = () => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST})
        const {data} = await api.post('/product/get')
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data.data
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: "something went wrong"
        })
    }
}

export const getSingleProduct = (id) => async(dispatch) => {
    try{
        let url = '/product/get/'+id
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST})
        const {data} = await api.get(url)
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data.data
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: "something went wrong"
        })
    }
}
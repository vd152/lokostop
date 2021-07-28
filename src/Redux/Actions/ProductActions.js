import * as actionTypes from '../Constants/ProductConstants'
import api from '../../Apis/api'


export const getProductDetails = (id) => async(dispatch) => {
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
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
export const getTags = () => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_TAGS_REQUEST})
        const {data} = await api.post('/tag/get', {sortBy: "name"})
        dispatch({
            type: actionTypes.GET_TAGS_SUCCESS,
            payload: data.data
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_TAGS_FAIL,
            payload: "something went wrong"
        })
    }
}
export const postReview = (review, productId) =>{
    try{
        const {data } = api.post('/review', {data:review, productId, requiredPermission: "Create Review"})
        console.log(data)
    }catch(err){
        console.log(err)
    }
}
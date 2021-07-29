import * as actionTypes from '../Constants/CategoryConstants'
import api from '../../Apis/api'

export const getAllCategories = () => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_CATEGORIES_REQUEST})
        const {data} = await api.get('/category/get')
        dispatch({
            type: actionTypes.GET_CATEGORIES_SUCCESS,
            payload: data.data
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_CATEGORIES_FAIL,
            payload: "something went wrong"
        })
    }
}

export const getCategoryProducts = (sortBy, skipNumber, limitNumber, name, id, searchWord) => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_CATEGORY_PRODUCTS_REQUEST})
        let findFieldsInArray = [
            {
                name: name,
                value: [id]
            }
        ]
        
        const {data} = await api.post('product/filter', {sortBy, skipNumber, limitNumber,searchWord, findFieldsInArray })
        dispatch({
            type: actionTypes.GET_CATEGORY_PRODUCTS_SUCCESS,
            payload: data.data
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_CATEGORY_PRODUCTS_FAIL,
            payload: "something went wrong"
        })
    }
}

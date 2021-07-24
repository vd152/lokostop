import * as actionTypes from '../Constants/PageConstants'
import api from '../../Apis/api'

export const getAllPages = () => async(dispatch) => {
    // try{
    //     dispatch({ type: actionTypes.GET_PAGES_REQUEST})
    //     const {data} = await api.post('/page/get')
    //     console.log(data)
    //     dispatch({
    //         type: actionTypes.GET_PAGES_SUCCESS,
    //         payload: data.data
    //     })
    // }catch(error){
    //     dispatch({
    //         type: actionTypes.GET_PAGES_FAIL,
    //         payload: "something went wrong"
    //     })
    // }
}

import * as actionTypes from '../Constants/UserConstants'
import api from '../../Apis/api'
import {setUserDetails, setAuthToken, removeUserDetails, removeAuthToken, setUser, removeUser} from '../../Utils/Local'

export const loginUser = (email, password) => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_LOGIN_REQUEST})
        let reqData = { Email: email, Password: password}
        const {data} = await api.post('/users/login', {data: reqData})
        setAuthToken(data.data.token);
        setUser(data.data._id)
        dispatch({
            type: actionTypes.GET_LOGIN_SUCCESS,
            payload: data.data
        })
        window.location.reload()
    }catch(error){
        dispatch({
            type: actionTypes.GET_LOGIN_FAIL,
            payload: "something went wrong"
        })
    }
}


export const registerUser = (user) => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_LOGIN_REQUEST})
        const {data} = await api.post('/users/', {data: user, isCustomer: true})
        setAuthToken(data.data.token);
        setUser(data.data._id)
        dispatch({
            type: actionTypes.GET_LOGIN_SUCCESS,
            payload: data.data
        })
        window.location.reload()
    }catch(error){
        dispatch({
            type: actionTypes.GET_LOGIN_FAIL,
            payload: "something went wrong"
        })
    }
}

export const logoutUser = () => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_LOGOUT_REQUEST})
        removeAuthToken()
        // removeUserDetails()
        removeUser()
        dispatch({
            type: actionTypes.GET_LOGOUT_SUCCESS,
        })
        dispatch({
            type: actionTypes.REMOVE_USER_DETAILS_SUCCESS,
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_LOGOUT_FAIL,
            payload: "something went wrong"
        })
    }
}

export const getUser = (id) => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_USER_DETAILS_REQUEST})
        let url = "/users/get/"+id
        const {data} = await api.get(url)
        dispatch({
            type: actionTypes.GET_USER_DETAILS_SUCCESS,
            payload: data.data
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_USER_DETAILS_FAIL,
            payload: "something went wrong"
        })
    }
}


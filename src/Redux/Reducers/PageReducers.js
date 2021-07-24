import * as actionTypes from '../Constants/PageConstants'

export const getAllPagesReducer = (state = { pages: []}, action) => {
    switch(action.type){
        case actionTypes.GET_PAGES_REQUEST:
            return{
                loading: true,
                pages: []
            }
        case actionTypes.GET_PAGES_SUCCESS:
            return {
                loading: false,
                pages: action.payload
            }
        case actionTypes.GET_PAGES_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

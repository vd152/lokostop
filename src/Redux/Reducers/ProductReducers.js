import * as actionTypes from '../Constants/ProductConstants'



export const getTagsReducer = (state = {tags:[]}, action) => {
    switch(action.type){
        case actionTypes.GET_TAGS_REQUEST:
            return{
                loading: true,
                tags: []
            }
        case actionTypes.GET_TAGS_SUCCESS:
            return {
                loading: false,
                tags: action.payload
            }
        case actionTypes.GET_TAGS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
import * as actionTypes from '../Constants/StorefrontConstants'

export const getFooterReducer = (state = { footerData: {}}, action) => {
    switch(action.type){
        case actionTypes.GET_FOOTER_REQUEST:
            return{
                loading: true,
                footerData: { }
            }
        case actionTypes.GET_FOOTER_SUCCESS:
            return {
                loading: false,
                footerData: action.payload
            }
        case actionTypes.GET_FOOTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getProductTabsReducer = (state = { allTabs: [{SectionStatus: false},{SectionStatus: false}, {SectionStatus: false}], loading: true}, action) => {
    switch(action.type){
        case actionTypes.GET_PRODUCT_TABS_REQUEST:
            return{
                loading: true,
                allTabs: [{SectionStatus: false},{SectionStatus: false}, {SectionStatus: false}]
            }
        case actionTypes.GET_PRODUCT_TABS_SUCCESS:
            return {
                loading: false,
                allTabs: action.payload
            }
        case actionTypes.GET_PRODUCT_TABS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getFeaturesReducer = (state = { features: {}}, action) => {
    switch(action.type){
        case actionTypes.GET_FEATURES_REQUEST:
            return{
                loading: true,
                features: { }
            }
        case actionTypes.GET_FEATURES_SUCCESS:
            return {
                loading: false,
                features: action.payload
            }
        case actionTypes.GET_FEATURES_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getLogosReducer = (state = { logos: {}}, action) => {
    switch(action.type){
        case actionTypes.GET_LOGO_REQUEST:
            return{
                loading: true,
                logos: { }
            }
        case actionTypes.GET_LOGO_SUCCESS:
            return {
                loading: false,
                logos: action.payload
            }
        case actionTypes.GET_LOGO_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
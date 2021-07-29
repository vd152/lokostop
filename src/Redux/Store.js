import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getProductDetailsReducer} from './Reducers/ProductReducers'
import {getFooterReducer, getProductTabsReducer, getFeaturesReducer, getLogosReducer, getBannersReducer, getBrandsReducer, getTopBrandsReducer} from './Reducers/StorefrontReducer'
import {getAllCategoriesReducer, getCategoryProductsReducer} from './Reducers/CategoryReducers'
import {getPageReducer} from './Reducers/PageReducers'
import {loginUser, getUserDetailsReducer} from './Reducers/UserReducers'
import {getMenuReducer} from './Reducers/MenuReducers'
import {wishlistReducer} from './Reducers/WishlistReducers'
import {cartReducer} from './Reducers/CartReducers'


const reducers = combineReducers({
    getProductDetails: getProductDetailsReducer,
    getFooter: getFooterReducer,
    getLogos: getLogosReducer,  
    getProductTabs: getProductTabsReducer,
    getFeatures: getFeaturesReducer,
    getCategories: getAllCategoriesReducer,
    getPage: getPageReducer,
    getMenus: getMenuReducer,
    getCategoryProducts: getCategoryProductsReducer,
    loginUser: loginUser,
    getUser: getUserDetailsReducer,
    userWishlist: wishlistReducer,
    userCart: cartReducer,
    getBanners: getBannersReducer,
    getBrands: getBrandsReducer,
    getTopBrands: getTopBrandsReducer
})

const middleware = [thunk]

const Store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware)),
)

export default Store;
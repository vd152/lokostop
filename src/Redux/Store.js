import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllProductsReducer, getProductDetailsReducer} from './Reducers/ProductReducers'
import {getFooterReducer, getProductTabsReducer, getFeaturesReducer, getLogosReducer} from './Reducers/StorefrontReducer'
import {getAllCategoriesReducer, getCategoryProductsReducer} from './Reducers/CategoryReducers'
import {getAllPagesReducer} from './Reducers/PageReducers'
import {loginUser, getUserDetailsReducer} from './Reducers/UserReducers'
import {getMenuReducer} from './Reducers/MenuReducers'
import {wishlistReducer} from './Reducers/WishlistReducers'

const reducers = combineReducers({
    getProducts: getAllProductsReducer,
    getProductDetails: getProductDetailsReducer,
    getFooter: getFooterReducer,
    getLogos: getLogosReducer,  
    getProductTabs: getProductTabsReducer,
    getFeatures: getFeaturesReducer,
    getCategories: getAllCategoriesReducer,
    getPages: getAllPagesReducer,
    getMenus: getMenuReducer,
    getCategoryProducts: getCategoryProductsReducer,
    loginUser: loginUser,
    getUser: getUserDetailsReducer,
    userWishlist: wishlistReducer
})

const middleware = [thunk]

const Store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware)),
)

export default Store;
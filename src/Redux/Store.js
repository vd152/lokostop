import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getTagsReducer} from './Reducers/ProductReducers'
import {getGeneralReducer, getFooterReducer, getProductTabsReducer, getFeaturesReducer, getLogosReducer, getBannersReducer, getBrandsReducer, getTopBrandsReducer} from './Reducers/StorefrontReducer'
import {getAllCategoriesReducer, getSectionProductsReducer} from './Reducers/CategoryReducers'
import {getPageReducer} from './Reducers/PageReducers'
import {loginUser, getUserDetailsReducer, editUserDetailsReducer} from './Reducers/UserReducers'
import {getMenuReducer} from './Reducers/MenuReducers'
import {wishlistReducer} from './Reducers/WishlistReducers'
import {cartReducer} from './Reducers/CartReducers'
import { saveOrderReducer} from './Reducers/OrderReducers'
import {getSettingsReducer} from './Reducers/SettingsReducer'
import {getBlogsReducer} from './Reducers/BlogReducers'

const reducers = combineReducers({
    getStore: getGeneralReducer,
    getFooter: getFooterReducer,
    getLogos: getLogosReducer,  
    getProductTabs: getProductTabsReducer,
    getFeatures: getFeaturesReducer,
    getCategories: getAllCategoriesReducer,
    getPage: getPageReducer,
    getMenus: getMenuReducer,
    getSectionProducts: getSectionProductsReducer,
    getTags: getTagsReducer,
    loginUser: loginUser,
    getUser: getUserDetailsReducer,
    editUser: getUserDetailsReducer,
    userWishlist: wishlistReducer,
    userCart: cartReducer,
    getBanners: getBannersReducer,
    getBrands: getBrandsReducer,
    getTopBrands: getTopBrandsReducer,
    saveOrder: saveOrderReducer,
    getSettings: getSettingsReducer,
    getBlogs: getBlogsReducer,
})


const Store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
)

export default Store;
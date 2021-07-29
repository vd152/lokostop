import React from 'react';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './Routes/PrivateRoute';
import ScrollToTop from './Container/Scrolltotop';
import Home from './Container/Home/Home';
import Blog from './Container/Blog/Blog';
import Compare from './Container/Compare/Compare';
import BlogMain from './Container/Blog/BlogMain';
import IndividualProduct from './Container/ProductIndividual/IndividualProduct';
import AboutUs from './Container/About/AboutUs';
import Section from './Container/Section/Section';
import ComingSoon from './Container/ComingSoon/ComingSoon';
import 'semantic-ui-css/semantic.min.css';
import Cart from './Container/Cart/Cart';
import paymentCart from './Container/Cart/paymentCart';
import ProfileIndividual from './Container/Profile/ProfileIndividual';
import sendQuery from './Container/Query/sendQuery';
import Loader from './Container/Loader/Loader';
import {getAllCategories} from './Redux/Actions/CategoryActions'
import {getFooterDetails, getProductTabs, getLogos} from './Redux/Actions/StorefrontActions'
import {getMenus} from './Redux/Actions/MenuActions'
import {getUser} from './Redux/Actions/UserActions'
import {getWishlist} from './Redux/Actions/WishlistActions'
import {getCart} from './Redux/Actions/CartActions'
import {getUser as getUserId } from './Utils/Local'
import { NotFound } from './Utils/NotFound';
import Page from './Container/Page/Page';
class App extends React.Component {
  componentDidMount(){
    this.props.getFooterDetails()
    this.props.getLogos()
    this.props.getAllCategories()
    this.props.getMenus()
    if(getUserId()){
      this.props.getUser(getUserId())
      this.props.getWishlist()
      this.props.getCart()
    }
  }
  render(){
    if(this.props.footerLoading || this.props.categoriesloading || this.props.menuLoading || this.props.logoLoading || this.props.userLoading){
      return <Loader />
  }
    return (
      <div className="App">
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blogs" component={Blog} />
            <Route path="/compare" component={Compare} />
            <Route path="/blogIndividual" component={BlogMain} />
            <Route path="/product/:url/:id" component={IndividualProduct} />
            <Route path='/aboutUs' component={AboutUs} />
            <Route path='/ComingSoon' component={ComingSoon} />
            <Route path='/cart' component={Cart} />
            <Route path='/payment' component={paymentCart} />
            <PrivateRoute path='/profile' component={ProfileIndividual}></PrivateRoute>
            <Route path='/sendquery' component={sendQuery} />
            <Route exact path="/page/:url" component={(props)=> <Page key={Date.now()} {...props}/>}/>
            <Route exact path='/:fieldname/:fieldurl/:id' render={(props)=> <Section key={Date.now()} {...props}/>}/>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  } 
}
const mapStateToProps = state =>{
  return {
      footerLoading: state.getFooter.loading,
      categoriesloading: state.getCategories.loading,
      menuLoading: state.getMenus.loading,
      logoLoading: state.getLogos.loading,
      userLoading: state.getUser.loading
  }
}
export default connect(mapStateToProps, {getFooterDetails, getAllCategories, getMenus, getLogos, getUser, getWishlist,getCart})(App)


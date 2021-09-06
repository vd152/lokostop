import React, { Component } from 'react'
import './Compare.css'
import { Link, Redirect } from "react-router-dom";
import Header from '../Component/Header/Header'
import { BiCart } from "react-icons/bi";
import Footer from '../Component/Footer/Footer';
import FindByCategory from '../Component/Boxes/FindByCategory';
import Product from '../Component/Product';
import Header01 from '../Component/Header/Header01';
import PopularBox from '../Component/Boxes/PopularBox';
import api from '../../Apis/api'
import Loader from '../Loader/Loader';
import {modifyCompare} from '../../Redux/Actions/ProductActions'
import { connect } from "react-redux";
class Compare extends Component {
    state={
        products: [],
        loading: true,
        redirect: false,
        url: ""
    }
    componentDidMount() {
        const {products} = this.state
        if(this.props.match.params.products != "empty"){
            
            this.props.match.params.products.split('%2C').forEach(id=>{
                api.get("/product/get/"+id).then(res=>{
                    console.log(res.data.data)
                    products.push(res.data.data)
                    this.setState({loading: false})
                }).catch(err => {
                    console.log(err)
                    this.setState({loading: false})
                    
                })
            })
        }else{
            this.setState({loading: false})
        }
        this.setState({products}) 
    }
    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.url}/>
        }
        if(this.state.loading){
            return <Loader />
        }
        return (
            <div>
                <Header01 />
                <Header />
                <div className="Heading_about compare">
                    <p>COMPARE</p>
                    <hr />
                </div>
                {this.props.match.params.products == "empty"? <div className="compare_container text-center justify-content-center p-4" style={{fontSize: "24px"}}><i>Add products to compare</i></div>:
                <div className="compare_container">
                <div className="left_compare">
            <div className="text">

                <p className="contact_details_compare" > Connect to shop: <br/> +91-9809890982</p>
            </div>
                <div className="specification_box_one">
                                <p className="p-2">Specifications</p>
                                <ul>
                                    <li>First heading</li>
                                    <li>First heading</li>
                                </ul>
                            </div>
                            <div className="button_box">
                            
                            </div>
                </div>
                <div className="top_compare">   
                {!this.state.loading && this.state.products.map((product, key)=>{
                    return (
                        <div className="product_display_comparing" key={key}>
                    <div className="compare_box">
                        <div className="product">
                        <Product hidetop={true} product={product}/>
                        <div className="specification_box_one">
                                <p></p>
                                <ul>
                                    <li>First heading</li>
                                    <li>First heading</li>
                                </ul>
                            </div>
                            <div className="button_box">
                            <Link to={"/product/"+product.url+"/"+product._id}>
                                <button className="add_to_cart_compare">
                                    <p>VIEW PRODUCT</p>
                                    <BiCart style={{
                                        color: 'white',
                                        marginLeft: '0.439vw',
                                        marginTop: '0.366vw',
                                        fontSize: '1.3vw'
                                    }} />
                                </button>
                                </Link>
                                <button id="remove_button" onClick={(e)=>{
                                    let arr = this.props.compareProducts
                                    arr.splice(arr.indexOf(product._id), 1);
                                    this.props.modifyCompare(arr);
                                    let url;
                                    if(arr.length > 0){
                                        url = "/compare/"+arr.join('%2C')
                                    }else{
                                        url = "/compare/empty"
                                    }
                                    this.setState({url: url, redirect: true})
                                }}>REMOVE</button>
                            </div>
                        </div>
                        
                    </div>
                </div> 
                    )
                })}
                    
                </div>
             </div>
    }
           
                <FindByCategory />
                <PopularBox/>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      compareProducts: state.compareProducts.products
    };
  };
  export default connect(mapStateToProps, { modifyCompare })(Compare);

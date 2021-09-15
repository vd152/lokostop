import Product from '../Product';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { Component } from 'react'

class CategoryRowBox extends Component {
    state={
        select: {},
        products: [],
        tabs: []
    }
    componentDidMount(){
        const {select, tabs} = this.state;
        this.props.products?.Tabs?.forEach(tab =>{
            select[tab._id] = tab.Products
            let tmp = {
                id: tab._id,
                title: tab.Title,
            }
            tabs.push(tmp);
        })
        this.setState({select, tabs, products: select[Object.keys(select)[0]]});
    }
    render() {
        return (
            this.props.products.SectionStatus ?
            <React.Fragment>
                <div className="new_Arrivals">
                    <p className="new_Arrival_text">New Arrivals</p>
                    <hr id="line_1"></hr>
                    <div className="list_names">
                        <ul>
                            {this.state.tabs.map((tab,key)=>{
                                return <li className="px-md-1 px-lg-3" key={key} onClick={(e)=>{
                                    console.log(this.state.select[tab.id])
                                    this.setState({products: this.state.select[tab.id]})
                                }}>{tab.title}</li>
                            })}
                            
                        </ul>
                    </div>
                    <div id="arrow_box">
                        <IoIosArrowBack id="Arrow_forward" />
                        <IoIosArrowForward id="Arrow_backward" />
                    </div>
                </div>
                <div className="new_arrival_box">
                    {this.state.products?.map((product,key)=>{
                        return <Product key={key} product={product} category={false}/>
                    })}
                    {this.state.products.length == 0 && <div>No Products Found</div>}
                   
                </div>
                </React.Fragment>: <React.Fragment></React.Fragment>
    
        )
    }
}

export default CategoryRowBox

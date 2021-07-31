import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'


class TwoColBanner extends Component {
    componentDidMount() {
        console.log(this.props.banners)
    }
    render() {
        return (
            <div className="image_about d-flex two-col-banner">
                {!this.props.bannersLoading && this.props.banners.Banners? 
                this.props.banners.Banners[2].SectionStatus?this.props.banners.Banners[2].Banners.map((banner,key)=>{
                    return  <Link className="two-banner" to={banner.CalltoActionURL} key={key} target={banner.OpenInNewWindow?"_blank":"_self"}>
                     <img  src={banner.Image.image?"https://api.lokostop.in/"+banner.Image.image: "https://via.placeholder.com/150"} alt="Reload" />
                     </Link>
                }) :""
                :""}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      bannersLoading: state.getBanners.loading,
      banners: state.getBanners.banners
    };
  };
  export default connect(mapStateToProps)(TwoColBanner);
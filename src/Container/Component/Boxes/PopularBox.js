import PopularCategories from '../PopularCategories'
import React, { Component } from 'react'

export class PopularBox extends Component {
    render() {
        return (
            <div>
             <div className="find_by_category_box">
                    <p className="most_viewd_text">Popular categories</p>
                    <hr id="line_category"></hr>
                </div>
                <div className="new_arrival_box">
                    <PopularCategories />
                    <PopularCategories />
                    <PopularCategories />
                    <PopularCategories />
                </div>
        </div>
        )
    }
}

export default PopularBox

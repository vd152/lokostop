import React, { Component } from 'react'

export class PopularCategories extends Component {
    render() {
        return (
            <div className="particular_popular_categories">
                <p className="image_popular"><img src="https://images.unsplash.com/photo-1571400957246-691d35e10b5d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGhlYWRwaG9uZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" /></p>
                <p className="name_popular_cat">Phone and accessories</p>
                <p className="cat_details_pop">Hot categories</p>
                <p className="cat_details_pop">Outwear and Jackets</p>
                <p className="cat_details_pop">Wedding and Events</p>
                <p className="cat_details_pop">Bottoms</p>
                <p className="view_all">View all</p>
            </div>
        )
    }
}

export default PopularCategories

import React, { Component } from 'react'

export class SingleBlog extends Component {
    render() {
        return (
            <div className="blogcard">
                <div className="imagebox">
                    <p className="blogpara">Preview</p>
                    <img className='image_blog' src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                </div>
                <p className="blogHeading">Heading of the article - 15 size, maximum in 2 lines like this.</p>
                <div className="name_time">
                    <p>by Mohit Gopal</p>
                    <p>5 mins</p>
                </div>
            </div>
        )
    }
}

export default SingleBlog

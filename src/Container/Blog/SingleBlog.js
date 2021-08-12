import React, { Component } from 'react'
 class SingleBlog extends Component {
    state={blog: {}}
    componentDidMount(){
        this.setState({blog: this.props.blog});
    }
    render() {
        return (
            <div className="blogcard">
                <div className="imagebox">
                    <p className="blogpara">View</p>
                    <img className='image_blog' src={this.state.blog.img? "https://api.lokostop.in/"+this.state.blog.img.image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} alt="RELOAD" />
                </div>
                <p className="blogHeading">{this.state.blog.heading}</p>
                <div className="name_time">
                    <p>by Mohit Gopal</p>
                    <p>5 mins</p>
                </div>
            </div>
        )
    }
}

export default SingleBlog

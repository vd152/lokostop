import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export class VideoContainer extends Component {
    render() {
        return (
            <div>
                {/* <div className="video_container"> */}
                    {/* <img src="https://images.unsplash.com/photo-1556740772-1a741367b93e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3MlMjBzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" /> */}
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 video_container"
                                src="https://images.unsplash.com/photo-1556740772-1a741367b93e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3MlMjBzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&autohttps://images.unsplash.com/photo-1556740772-1a741367b93e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3MlMjBzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>First slide label</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 video_container"
                                src="https://images.unsplash.com/photo-1556740772-1a741367b93e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3MlMjBzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5>Second slide label</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 video_container"
                                src="https://images.unsplash.com/photo-1556740772-1a741367b93e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3MlMjBzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5>Third slide label</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                {/* </div> */}
                {/* <video className='video_container' muted="true" autoplay playsinline loop  >
                    <source src="https://giant.gfycat.com/VerifiableTerrificHind.mp4" type="video/mp4" />
                    <source src="https://giant.gfycat.com/VerifiableTerrificHind.webm" type="video/webm" />
                </video> */}
            </div>

        )
    }
}

export default VideoContainer

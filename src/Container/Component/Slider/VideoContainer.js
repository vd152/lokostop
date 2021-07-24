import React, { Component } from 'react'

export class VideoContainer extends Component {
    render() {
        return (
            <div>
                <div className="video_container">
                    <img src="https://images.unsplash.com/photo-1556740772-1a741367b93e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3MlMjBzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                </div>
                {/* <video className='video_container' muted="true" autoplay playsinline loop  >
                    <source src="https://giant.gfycat.com/VerifiableTerrificHind.mp4" type="video/mp4" />
                    <source src="https://giant.gfycat.com/VerifiableTerrificHind.webm" type="video/webm" />
                </video> */}
            </div>

        )
    }
}

export default VideoContainer

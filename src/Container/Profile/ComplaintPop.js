import React, { Component } from 'react'

export class ComplaintPop extends Component {
    render() {
        return (
            <div>
            <button style={{outline:'none'}} type="button" className="btn complaintbutton" data-bs-toggle="modal" data-bs-target="#exampleModal">
            WRITE COMPLAINT
            </button>

            <div style={{background:' rgb(0,0,0,0.7)'}} className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div style={{marginTop: '34%'}}className="modal-content">
                        <div style={{borderBottom:'none'}} className="modal-header">
                            <h5 className="Heading_add_blog" id="exampleModalLabel">COMPLAINT SECTION</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                        </div>
                        <div style={{borderTop:'none' , paddingBottom: "1vw",
                                paddingLeft: "0"}}  className="modal-footer">
                            <button type="button" className="btn cancelBlog" data-bs-dismiss="modal">Cancel Complaint</button>
                            <button type="button" className="btn shareblog">Share Complaint</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ComplaintPop

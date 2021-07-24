import React, { Component } from 'react'
import ComplaintPop from './ComplaintPop';

export class Complaint extends Component {
    render() {
        return (
            <div>
                <p className='complaintshead' style={{ marginTop: '2%' }}>My Complaints</p>
                <div className="tble_box1complaint">
                    <table className="col_names1">
                        <tbody>
                        <tr className="table_headingnew">
                            <td className="product_imagecomplaint">S.No</td>
                            <td className="product_Namecomplaint">Complaint Heading</td>
                            <td className="product_availnewcomplaint">Complaint ID</td>
                            <td className="product_codenewcomplaint">Status</td>
                            <td className="product_pricenewcomplaint">Replied</td>
                        </tr>
                        <tr className="table_heading2">
                            <td className="product_image1complaint">1</td>
                            <td className="product_Name1complaint">
                                My LG washing machine is not working properly
                            </td>
                            <td className="product_avail1newcomplaint">8273791MG</td>
                            <td className="product_code1complaint">Sent</td>
                            <td className="product_price1newcomplaint">
                                <div className="save_box">
                                    <select className="dropdown_colors1" >
                                        <option value="WH">Yes</option>
                                        <option value="BL">No</option>
                                    </select>
                                </div>
                            </td>
                            <td className="product_quantity1newcomplaint">
                                View Details
                            </td>
                        </tr>
                        <tr className="table_heading2">
                            <td className="product_image1complaint">1</td>
                            <td className="product_Name1complaint">
                                My LG washing machine is not working properly
                            </td>
                            <td className="product_avail1newcomplaint">8273791MG</td>
                            <td className="product_code1complaint">Sent</td>
                            <td className="product_price1newcomplaint">
                                <div className="save_box">
                                    <select className="dropdown_colors1" >
                                        <option value="WH">Yes</option>
                                        <option value="BL">No</option>
                                    </select>
                                </div>
                            </td>
                            <td className="product_quantity1newcomplaint">
                                View Details
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <ComplaintPop />
                <p className='mailId'>Write to us at lokostop1@gmail.com</p>
            </div>
        )
    }
}

export default Complaint

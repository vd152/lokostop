import React, { Component } from 'react'
import './AddressProfile.css'
export class AddressProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { disabled: true }
    }
    handleGameClik() {
        this.setState({ disabled: !this.state.disabled })
    }
    render() {
        return (
            <div>
                <div className="headingPersonalEdit">
                    <p className="headPersonal">
                        My Address
                    </p>
                    <p className="headedit" onClick={this.handleGameClik.bind(this)}>
                        Edit
                    </p>
                </div>
                <div className="inputboxpersonal">
                    <div className="namefulllast">
                        <input type="text" name="firstLine" id='firstLine' placeholder='First Line' className="personalInput" disabled={(this.state.disabled) ? "disabled" : ""} />
                        <input type="text" name="SecondLine" id='SecondLine' placeholder='Second Line' className="personalInput" disabled={(this.state.disabled) ? "disabled" : ""} />
                    </div>
                    <div className="namefulllast">
                        <input type="text" name="City" id='City' placeholder='City' className="personalInput" disabled={(this.state.disabled) ? "disabled" : ""} />
                        <input type="text" name="State" id='State' placeholder='State' className="personalInput" disabled={(this.state.disabled) ? "disabled" : ""} />
                    </div>
                    <div className="namefulllast">
                        <input type="text" name="PinCode" id='PinCode' placeholder='Pin Code' className="personalInput" disabled={(this.state.disabled) ? "disabled" : ""} />
                        <input type="text" name="Landmark" id='Landmark' placeholder='Landmark' className="personalInput" disabled={(this.state.disabled) ? "disabled" : ""} />
                    </div>
                </div>
                <p className="check_box" style={{ marginLeft: '3%' }}>
                    <label className="containerCheck">
                        Set this as my default address
                        <input type="checkbox"></input>
                        <span className="checkMark"></span>
                    </label>
                </p>
                <div className="addressradio">
                    
                   <div className="form-check">
                        <input  className="form-check-input colorradio" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label fontP" htmlFor="flexRadioDefault1">
                            569- A Twelfth Floor Ansari Nagar New Delhi - 110029
                        </label>

                    </div>
                    <div className="form-check">
                        <input  className="form-check-input colorradio" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label fontP" htmlFor="flexRadioDefault1">
                            569- A Twelfth Floor Ansari Nagar New Delhi - 110029
                        </label>

                    </div>
                    
                </div>
                <p className='lastLinepersonal'>** All this information will not be shared with anyone. We believe in privacy and it shall be given to all our customers.**</p>
                </div>
                )


    }
}

                export default AddressProfile

import React, { Component } from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import Header01 from '../Component/Header/Header01'
import './sendQuery.css'
export class sendQuery extends Component {
    render() {
        return (
            <div>
                <Header01></Header01>
                <Header></Header>
                <div className="Heading_about">
                    <p>ASK HERE</p>
                    <hr />
                </div>
                <div className="sendquerybox">
                    <p className="sendtext">
                    Loving our products or have a question to ask , write to us and we will revert in less than 24 hours. We accept all kinds of questions and customer reviews.You can also write a mail to the given email addresses separately.
                    </p>
                    <form className = 'formval' action="">
                        <p className="sendtext1">Fill in the details</p>
                        <input type="text" className="sendinput" placeholder='Full Name' ></input>
                        <input type="text" className="sendinput" placeholder='Email' ></input>
                        <input type="text" className="sendinput" placeholder='Order Number' ></input>
                        <input type="text" className="sendinput" placeholder='Country' ></input>
                        <input type="text" className="sendinput" placeholder='Subject' ></input>
                        <textarea className="textarea" maxLength='200' rows='10' placeholder='Write your query here'></textarea>
                        <button className='sendquery'>Send</button>
                    </form>

                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default sendQuery

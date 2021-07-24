import React, { Component } from 'react'

export class Filter extends Component {
    render() {
        return (
            <div className="filterbox">
            <p className="filtersHeading">Filters</p>
            <p className="parafilter">Filter your preference and dig deep to buy what you want</p>
            <div className='filterCategories'>
                <p>Washing machine</p>
                <p>automatic</p>
                <p>20,000</p>
                <p>Black</p>
                <p>Washing machine</p>
            </div>
            <div className="filter">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className='suboptions'>
                                    <div className="form-check">
                                        <input className="form-check-input colorcheck" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label checkfont" htmlFor="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input colorcheck" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label checkfont" htmlFor="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <div className='suboptions'>
                                    <div className="form-check">
                                        <input className="form-check-input colorcheck" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label checkfont " htmlFor="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input colorcheck" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label checkfont" htmlFor="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <div className='suboptions'>
                                    <div className="form-check">
                                        <input className="form-check-input colorcheck" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label checkfont" htmlFor="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input colorcheck" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label checkfont" htmlFor="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Filter

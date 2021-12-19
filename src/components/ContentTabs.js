import React from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from "react-bootstrap/Tab"

function ContentTabs() {
    return (
        <>
            <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
                <Tab eventKey="one" title="First" className='rounded-3'>
                    <img src="images/tab/tab-1.jpg" alt="tv" className='float-start m-3'></img>
                    <p className='pt-3'>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>

                    <div>
                        <ul className='display-inline mt-4 p-0'>
                            <li className="float-start">
                                <div className='mt-2 display-inline'>SHARE</div>
                            </li>
                            <li className="float-start"><i class="fab fa-facebook-f fa-2x ms-2"></i></li>
                            <li className="float-start"><i class="fab fa-twitter fa-2x ms-2"></i></li>
                        </ul>
                    </div>
                </Tab>
                <Tab eventKey="two" title="Second" className='clearfix'>
                    <img src="images/tab/tab-2.jpg" alt="tv" className='float-start m-3'></img>
                    <p className='pt-3'>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>

                    <div>
                        <ul className='display-inline mt-4 p-0'>
                            <li className="float-start">
                                <div className='mt-2 display-inline'>SHARE</div>
                            </li>
                            <li className="float-start"><i class="fab fa-facebook-f fa-2x ms-2"></i></li>
                            <li className="float-start"><i class="fab fa-twitter fa-2x ms-2"></i></li>
                        </ul>
                    </div>
                </Tab>
                <Tab eventKey="three" title="Third">
                    <img src="images/tab/tab-3.jpg" alt="tv" className='float-start m-3'></img>
                    <p className='pt-3'>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>

                    <div>
                        <ul className='display-inline mt-4 p-0'>
                            <li className="float-start">
                                <div className='mt-2 display-inline'>SHARE</div>
                            </li>
                            <li className="float-start"><i class="fab fa-facebook-f fa-2x ms-2"></i></li>
                            <li className="float-start"><i class="fab fa-twitter fa-2x ms-2"></i></li>
                        </ul>
                    </div>
                </Tab>
            </Tabs>
        </>
    )
}

export default ContentTabs

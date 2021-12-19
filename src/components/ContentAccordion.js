import React from 'react'

import Accordion from 'react-bootstrap/Accordion'

function ContentAccordion() {
    return (
        <Accordion className='rounded-3'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>First</Accordion.Header>
                <Accordion.Body>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                    <img src="images/tab/tab-1.jpg" alt="tv"></img>
                    <div className='text-center mt-3 d-flex justify-content-center align-items-center'><div className='m-2'>SHARE</div><i class="fab fa-facebook-f fa-2x m-2"></i><i class="fab fa-twitter fa-2x m-2"></i></div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Second</Accordion.Header>
                <Accordion.Body>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                    <img src="images/tab/tab-2.jpg" alt="tv"></img>
                    <div className='text-center mt-3 d-flex justify-content-center align-items-center'><div className='m-2'>SHARE</div><i class="fab fa-facebook-f fa-2x m-2"></i><i class="fab fa-twitter fa-2x m-2"></i></div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Third</Accordion.Header>
                <Accordion.Body>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                    <img src="images/tab/tab-3.jpg" alt="tv"></img>
                    <div className='text-center mt-3 d-flex justify-content-center align-items-center'><div className='m-2'>SHARE</div><i class="fab fa-facebook-f fa-2x m-2"></i><i class="fab fa-twitter fa-2x m-2"></i></div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default ContentAccordion

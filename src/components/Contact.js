import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contact() {
    return (
        <Container>
            <h1 class="nav_spacer">Submit your details</h1>
            <Row>
                <Col className='contact_info' md={{ span: 6, order: 2 }}>
                    <Col className='contact_info--item'>
                        <i class="fas fa-envelope fa-2x icon_color"></i>
                        Mail
                    </Col>
                    <Col className='contact_info--item'>
                        <i class="fas fa-phone fa-2x icon_color"></i>
                        123456789
                    </Col>
                    <Col className='contact_info--item'>
                        <i class="fas fa-map-marker-alt fa-2x icon_color float-start"></i>
                        <ul>
                            <li>123&nbsp;Some&nbsp;Street</li>
                            <li>Somewhere</li>
                            <li>Some City</li>
                            <li>10000</li>
                        </ul>
                    </Col>
                </Col>


                <Col md={{ span: 6, order: 1 }} className="form__details">
                    <Form>
                        <Form.Group className="mb-3" controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="url">
                            <Form.Label>Website</Form.Label>
                            <Form.Control className='input_website' type="url" placeholder="https://" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Check label="Allow us to sell your personal details to whomever we want" name="consent" type="checkbox" className='pt-2 float-start'></Form.Check>
                        <Button variant="secondary" type="submit" className="w-100 mt-3 p-2">Submit</Button>
                    </Form>
                </Col>
            </Row >
        </Container >
    )
}

export default Contact

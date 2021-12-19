import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contactform() {
    return (
        <>
            <h4 className="mt-5">SUBMIT A COMMENT</h4>

            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Button variant="secondary px-5" type="submit" bg="dark">
                    Send
                </Button>
            </Form>
        </>
    )
}

export default Contactform

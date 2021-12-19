import React from 'react'

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function NewsCard(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <div className="card__header mb-3">Nunc porttitor vel</div>
                <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary" className='w-100 mt-5 p-2'>More</Button>
            </Card.Body>
        </Card>
    )
}

export default NewsCard

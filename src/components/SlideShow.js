import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

function SlideShow() {
    return (
        <Carousel fade nextLabel="" prevLabel="" indicators="false">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/carousel/carousel-1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/carousel/carousel-2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/carousel/carousel-3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default SlideShow

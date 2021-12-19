import React from 'react'
import NewsCard from '../components/NewsCard'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from "react-bootstrap/Button"

function News() {
    return (
        <Container>
            <h1 className='nav_spacer'>News</h1>

            <ButtonGroup className='news__pagebuttons my-4'>
                <Button className='--active'>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
            </ButtonGroup>

            <Row className='news__cards'>

                <NewsCard props image="images/news/news-1.jpg" />


                <NewsCard props image="images/news/news-2.jpg" />


                <NewsCard props image="images/news/news-3.jpg" />


                <NewsCard props image="images/news/news-4.jpg" />


                <NewsCard props image="images/news/news-5.jpg" />


                <NewsCard props image="images/news/news-6.jpg" />


                <NewsCard props image="images/news/news-7.jpg" />


                <NewsCard props image="images/news/news-8.jpg" />

            </Row>
            <ButtonGroup className='news__pagebuttons my-4'>
                <Button className='--active'>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
            </ButtonGroup>
        </Container>
    )
}

export default News

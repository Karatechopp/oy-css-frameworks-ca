import React from 'react'


import Container from 'react-bootstrap/Container'
import ContentTabs from './ContentTabs'
import SlideShow from './SlideShow'
import ContentAccordion from './ContentAccordion'

function Home() {
    return (
        <>
            <Container className='container_slideshow'>
                <SlideShow />
            </Container>

            <Container>
                <h2>We do YAY things</h2>
                <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
            </Container>

            <Container className="d-none d-md-block mt-5">
                <ContentTabs />
            </Container>
            <Container className="d-md-none mt-5">
                <ContentAccordion />
            </Container>
        </>
    )
}

export default Home

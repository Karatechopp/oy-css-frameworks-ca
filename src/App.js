import './sass/style.scss';
import Home from './components/Home';
import News from './components/News';
import Contact from './components/Contact';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <Navbar bg="light" expand="md" fixed="top">
            <Container className='nav__container'>
              <Link to="/"><Navbar.Brand href="/">The YAY Company</Navbar.Brand></Link>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav>
                  <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
                  <Link to="/News"><Nav.Link href="/news">News</Nav.Link></Link>
                  <Link to="/Contact"><Nav.Link href="/Contacts">Contact</Nav.Link></Link>
                </Nav>
                <Form className="d-flex nav__search">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-auto"
                    aria-label="Search"
                  />
                  <Button variant="primary">Go</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/News" element={<News />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>

        </div>
        <footer>
          <Container className='footer'>
            <Col xs={12} sm={true} className='text-center text-sm-start'><i class="fab fa-vimeo-v fa-2x icon_color"></i><i class="fab fa-youtube fa-2x icon_color"></i></Col>
            <Col xs={6} sm={true} className='text-start text-sm-center'>hello@yay.com</Col>
            <Col xs={6} sm={true} className='text-end text-sm-right'>Copyright 2021</Col>
          </Container>
        </footer>
      </Router>
    </>
  );
}

export default App;

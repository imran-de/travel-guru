import React from 'react';
import logo from '../../../logo.svg';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg">
                <Container className="px-5">
                    <Navbar.Brand href="#"> <img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="ms-5 me-2"
                                aria-label="Search"
                                style={{ backgroundColor: 'rgba(255,255,255,.2)', color: '#fff' }}
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className="text-white">News</Nav.Link>
                            <Nav.Link href="#action2" className="text-white">Destination</Nav.Link>
                            <Nav.Link href="#" className="text-white">Blog</Nav.Link>
                            <Nav.Link href="#" className="text-white">Contact</Nav.Link>
                            <Nav className="ms-2"><button className="btn btn-warning px-4">Login</button></Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
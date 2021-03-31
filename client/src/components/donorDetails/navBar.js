import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';


class NavBarSection extends Component {
    render() {


        return (
            <div >
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Dona</Navbar.Brand>
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#statistics">Statistics</Nav.Link>
                        <Nav.Link href="#learn">Learn</Nav.Link> */}

                        <Nav.Item>
                            <LinkContainer to="/Selections">
                                <Nav.Link >Selections</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>

                        <Nav.Item>
                            <LinkContainer to="/Statistics">
                                <Nav.Link >Statistics</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>

                        <Nav.Item>
                            <LinkContainer to="/Learn">
                                <Nav.Link >Learn</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>

                    <Nav>
                        <Nav.Link eventKey={2} href="#LogOut">Log Out</Nav.Link>
                    </Nav>

                </Navbar>
            </div>
        );
    }
}

export default NavBarSection;

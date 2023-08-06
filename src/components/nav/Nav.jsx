import React from "react";
import './Nav.css'
import { Container } from "react-bootstrap";

const Nav = () => {
return (
    <>
    <Container fluid>
    <nav className="d-flex justify-content-center">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>
    </Container>
    </>
)
};


export default Nav;
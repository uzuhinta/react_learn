import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss';
function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__title header__link"
                            rel="name"
                            href="/"
                        >
                            Photo App
                        </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/photos"
                            activeClassName="header__link--active"
                        >
                            Home Page
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;

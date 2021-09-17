import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <NavLink
              exact
              className=" header__title header__link"
              to="/photos"
              activeClassName="header__title header__link--active"
            >
              Home Page
            </NavLink>
          </Col>
          <Col xs="auto">
            <Link className="header__link" rel="name" to="/signin">
              Sign In
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;

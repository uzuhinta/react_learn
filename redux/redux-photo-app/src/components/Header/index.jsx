import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';
import { logout } from 'features/Auth/authSlice';

function Header() {
  const dispatch = useDispatch();
  let history = useHistory();

  function handleSignOut() {
    firebase.auth().signOut();
    dispatch(logout());
    history.push('/');
  }

  const auth = useSelector((state) => state.auth);
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
          {auth.isAuth ? (
            <>
              <Col xs="auto">{auth.displayName}</Col>

              <Col xs="auto">
                <div
                  className="header__link  header__link--cursor"
                  onClick={handleSignOut}
                >
                  Sign Out
                </div>
              </Col>
            </>
          ) : (
            <Col xs="auto">
              <Link className="header__link" rel="name" to="/signin">
                Sign In
              </Link>
            </Col>
          )}
        </Row>
      </Container>
    </header>
  );
}

export default Header;

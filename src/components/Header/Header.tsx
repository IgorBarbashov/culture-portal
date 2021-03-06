import logo from '../../assets/images/logo.png';
import './index.scss';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';

import SelectLanguage from '../SelectLanguage';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <Container className="header" fluid>
      <Navbar>
        <Navbar.Brand className="header_logo" as={Link} to="/">
          <Image src={logo} alt="logo" className="header_logo__img" />
          <h1>Belarusian Writers</h1>
        </Navbar.Brand>

        <div className="header_controls">
          <Nav>
            <Nav.Link as={Link} to="/" disabled={pathname === '/'}>
              {t('home')}
            </Nav.Link>
            <Nav.Link as={Link} to="/list" disabled={pathname === '/list'}>
              {t('writers')}
            </Nav.Link>
            <Nav.Link as={Link} to="/about" disabled={pathname === '/about'}>
              {t('about')}
            </Nav.Link>
          </Nav>
          <SelectLanguage />
        </div>
      </Navbar>
    </Container>
  );
};

export default Header;

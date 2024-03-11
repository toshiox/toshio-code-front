import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Navbar, Container, Nav, Form, Image } from 'react-bootstrap';

import logo from './assets/logo.png';
import './css/style.css';

import { languageActions } from '../../redux/languages';

const NavBar = () => {
  const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const handleLanguageChange = (newLanguage) => {
      i18n.changeLanguage(newLanguage, (err, t) => {
        if (err) {
          console.error('Erro ao mudar de idioma:', err);
        }
      });
      dispatch(languageActions.setLanguage({ value: newLanguage }));
    };

    const languageOptions = [
      { value: 'en', label: t('Languages.English') },
      { value: 'pt', label: t('Languages.Portuguese') },
    ];

  return (
    <Navbar  bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/Home" style={{ textDecoration: 'none' }}>
              <Image src={logo} rounded style={{ maxHeight: '55px', maxWidth:'300px' }}/>
            </Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto"  navbarScroll>
            <Nav.Link as={Link} to="/AboutMe">
                  {t('Nav.AboutMe')}
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Select onChange={(e) => handleLanguageChange(e.target.value)}>
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>    
              {/* <Form.Control type="search" placeholder={t('Inputs.PlaceHolders.KeyWord')} className="me-2" aria-label="Search"/>
              <Button variant="outline-warning">{t('Buttons.Search')}</Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;

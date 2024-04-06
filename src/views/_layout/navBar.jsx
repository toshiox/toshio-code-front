import './css/style.css';
import { useState } from 'react';
import logo from './assets/logo.png';
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaInfoCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import {navigatorFunctions} from '../../services/utils/navigator';
import { Navbar, Container, Nav, Form, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { keyWordActions } from '../../redux/keyWord';
import { languageActions } from '../../redux/languages';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [keyWord, setKeyWord] = useState(''); 
  const [showNav, setShowNav] = useState(true); 

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
  const HandleFilterKewWord = function(keyWordFilter) {
    setKeyWord(keyWordFilter);
    dispatch(keyWordActions.setKeyWord({ value: keyWord }));
  }
  const handleFocusOut = (event) => {
    HandleFilterKewWord(event.target.value);
  };
  const handleKeyPress = (event) => {
    if(event.keyCode === 13 || event.which === 13) { // keyCode 13 é para Enter. event.which para compatibilidade
      HandleFilterKewWord(event.target.value);
      event.preventDefault();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setShowNav(!navigatorFunctions.isMobile());
    };
    fetchData();
  }, []);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/Home" style={{ textDecoration: 'none' }}>
              <Image src={logo} rounded style={{ maxHeight: '55px', maxWidth:'300px' }}/>
            </Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {showNav && (
              <Nav className="me-auto"  navbarScroll>
                <Nav.Link as={Link} to="/AboutMe">{t('Nav.AboutMe')}</Nav.Link>
              </Nav>
            )}
            <Form className="d-flex">
              <Form.Select onChange={(e) => handleLanguageChange(e.target.value)}>
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>    
              <Form.Control type="search" placeholder={t('Inputs.PlaceHolders.KeyWord')} className="me-2" aria-label="Search" onBlur={handleFocusOut} onKeyPress={handleKeyPress} />
              <OverlayTrigger placement="bottom"
                overlay={
                  <Tooltip id="tooltip">{t('Nav.ToolTip')}</Tooltip>
                }>
                <span class="margin-tooltip"> 
                  <FaInfoCircle size={20} className="text-light" style={{ cursor: "pointer" }} />
                </span>
              </OverlayTrigger>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};
export default NavBar;
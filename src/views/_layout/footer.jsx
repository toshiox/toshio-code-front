import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaThreads } from "react-icons/fa6";
import './css/style.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
     <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <a href="https://github.com/toshiox" target="_blank"  rel="noreferrer">
              <FaGithub size={30} className="text-light" />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.linkedin.com/in/gustavo-toshio-a40213155/" target="_blank"  rel="noreferrer">
              <FaLinkedin size={30} className="text-light" />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.threads.net/@gutoshio" target="_blank"  rel="noreferrer">
              <FaThreads size={30} className="text-light" />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.instagram.com/gutoshio?igsh=MW80ODM4bDc1YnhuZg==" target="_blank"  rel="noreferrer">
              <FaInstagram size={30} className="text-light" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
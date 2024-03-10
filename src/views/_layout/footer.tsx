import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaThreads } from "react-icons/fa6";
import './css/Footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <a href="https://github.com/toshiox" target="_blank">
              <FaGithub size={30} className="text-light me-3" />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.linkedin.com/in/gustavo-toshio-a40213155/" target="_blank">
              <FaLinkedin size={30} className="text-light" />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.threads.net/@gutoshio" target="_blank">
              <FaThreads size={30} className="text-light me-3" />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.instagram.com/gutoshio?igsh=MW80ODM4bDc1YnhuZg==" target="_blank">
              <FaInstagram size={30} className="text-light me-3" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

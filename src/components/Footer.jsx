import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa'
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer bg-light py-4 mt-auto border-top shadow-sm">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <span className="text-muted">© {new Date().getFullYear()} Mai Thành Hải Quân. All rights reserved.</span>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://github.com/mthq2004" target="_blank" rel="noopener noreferrer" className="footer-icon me-3">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/h%E1%BA%A3i-qu%C3%A2n-8a26b3288/" target="_blank" rel="noopener noreferrer" className="footer-icon me-3">
              <FaLinkedin />
            </a>
            <a href="mailto:maithanhhaiquan2004@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-icon me-3">
              <FaEnvelope />
            </a>
            <a href="https://www.facebook.com/hai.quan.580161" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <FaFacebook />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'
import '../css/Contact.css'
import { useDispatch } from 'react-redux'
import { addContact } from '../features/contactSlice'

const Contact = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(addContact(formData));
      alert('Gửi tin nhắn thành công!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu:', error)
      alert('Gửi thất bại. Vui lòng thử lại sau.')
    }
  }

  return (
    <section className="contact-section py-5">
      <Container>
      <h2 className="text-center text-primary fw-bold mb-5">Thông tin liên hệ</h2>
        <Row>

          <Col md={6} className="d-flex flex-column justify-content-center align-items-center mb-5">
            <img
              src="/img/chatbot.png"
              alt="Contact Illustration"
              className="img-fluid rounded shadow"
              style={{ objectFit: 'cover' }}
            />
          </Col>


          <Col md={6} className="mb-4">
          <h3 className="mb-3 text-center">Thông tin cá nhân</h3>
            <div className='d-flex justify-content-center align-items-center'>
              <div className="d-flex flex-column gap-3">
                <a href="mailto:maithanhhaiquan2004@gmail.com" className="btn btn-outline-dark d-inline-flex align-items-center">
                  <FaEnvelope className="me-2" />
                  maithanhhaiquan2004@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/h%E1%BA%A3i-qu%C3%A2n-8a26b3288/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary d-inline-flex align-items-center">
                  <FaLinkedin className="me-2" />
                  LinkedIn
                </a>
                <a href="https://github.com/mthq2004" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark d-inline-flex align-items-center">
                  <FaGithub className="me-2" />
                  GitHub
                </a>
                <a href="https://www.facebook.com/hai.quan.580161/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary d-inline-flex align-items-center">
                  <FaFacebook className="me-2" />
                  Facebook
                </a>
              </div>
            </div>

            <div className="mt-4">
              <h6 className="fw-bold mb-3">Gửi lời nhắn cho mình</h6>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên của bạn"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email của bạn"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Lời nhắn..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className='d-flex justify-content-end'>
                  <button type="submit" className="btn btn-primary w-25">
                  Gửi
                </button>
                </div>
              </form>
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}

export default Contact

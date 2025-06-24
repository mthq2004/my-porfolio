import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../css/Home.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-section d-flex align-items-center vh-100">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h5 className="display-6 fw-bold">Chào bạn, mình là Hải Quân</h5>
            <p className="lead text-muted">
              Mình là sinh viên năm 3 chuyên ngành <strong>Kỹ thuật Phần mềm</strong> tại <strong>Đại học Công Nghiệp TP.HCM (IUH)</strong>.  
              <br /><br />
              Mình đặc biệt đam mê <strong>xây dựng giao diện người dùng trực quan</strong> và <strong>giải quyết bài toán thực tế thông qua lập trình</strong>.  
              Ngoài ra, mình luôn nỗ lực rèn luyện các kỹ năng mềm như <strong>làm việc nhóm, quản lý thời gian</strong> và <strong>giao tiếp hiệu quả</strong>.
              <br /><br />
              Mục tiêu của mình là trở thành một <strong>Software Developer chuyên nghiệp</strong> và không ngừng học hỏi để phát triển bản thân trong môi trường công nghệ luôn thay đổi.
            </p>
            <div className="mt-4">
              <Button variant="primary" className="me-3" onClick={() => navigate('/projects')}>
                View Projects
              </Button>
              <Button variant="outline-secondary" onClick={() => navigate('/contact')}>
                Contact Me
              </Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="/img/avatar.jpg"
              alt="Hải Quân Avatar"
              className="img-fluid rounded-circle shadow"
              style={{ maxHeight: '500px' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home

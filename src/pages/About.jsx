import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../css/About.css'

const About = () => {
  return (
    <section className="about-section d-flex align-items-center  bg-light vh-100">
      <Container className="px-4 px-md-5">
        <h2 className="text-center mb-5 fw-bold text-primary">Giới thiệu về tôi</h2>
        <Row className="align-items-center gx-5">
          <Col md={6} className="mb-4 mb-md-0 text-center">
            <img
              src="../src/img/avatar2.jpg"
              alt="Ảnh đại diện"
              className="img-fluid rounded-circle shadow about-avatar"
            />
          </Col>
          <Col md={6}>
            <p className="mb-3">
              Mình là <strong>Mai Thành Hải Quân</strong>, sinh viên năm 3 chuyên ngành <strong>Kỹ thuật Phần mềm</strong>
              tại <strong>Đại học Công Nghiệp TP.HCM (IUH)</strong>. Mình có niềm đam mê mãnh liệt với việc xây dựng ứng dụng web
              và giải quyết bài toán thực tiễn thông qua công nghệ.
            </p>
            <p className="mb-3">
              Mình đã tự trang bị cho bản thân nền tảng kỹ thuật vững chắc:
            </p>
            <ul>
              <li><strong>Ngôn ngữ:</strong> Java, JavaScript, SQL</li>
              <li><strong>Frontend:</strong> HTML, CSS, ReactJS, Bootstrap</li>
              <li><strong>Cơ sở dữ liệu:</strong> MariaDB, MongoDB</li>
              <li><strong>Công cụ:</strong> GitHub, json-server, IntelliJ IDEA, API</li>
            </ul>
            <p className="mt-4">
              Bên cạnh kỹ thuật, mình còn chú trọng phát triển kỹ năng mềm như <strong>giao tiếp hiệu quả</strong>, <strong>tinh thần làm việc nhóm</strong>, và <strong>tư duy giải quyết vấn đề</strong>.
              Mục tiêu của mình là trở thành một <strong>Software Developer chuyên nghiệp</strong>, sẵn sàng học hỏi và đóng góp vào những dự án công nghệ thực tiễn.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About

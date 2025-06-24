import { useState } from "react"
import PropTypes from "prop-types"

export default function ProjectCard({ projectData }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === projectData.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? projectData.images.length - 1 : prev - 1))
  }

  return (
    <div className="min-vh-100 py-5" style={{backgroundColor:"white"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              {/* Header */}
              <div className="card-header bg-primary text-white py-4">
                <h1 className="card-title mb-0 text-center fw-bold">{projectData.title}</h1>
              </div>

              {/* Image Carousel */}
              <div className="position-relative">
                <div className="carousel-container" style={{ height: "500px", overflow: "hidden"}}>
                  <img
                    src={projectData.images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    className="w-100 h-100 object-fit-contain"
                  />

                  {projectData.images.length > 1 && (
                    <>
                      <button
                        className="btn btn-dark btn-sm position-absolute top-50 start-0 translate-middle-y ms-3 rounded-circle"
                        onClick={prevImage}
                        style={{ width: "40px", height: "40px" }}
                      >
                        ‹
                      </button>
                      <button
                        className="btn btn-dark btn-sm position-absolute top-50 end-0 translate-middle-y me-3 rounded-circle"
                        onClick={nextImage}
                        style={{ width: "40px", height: "40px" }}
                      >
                        ›
                      </button>

                      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                        <div className="d-flex gap-2">
                          {projectData.images.map((_, index) => (
                            <button
                              key={index}
                              className={`btn btn-sm rounded-circle ${
                                index === currentImageIndex ? "btn-light" : "btn-outline-light"
                              }`}
                              style={{ width: "12px", height: "12px", padding: "0" }}
                              onClick={() => setCurrentImageIndex(index)}
                            />
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="card-body p-4">
                {/* Description */}
                <div className="mb-4">
                  <h5 className="text-primary fw-bold mb-3">Mô tả dự án</h5>
                  <p className="text-muted lh-lg">{projectData.description}</p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h5 className="text-primary fw-bold mb-3">Công nghệ sử dụng</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {projectData.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-secondary fs-6 px-3 py-2 rounded-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Roles */}
                <div className="row mb-4">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <h5 className="text-primary fw-bold mb-2">Vai trò</h5>
                    <div className="bg-light p-3 rounded-3">
                      <p className="mb-0 fw-medium">{projectData.role}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-primary fw-bold mb-2">Vai trò nhóm</h5>
                    <div className="bg-light p-3 rounded-3">
                      <p className="mb-0 fw-medium">{projectData.groupRole}</p>
                    </div>
                  </div>
                </div>

                {/* Lessons */}
                <div>
                  <h5 className="text-primary fw-bold mb-3">Bài học rút ra</h5>
                  <div className="bg-light p-4 rounded-3">
                    <ul className="list-unstyled mb-0">
                      {projectData.lessons.map((lesson, index) => (
                        <li key={index} className="mb-3 d-flex align-items-start">
                          <span
                            className="badge bg-primary rounded-circle me-3 mt-1"
                            style={{ width: "24px", height: "24px", fontSize: "12px" }}
                          >
                            {index + 1}
                          </span>
                          <span className="text-muted lh-lg">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ✅ Kiểm tra kiểu props
ProjectCard.propTypes = {
  projectData: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    role: PropTypes.string,
    groupRole: PropTypes.string,
    lessons: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProject } from "../features/projectSlice"
import ProjectCard from "../components/ProjectCard"
import { Spinner } from "react-bootstrap"


const Projects = () => {
  const dispatch = useDispatch()
  const { projects, isLoading, error } = useSelector((state) => state.project)

  useEffect(() => {
    dispatch(fetchProject())
  }, [dispatch])

  if (isLoading) return <Spinner/>
  if (error) return <p className="text-center text-danger mt-5">Lỗi: {error}</p>

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary fw-bold mb-1">Dự Án Đã Thực Hiện</h2>
      {projects.length === 0 ? (
        <p className="text-center text-muted">Không có dự án nào để hiển thị.</p>
      ) : (
        projects.map((project) => (
          <div key={project.id} className="mb-1">
            <ProjectCard projectData={project} />
          </div>
        ))
      )}
    </div>
  )
}

export default Projects

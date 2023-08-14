import ProjectItem from "../components/ProjectItem"
import { projectList } from "../data/constants"

export default function Projects() {
  return (
    <main className="projects">
      <section>
        <h2>프로젝트</h2>
        <div className="project-list">
          { projectList.map((project, key) => {
            return (
              <ProjectItem 
                title={project.title} 
                image={project.image} 
                key={key} 
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}

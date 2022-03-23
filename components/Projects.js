import uniqid from 'uniqid'
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <br />
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectCard key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects

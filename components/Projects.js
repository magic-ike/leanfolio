import uniqid from 'uniqid'
import ProjectCard from './ProjectCard'
import Spacer from './Spacer'
import { projects } from '../data/portfolio'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section
      className='section projects animate__animated animate__fadeIn animate__delay-5s'
      id='projects'
    >
      <Spacer height={2} />
      <h2 className='section__title'>Projects</h2>

      <div className='projects__column'>
        {projects.map((project) => (
          <ProjectCard key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects

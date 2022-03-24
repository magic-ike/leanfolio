import uniqid from 'uniqid'
import ProjectCard from './ProjectCard'
import Spacer from './Spacer'
import { projects } from '../data/portfolio'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <Spacer height={2} />
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

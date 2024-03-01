import { contact } from '../data/portfolio'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section
      className='section contact center animate__animated animate__fadeIn animate__delay-5s'
      id='contact'
    >
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`} target='_blank' rel='noreferrer'>
        <span type='button' className='btn btn--outline'>
          Email Me
        </span>
      </a>
    </section>
  )
}

export default Contact

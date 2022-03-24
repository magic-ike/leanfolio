import Spacer from './Spacer'
import { contact } from '../data/portfolio'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <Spacer height={2} />
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`} target='_blank' rel='noreferrer'>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact

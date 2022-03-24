import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../data/portfolio'

const About = () => {
  const { name, role, company, description, resume, social, greetingEmoji } =
    about
  const firstName = name ? name.split(' ')[0] : null

  return (
    <div className='about center'>
      {firstName && (
        <h1>
          Hey, I&apos;m <span className='text--strong'>{firstName}</span>.
          {greetingEmoji && <span> {greetingEmoji}</span>}
        </h1>
      )}

      {role && (
        <h2 className='about__role'>
          I&apos;m a {role}
          {company && (
            <span>
              {' '}
              at <span className='text--strong'>{company}</span>
            </span>
          )}
          .
        </h2>
      )}
      {description && <p className='about__desc'>{description}</p>}

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target='_blank'
                rel='noreferrer'
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target='_blank'
                rel='noreferrer'
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About

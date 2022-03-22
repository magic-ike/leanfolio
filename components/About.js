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
          Hey, I&apos;m <span className='about__strong'>{firstName}</span>.
          {greetingEmoji && <span> {greetingEmoji}</span>}
        </h1>
      )}

      {role && (
        <h2 className='about__role'>
          I&apos;m a {role}
          {company && (
            <span>
              {' '}
              at <span className='about__strong'>{company}</span>
            </span>
          )}
          .
        </h2>
      )}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
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
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
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

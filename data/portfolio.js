const header = {
  // the `wordmark` property is optional - it can be left empty or deleted
  // if so, it will be overwritten by your full name, or a default wordmark if the full name is invalid
  wordmark: '',
}

const about = {
  // each of these properties is optional - they can be left empty or deleted
  // the first element in the `names` array will be treated as your first name, and all the elements combined will be treated as your full name
  // each element in the `description` array will be treated as a separate paragraph
  names: ['Ike', 'Ofoegbu'],
  greetingEmoji: '👋🏽',
  role: 'Software Engineer',
  // company: 'Acme Labs',
  description: [
    "Specifically, I'm a web developer specializing in frontend development and server-side scripting (I've also dabbled in mobile app development among other things). My passion lies in building web infrastructure that's both performant and scalable.",
    "I graduated from UCLA with a B.S. in Cognitive Science and a Specialization in Computing. In school, I learned about the applications of Computer Science within the study of intelligent systems, both real and artificial. Since then, I've strived to use software as a medium for solving more general problems.",
  ],
  // resume: 'https://example.com',
  social: {
    github: 'https://github.com/magic-ike',
    linkedin: 'https://linkedin.com/in/ike-ofoegbu',
  },
}

const projects = [
  // projects can be added and removed
  // if the array is left empty, the "Projects" section won't render
  // each element in each `description` array will be treated as a separate paragraph
  {
    thumbnail: 'images/data-card-for-spotify-preview.png',
    name: 'Data Card for Spotify',
    description: [
      'A web service for embedding dynamically generated Spotify data anywhere on the web',
      'Receives ~200K API calls per month',
    ],
    stack: [
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'Spotify Web API',
      'MongoDB',
      'Redis',
    ],
    sourceCode: 'https://github.com/magic-ike/spotify-data-card',
    livePreview: 'https://www.data-card-for-spotify.com',
  },
  {
    thumbnail:
      'https://raw.githubusercontent.com/magic-ike/atalog-landing-page/master/docs/atalog-site-preview.png',
    name: 'Atalog',
    description: [
      'A closed-source social networking and messaging mobile app for iOS',
      '3K+ lifetime installs',
    ],
    stack: [
      'Swift',
      'Firebase Auth',
      'Cloud Firestore',
      'Cloud Storage',
      'OneSignal',
    ],
    livePreview: 'https://atalog.co',
  },
  {
    thumbnail:
      'https://raw.githubusercontent.com/magic-ike/laser-ship-links/master/assets/images/laser-ship-app-icon.webp',
    name: 'Laser Ship',
    description: [
      'A closed-source vertically scrolling shooter mobile game for iOS and Android',
      '5.5K+ lifetime installs',
    ],
    stack: ['C#', 'Unity'],
    livePreview: 'https://magic-ike.github.io/laser-ship-links/',
  },
]

const skills = [
  // skills can be added or removed
  // if the array is left empty, the "Skills" section won't render
  'JavaScript (ES5/ES6+)',
  'TypeScript',
  'HTML',
  'CSS',
  'PHP',
  'Python',
  'Go',
  'Swift',
  'C++',
  'React',
  'Jest',
  'Flow',
  'ESLint',
  'Babel',
  'webpack',
  'npm',
  'Yarn',
  'Node.js',
  'Express',
  'MongoDB',
  'MySQL',
  'Redis',
]

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  email: 'ikeofoegbu99@gmail.com',
}

export { header, about, projects, skills, contact }

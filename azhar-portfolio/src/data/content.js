/* ==========================================================================
   Site content: the one file to edit.
   Text below comes from the original portfolio pages, README and CV.
   Anything marked PLACEHOLDER is there for you to replace.
   ========================================================================== */

export const profile = {
  name: 'Azhar Manie',
  first: 'Azhar',
  last: 'Manie',
  year: '2026',
  role: 'Aspiring software developer',
  roleNote: 'Chef by training',
  location: 'Cape Town, South Africa',
  statement:
    'From the culinary arts to full-stack tech architectures. Building clean systems with discipline and flavor.',
  
  email: 'chefmanie27@gmail.com',
  github: 'https://github.com/chefmanie27-pixel',
  linkedin: 'https://www.linkedin.com/in/azhar-manie-b48244403/?skipRedirect=true',
  cv: 'azhar-manie-cv.pdf',
  photo: 'azhar-portrait.jpg',
  formEndpoint: 'https://formspree.io/f/xeedyplo',
}

export const nav = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

/* Projects. Set `image` to a path or URL (e.g. '/projects/my-app.jpg') to use a
   real screenshot as the poster. Without one, a typographic poster is drawn.
   Entries with `placeholder: true` are obviously-empty slots: replace them. */
export const projects = [
  {
    id: 'html-css-portfolio',
    title: 'HTML & CSS Portfolio',
    year: '2026',
    role: 'Design and development',
    tech: ['HTML', 'CSS'],
    description:
      'My first portfolio site. It introduces who I am, lays out my skills and documents my move from the culinary arts into software development.',
    image: null,
    github: 'https://github.com/chefmanie27-pixel/HTML-CSS-Portfolio',
    live: 'https://chefmanie27-pixel.github.io/HTML-CSS-Portfolio/',
  },
  {
    id: 'Event Planning Service',
    title: 'Event Planning Service',
    year: '2026',
    role: 'Design and Development',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'A simple event planning service website that allows users to view and book event planning services. It features a responsive design and interactive elements.',
    image: null,
    github: 'https://github.com/chefmanie27-pixel/Updated-Personal-Portfolio.git',
    live: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fnewmi-git.github.io%2FEvent-Planning-Service%2F&urlhash=GyD2&mt=mTjrYs52tzNZqH1ORB2oV5g7Qbp04iLKbPsHKQakTi2OACiTeDmJ90oFQKUXUsSFZxVFOqK7wbf3pl0WrUnp6BhAr5_ggybAeSaQmppTpD2c-4H5lUcAQsO0t9c&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BG5TBY4UqSJCXB%2BsdkSrwhQ%3D%3D',
  },
  {
    id: 'placeholder-03',
    placeholder: true,
    title: 'Project title',
    year: 'Year',
    role: 'Your role',
    tech: ['Technology'],
    description: 'PLACEHOLDER. Replace this entry in src/data/content.js.',
    image: null,
    github: '',
    live: '',
  },
]

export const about = {
  heading: 'The person behind the code',
  lead: 'I am an aspiring developer transitioning from a fast-paced, highly precise culinary background into the world of software development. My journey is driven by a deep love for creating things from scratch, whether it\u2019s crafting a perfect menu profile or writing clean, efficient, and semantic web code.',
  body: [
    'Through intensive training and collaborative building environments, I have traded kitchen knives for code editors, discovering that the discipline, urgency, and creative problem-solving required in a professional kitchen translate perfectly into building modern web applications.',
  ],
  principles: [
    {
      title: 'The culinary mindset',
      text: 'In the kitchen, \u201Cmise en place\u201D (everything in its place) is law. I bring this exact organizational philosophy to my development workflow: structuring code cleanly, planning file architectures intelligently, and keeping repositories tidy.',
    },
    {
      title: 'Technical focus',
      text: 'Right now, I am focusing deeply on frontend logic, mastering responsive structures, and writing elegant JavaScript. I enjoy transforming intricate visual designs into pixel-perfect, accessible interactive interfaces.',
    },
    {
      title: 'Future aspirations',
      text: 'My long-term mission is to grow into a versatile full-stack software engineer. I am excited to work with teams that embrace fast iterations, push design boundaries, and build solutions that make a meaningful impact.',
    },
  ],
  cta: 'Want to work together or just say hello?',
}

export const journey = {
  intro: 'A look back at where I started, how my skills evolved, and where I am heading next.',
  frames: [
    {
      when: '2020 to 2022',
      title: 'The culinary foundation',
      place: 'Capsicum Culinary Studio',
      text: 'Started my professional path in the culinary arts. Developed high-intensity problem-solving skills, rigorous time management, and deep experience working within tightly synchronized teams.',
    },
    {
      when: '2020 to March 2026',
      title: 'Industry experience',
      place: 'Hospitality and customer service',
      text: 'Applied technical kitchen and service execution skills in real-world environments. Refined communication mechanics and learned to navigate client relations and high-pressure situations gracefully.',
    },
    {
      when: 'April 2026 to present',
      title: 'The tech pivot',
      place: 'Life Choices Academy, Youth Code',
      text: 'Immersed myself into software development. Actively mastering structural and logical programming languages like Python, JavaScript, HTML, and CSS while adapting agile workflows and version control via Git.',
      current: true,
    },
    {
      when: 'The future',
      title: 'Full-stack mastery',
      place: 'Continuous learning',
      text: 'Aiming to bridge creative interface designs with robust backend architectures. Continuously building projects, picking up frameworks, and pushing architectural boundaries.',
    },
  ],
  quote: 'The beautiful thing about learning is that nobody can take it away from you.',
  quoteBy: 'B.B. King',
}

export const skills = {
  intro: 'An overview of the skills I have acquired over the years.',
  groups: [
    {
      title: 'In code',
      rows: [
        { category: 'Programming languages', items: ['Python', 'JavaScript'], where: 'Life Choices' },
        { category: 'Web development', items: ['HTML', 'CSS'], where: 'Life Choices' },
        { category: 'Version control', items: ['Git', 'GitHub'], where: 'Life Choices' },
      ],
    },
    {
      title: 'Before code',
      rows: [
        {
          category: 'Culinary arts',
          items: ['Food preparation', 'Cooking techniques'],
          where: 'Capsicum Culinary Studio and work experience',
        },
        {
          category: 'Customer service',
          items: ['Communication', 'Problem solving'],
          where: 'Capsicum Culinary Studio and work experience',
        },
        {
          category: 'Teamwork',
          items: ['Collaboration', 'Time management'],
          where: 'Capsicum Culinary Studio and work experience',
        },
      ],
    },
  ],
}

export const contact = {
  intro:
    'Have an interesting project, a job opportunity, or just want to chat about code or food? Drop me a message below.',
}

export const credits = [
  { role: 'Written and directed by', value: 'Azhar Manie' },
  { role: 'Filmed on location in', value: 'Cape Town, South Africa' },
  { role: 'Trained at', value: 'Capsicum Culinary Studio and Life Choices Academy' },
  { role: 'Built with', value: 'Vue 3 and Vite' },
]

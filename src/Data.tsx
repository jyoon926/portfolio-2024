import ContactSection from './components/Contact';
import EducationSection from './components/Education';
import ExperienceSection from './components/Experience';
import IntroSection from './components/Intro';
import ProjectsSection from './components/Projects';

export const Sections = [
  { title: 'Intro', component: IntroSection },
  { title: 'Projects', component: ProjectsSection },
  { title: 'Experience', component: ExperienceSection },
  { title: 'Education', component: EducationSection },
  { title: 'Contact', component: ContactSection },
];

export const ColorSchemes = [
  {
    name: 'Dark Black',
    background: '0, 0, 0',
    foreground: '255, 255, 255',
  },
  {
    name: 'Dark Green',
    background: '5, 26, 28',
    foreground: '255, 255, 255',
  },
  {
    name: 'Dark Grey',
    background: '74, 71, 68',
    foreground: '255, 255, 255',
  },
  {
    name: 'Dark Tan',
    background: '107, 96, 84',
    foreground: '255, 255, 255',
  },
  {
    name: 'Light Brown',
    background: '209, 199, 186',
    foreground: '26, 23, 20',
  },
  {
    name: 'Light Olive',
    background: '211, 214, 197',
    foreground: '31, 33, 26',
  },
  {
    name: 'Light Tan',
    background: '229, 225, 219',
    foreground: '69, 61, 56',
  },
  {
    name: 'Light White',
    background: '255, 255, 255',
    foreground: '20, 20, 20',
  },
];

export const Intros = [
  {
    label: 'For Anyone',
    text: "Hi! I'm a software engineer who cares about making beautiful and impactful digital products.",
  },
  {
    label: 'Recruiters',
    text: "I'm a passionate software engineer who thrives on continuous learning and excels at combining technical expertise and creativity to build beautiful and impactful digital products.",
  },
  {
    label: 'Engineers',
    text: "I'm a full-stack engineer with a passion for elegant solutions, beautiful systems, clean code, and innovative tech. Let's collaborate on pushing the boundaries of what's possible with code.",
  },
  {
    label: 'Product Managers',
    text: "I'm a developer who understands both sides of the coin—tech and user experience. I love working on cross-functional teams to design and build products that align with vision and functionality.",
  },
  {
    label: 'Creatives',
    text: "I'm a programmer but also an artist at heart. I love blending creativity with technology to craft unique, visually stunning digital experiences. Let's collaborate!",
  },
];

export const Projects = [
  {
    projectUrl: 'spotify-spheres',
    title: 'Spotify Spheres',
    caption: 'React, Tailwind CSS, Spotify Web API, OpenAI API',
    date: 'November 2024 - Present',
    description: `After experimenting with the Spotify Web API last year, I set out to create a more innovative and immersive way to explore music. This led to Spotify Spheres, an app that allows users to discover songs through an interactive, tree-like interface. Each "sphere" begins with a seed track and branches out into hyper-specific representations of the user's music tastes. I’ve developed a proof of concept where users can intuitively navigate the tree by panning and zooming, adding new nodes that represent tracks inspired by the ancestry of their branch. This approach gives users a unique, intentional way to shape and explore their listening experience. Looking ahead, I plan to integrate the app with a secure database so users can create and manage multiple spheres. Additionally, I aim to incorporate OpenAI’s API to automatically generate creative elements like titles, labels, descriptions, and playlist covers, further enhancing the personalization and creativity of the experience.`,
    technologies: ['React', 'Tailwind CSS', 'Spotify Web API', 'Firebase', 'OpenAI API'],
    images: [
      '/spotify-spheres.png',
      '/spotify-spheres-1.png',
      '/spotify-spheres-2.png',
      '/spotify-spheres-3.png',
      '/spotify-spheres-4.png',
      '/spotify-spheres-5.png',
    ],
    link: 'https://spotifyspheres.web.app/',
    github: 'https://github.com/jyoon926/spotify-spheres',
  },
  {
    projectUrl: 'models-at-rit',
    title: 'Models @ RIT',
    caption: 'React, Supabase, UI/UX',
    date: 'July 2024 — Present',
    description:
      'Models @ RIT is a platform designed to connect photographers with aspiring models within the RIT community. Photography students often face challenges finding models for their projects, while many students who want to model lack the necessary connections. This website streamlines that process, allowing anyone with an rit.edu email to create a model profile and be discovered by photographers. It serves as a valuable resource for both photographers seeking fresh faces and students aspiring to break into modeling.',
    technologies: ['React', 'Supabase', 'Tailwind CSS', 'Firebase'],
    images: [
      '/models-at-rit.png',
      '/models-at-rit-1.png',
      '/models-at-rit-2.png',
      '/models-at-rit-3.png',
      '/models-at-rit-4.png',
      '/models-at-rit-5.png',
      '/models-at-rit-6.png',
      '/models-at-rit-7.png',
    ],
    link: 'https://modelsatrit.com/',
    github: 'https://github.com/jyoon926/modelsatrit',
  },
  {
    projectUrl: 'chris-elliott-art-gallery',
    title: 'Chris Elliott Art Gallery',
    caption: 'React, Supabase, Figma, UI/UX',
    date: 'June 2024 — August 2024',
    description:
      'This art gallery website was created for a client to showcase the paintings of Chris Elliott, who passed away in 2022. I worked closely with the client using Figma to ensure we shared a unified vision for the site, blending their ideas with my design expertise.',
    technologies: ['React', 'Supabase', 'Tailwind CSS', 'Figma'],
    images: [
      '/chris-elliott.png',
      '/chris-elliott-1.png',
      '/chris-elliott-3.png',
      '/chris-elliott-2.png',
      '/chris-elliott-4.png',
      '/chris-elliott-5.png',
    ],
    link: 'https://chris-elliott.web.app/',
    github: 'https://github.com/jyoon926/chris-elliott',
  },
  {
    projectUrl: 'inspired-playlists',
    title: 'Inspired Playlists',
    caption: 'Angular, Spotify Web API, Cohere API',
    date: 'January 2024',
    description:
      "Inspired Playlists was a personal project designed to explore the potential of the Spotify Web API and the Cohere API (LLM). I was intrigued by how Spotify's recommendation algorithms, like those behind 'Discover Weekly,' 'Daylist,' and features like DJ and suggested songs, often felt like an echo chamber—reinforcing familiar tastes and making it harder to discover fresh music. I built this website to break that pattern, offering a more intentional and liberating way to discover new artists and songs.",
    technologies: ['Angular', 'Firebase', 'Cohere API'],
    images: [
      '/inspired-playlists.png',
      '/inspired-playlists-1.png',
      '/inspired-playlists-2.png',
      '/inspired-playlists-3.png',
    ],
    link: 'https://inspiredplaylists.web.app/',
    github: 'https://github.com/jyoon926/spotify-playlist-creator',
  },
];

export const Experience = [
  {
    company: 'Epic Systems',
    role: 'Software Engineering Intern',
    date: 'May 2025 — August 2025',
    description:
      'Upcoming role.',
  },
  {
    company: 'Dassault Systèmes BIOVIA',
    role: 'Software Engineer Intern',
    date: 'June 2024 — December 2024',
    description:
      'I developed automation tools using Angular and Node.js to integrate Jira with internal issue tracking software, streamlining the project management process. Additionally, I implemented full-stack user stories and bug fixes with .NET C# and Angular, contributing to the development of the 3DEXPERIENCE platform.',
  },
  {
    company: 'Dassault Systèmes BIOVIA',
    role: 'Software Engineer Intern',
    date: 'May 2023 — December 2023',
    description:
      'I overhauled the search functionality in a legacy application using Angular and .NET, resulting in a 90% improvement in search performance. Additionally, I developed .NET endpoints to optimize interactions with Oracle, significantly reducing data retrieval times. I also built internal tools using Angular, Node.js, and Express to automate the creation of demo data in application environments.',
  },
  {
    company: 'RIT Department of Computer Science',
    role: 'Student Lab Instructor',
    date: 'August 2022 — December 2022',
    description:
      'I assisted 24 students taking CSCI-140 (CS for AP Students) with lab assignments and problem-solving sessions, providing support in Python and Java to teach key computer science concepts. Additionally, I mentored over 100 intro-level CS students at the GCCIS Tutoring Center.',
  },
];

export const Education = {
  school: 'Rochester Institute of Technology',
  degree: 'Combined Bachelor of Science and Master of Science in Computer Science',
  location: 'Rochester, NY',
  date: 'August 2021 — May 2026',
  bullets: [
    'Cumulative GPA: 3.88/4.0',
    'Relevant coursework: Machine Learning, Parallel and Distributed Systems, Programming Language Concepts, Principles of Database Management, Intro to AI, Analysis of Algorithms, Mechanics of Programming, Intro to Software Engineering, CS Theory'
  ]
};

export const Contact = {
  links: [
    {
      url: 'mailto:jy9726@rit.edu',
      text: 'jy9726@rit.edu'
    },
    {
      url: 'https://www.linkedin.com/in/jaacobyoon/',
      text: 'LinkedIn'
    },
    {
      url: 'https://github.com/jyoon926/',
      text: 'GitHub'
    },
    {
      url: 'https://www.instagram.com/jaacobyoon/',
      text: 'Instagram'
    }
  ]
}

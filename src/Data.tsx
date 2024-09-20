import Contact from './components/Contact';
import Experience from './components/Experience';
import Intro from './components/Intro';
import Work from './components/Work';

export const Sections = [
  { title: 'Intro', component: Intro },
  { title: 'Work', component: Work },
  { title: 'Experience', component: Experience },
  { title: 'Contact', component: Contact },
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
    name: 'Dark Marine',
    background: '24, 41, 56',
    foreground: '255, 255, 255',
  },
  {
    name: 'Dark Blue',
    background: '46, 50, 72',
    foreground: '255, 255, 255',
  },
  {
    name: 'Dark Purple',
    background: '64, 54, 79',
    foreground: '255, 255, 255',
  },
  {
    name: 'Dark Pink',
    background: '84, 60, 89',
    foreground: '255, 255, 255',
  },
  {
    name: 'Dark Red',
    background: '119, 58, 53',
    foreground: '255, 255, 255',
  },
  {
    name: 'Dark Orange',
    background: '157, 68, 51',
    foreground: '255, 255, 255',
  },
  {
    name: 'Light Orange',
    background: '255, 210, 180',
    foreground: '39, 39, 39',
  },
  {
    name: 'Light Brown',
    background: '243, 230, 207',
    foreground: '39, 39, 39',
  },
  {
    name: 'Light Olive',
    background: '213, 209, 183',
    foreground: '39, 39, 39',
  },
  {
    name: 'Light Green',
    background: '209, 218, 203',
    foreground: '39, 39, 39',
  },
  {
    name: 'Light Marine',
    background: '213, 227, 222',
    foreground: '39, 39, 39',
  },
  {
    name: 'Light Blue',
    background: '218, 229, 232',
    foreground: '39, 39, 39',
  },
  {
    name: 'Light White',
    background: '255, 255, 255',
    foreground: '39, 39, 39',
  },
];

export const Intros = [
  {
    label: 'For Anyone',
    text: "Hello there! I'm a software engineer who cares about making beautiful digital products that help people.",
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
    ],
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
  },
];

export const Jobs = [
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
      'I overhauled the search functionality in a legacy application using Angular and .NET, resulting in a 90% improvement in search performance. Additionally, I developed .NET endpoints to optimize interactions with Oracle, significantly reducing data retrieval times. I also built an internal tool using Angular and Express to automate the creation of demo data in application environments.',
  },
  {
    company: 'RIT Department of Computer Science',
    role: 'Student Lab Instructor',
    date: 'August 2022 — December 2022',
    description:
      'I assisted 24 students taking CSCI-140 (CS for AP Students) with lab assignments and problem-solving sessions, providing support in Python and Java to teach key computer science concepts. Additionally, I mentored over 100 intro-level CS students at the GCCIS Tutoring Center.',
  },
];

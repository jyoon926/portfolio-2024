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
    foreground: '195, 235, 241',
  },
  {
    name: 'Dark Marine',
    background: '24, 41, 56',
    foreground: '183, 212, 245',
  },
  {
    name: 'Dark Blue',
    background: '46, 50, 72',
    foreground: '207, 188, 236',
  },
  {
    name: 'Dark Purple',
    background: '64, 54, 79',
    foreground: '248, 166, 211',
  },
  {
    name: 'Dark Pink',
    background: '84, 60, 89',
    foreground: '255, 177, 177',
  },
  {
    name: 'Dark Red',
    background: '119, 58, 53',
    foreground: '242, 195, 164',
  },
  {
    name: 'Dark Orange',
    background: '157, 68, 51',
    foreground: '243, 216, 184',
  },
  {
    name: 'Light Orange',
    background: '255, 210, 180',
    foreground: '233, 79, 14',
  },
  {
    name: 'Light Brown',
    background: '243, 230, 207',
    foreground: '119, 78, 52',
  },
  {
    name: 'Light Olive',
    background: '213, 209, 183',
    foreground: '81, 78, 56',
  },
  {
    name: 'Light Green',
    background: '209, 218, 203',
    foreground: '59, 66, 54',
  },
  {
    name: 'Light Marine',
    background: '213, 227, 222',
    foreground: '38, 54, 49',
  },
  {
    name: 'Light Blue',
    background: '218, 229, 232',
    foreground: '30, 40, 42',
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
    title: 'Models @ RIT',
    caption: 'React, Supabase, UI/UX',
    date: 'July 2024 — Present',
    description: '',
    image: '/models-at-rit.png',
  },
  {
    title: 'Chris Elliott Art Gallery',
    caption: 'React, Supabase, Figma, UI/UX',
    date: 'June 2024 — August 2024',
    description: '',
    image: '/chris-elliott.png',
  },
  {
    title: 'Inspired Playlists',
    caption: 'Angular, Spotify Web API, Cohere API',
    date: 'January 2024',
    description: '',
    image: '/inspired-playlists.png',
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

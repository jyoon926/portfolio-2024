import {
  BiLogoAngular,
  BiLogoAws,
  BiLogoDocker,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi';
import ContactSection from '../components/Contact';
import EducationSection from '../components/Education';
import ExperienceSection from '../components/Experience';
import IntroSection from '../components/Intro';
import ProjectsSection from '../components/Projects';
import SkillsSection from '../components/Skills';
import {
  SiC,
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiHuggingface,
  SiJenkins,
  SiJupyter,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiOpencv,
  SiOracle,
  SiPandas,
  SiPostman,
  SiPytorch,
  SiSupabase,
  SiTensorflow,
} from 'react-icons/si';
import { RiNextjsFill, RiPenNibFill } from 'react-icons/ri';
import { MdComputer } from 'react-icons/md';
import { PiCubeTransparent } from 'react-icons/pi';
import { IoCameraSharp, IoGameController, IoMusicalNotes } from 'react-icons/io5';
import { GiClarinet, GiGuitar, GiSewingNeedle, GiStoneBlock } from 'react-icons/gi';
import { HiDatabase } from 'react-icons/hi';
import AboutSection from '../components/About';

export const Sections = [
  { title: 'Intro', component: IntroSection },
  { title: 'Projects', component: ProjectsSection },
  { title: 'About', component: AboutSection },
  { title: 'Experience', component: ExperienceSection },
  { title: 'Education', component: EducationSection },
  { title: 'Skills', component: SkillsSection },
  { title: 'Contact', component: ContactSection },
];

export const ColorSchemes = [
  {
    name: 'Dark Black',
    background: '30, 30, 30',
    foreground: '250, 248, 239',
  },
  {
    name: 'Dark Brown',
    background: '33, 26, 24',
    foreground: '245, 234, 226',
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
    foreground: '45, 48, 31',
  },
  {
    name: 'Light Tan',
    background: '229, 225, 219',
    foreground: '69, 61, 56',
  },
  {
    name: 'Light White',
    background: '234, 233, 229',
    foreground: '72, 71, 65',
  },
];

export const Intro = {
  intros: [
    {
      label: 'For Anyone',
      text: 'Hi! I’m a software engineer and machine learning researcher with a passion for intentional, beautiful, and intelligent digital experiences.',
    },
    {
      label: 'Recruiters',
      text: 'I’m a software engineer and ML researcher who combines strong systems thinking with product intuition and design sensibility to build impactful, human-centered software.',
    },
    {
      label: 'Engineers',
      text: 'I’m a full-stack engineer with a research mindset. I care deeply about system design, clean abstractions, and using ML thoughtfully while never losing sight of usability.',
    },
    {
      label: 'Product Managers',
      text: 'I bridge engineering, research, and design. I enjoy translating ambiguous product ideas into scalable systems and intuitive experiences, working across disciplines.',
    },
    {
      label: 'Creatives',
      text: "I'm a programmer but also an artist at heart. I love blending creativity with technology to craft unique digital experiences. Let's collaborate!",
    },
  ],
  bio: `I’m drawn to software and machine learning for their ability to turn ideas into living systems.
  
  To me, code isn’t just a technical tool. It is a creative medium that can express logic, structure, and intention at scale. I approach engineering problems with a designer’s and artist’s sensitivity, paying close attention to how systems are shaped architecturally, visually, and interactively.
  
  Outside of software, I stay creative through music (guitar and oboe) and fashion design, and active through rock climbing, soccer, and weight training. These interests help me think about form, rhythm, and balance, and they influence how I build technology: paying attention to structure, flow, and the experience of the people using what I build.`,
};

export const Projects = [
  {
    projectUrl: 'motion-planning-visualizer',
    title: 'Motion Planning Visualizer',
    caption: 'React, Zustand, Tailwind CSS',
    date: 'October 2025 - December 2025',
    description: `The Motion Planning Visualizer is an interactive web application built for Computational Geometry (CSCI 716) that explores algorithmic approaches to 2D motion planning. The tool demonstrates two fundamentally different strategies—visibility graphs, which prioritize shortest paths, and Voronoi graphs, which maximize clearance from obstacles—allowing users to directly compare their trade-offs. Users can draw custom obstacle configurations and watch paths emerge step-by-step, turning abstract geometric/computational concepts into tangible, intuitive experiences. The project emphasizes clarity, interactivity, and algorithmic insight through visualization.`,
    technologies: ['React', 'Zustand', 'Tailwind CSS', 'Firebase'],
    images: [
      '/projects/motion-planning-visualizer.png',
      '/projects/motion-planning-visualizer-1.png',
      '/projects/motion-planning-visualizer-2.png',
      '/projects/motion-planning-visualizer-3.png',
      '/projects/motion-planning-visualizer-4.png',
      '/projects/motion-planning-visualizer-5.png',
      '/projects/motion-planning-visualizer-6.png',
    ],
    link: 'https://motion-planning-visualizer.web.app/',
    github: 'https://github.com/jyoon926/motion-planning-visualizer',
  },
  {
    projectUrl: 'audio-spheres',
    title: 'Audio Spheres',
    caption: 'React, Tailwind CSS, Spotify Web API, OpenAI API',
    date: 'November 2024 - Present',
    description: `Audio Spheres is an experimental music discovery platform that reimagines how users explore and organize music. Instead of relying on linear playlists or opaque recommendation feeds, the app presents music as an interactive, branching structure where each “sphere” represents a track and its musical lineage. Starting from a seed song, users expand outward into increasingly specific interpretations of their taste by navigating, panning, and growing the tree organically.
    
    The system is backed by persistent storage via Firestore, allowing users to save and revisit their evolving musical landscapes. Ongoing work explores integrating LLMs to generate expressive titles, descriptions, and visual identity for each sphere, treating machine learning not just as a recommender, but as a creative collaborator in shaping musical exploration.`,
    technologies: ['React', 'Tailwind CSS', 'Spotify Web API', 'Firebase', 'OpenAI API'],
    images: [
      '/projects/audio-spheres.png',
      '/projects/audio-spheres-1.png',
      '/projects/audio-spheres-2.png',
      '/projects/audio-spheres-3.png',
      '/projects/audio-spheres-4.png',
      '/projects/audio-spheres-5.png',
    ],
    link: 'https://audio-spheres.web.app/',
    github: 'https://github.com/jyoon926/audio-spheres',
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
      '/projects/models-at-rit.png',
      '/projects/models-at-rit-1.png',
      '/projects/models-at-rit-2.png',
      '/projects/models-at-rit-3.png',
      '/projects/models-at-rit-4.png',
      '/projects/models-at-rit-5.png',
      '/projects/models-at-rit-6.png',
      '/projects/models-at-rit-7.png',
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
      '/projects/chris-elliott.png',
      '/projects/chris-elliott-1.png',
      '/projects/chris-elliott-3.png',
      '/projects/chris-elliott-2.png',
      '/projects/chris-elliott-4.png',
      '/projects/chris-elliott-5.png',
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
      "Inspired Playlists was a personal project designed to explore the potential of the Spotify Web API and the Cohere LLM API. I was intrigued by how Spotify's recommendation algorithms, like those behind 'Discover Weekly,' 'Daylist,' and features like DJ and suggested songs, often felt like an echo chamber—reinforcing familiar tastes and making it harder to discover fresh music. I built this website to break that pattern, offering a more intentional and liberating way to discover new artists and songs.",
    technologies: ['Angular', 'Firebase', 'Cohere API'],
    images: [
      '/projects/inspired-playlists.png',
      '/projects/inspired-playlists-1.png',
      '/projects/inspired-playlists-2.png',
      '/projects/inspired-playlists-3.png',
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
      'I designed and built an LLM-powered conversational assistant that reimagines how patients discover healthcare providers on hospital websites. Working across .NET and Azure infrastructure, I implemented a real-time query workflow and paired it with interactive React components to create a seamless, patient-facing experience. To evaluate and improve agent behavior, I developed a structured assessment framework spanning 100+ representative conversation scenarios, enabling systematic iteration on prompting and agent design. Following the success of this work, I was tasked with engineering an experimental pipeline to measure how response quality changes when the assistant is augmented with organization-specific knowledge bases, helping inform whether healthcare systems should invest in custom retrieval infrastructure or rely on general-purpose language models.',
  },
  {
    company: 'Dassault Systèmes BIOVIA',
    role: 'Software Engineer Intern',
    date: 'June 2024 — December 2024',
    description:
      'During my second internship at Dassault Systèmes, I focused on building full-stack automation tools that reduced friction in large-scale project workflows. Using Angular and Node.js, I designed integrations between Jira and internal issue-tracking systems, eliminating 15+ hours of manual work per week for project teams. Alongside this systems work, I implemented user stories and resolved production bugs across a .NET C# and Angular stack, contributing directly to the 3DEXPERIENCE platform used by enterprise customers. The role emphasized reliability, maintainability, and thoughtful abstraction in a complex, long-lived codebase.',
  },
  {
    company: 'Dassault Systèmes BIOVIA',
    role: 'Software Engineer Intern',
    date: 'May 2023 — December 2023',
    description:
      'In my first internship at Dassault Systèmes, I worked on modernizing and optimizing legacy systems. I redesigned a core search feature using Angular and .NET, achieving a 90% improvement in search performance and responsiveness. I also developed backend endpoints to streamline interactions with Oracle databases, significantly reducing data retrieval times. In parallel, I built internal tooling with Angular, Node.js, and Express to automate the generation of demo data, improving developer productivity and environment consistency across teams.',
  },
  {
    company: 'RIT Department of Computer Science',
    role: 'Student Lab Instructor',
    date: 'August 2022 — December 2022',
    description:
      'I supported undergraduate computer science students through hands-on lab instruction in Python and Java, covering foundational topics including object-oriented programming, algorithms, and data structures. I provided detailed feedback on assignments and projects while also tutoring over 100 students at the GCCIS Tutoring Center, helping students strengthen both conceptual understanding and practical problem-solving skills.',
  },
];

export const Education = {
  school: 'Rochester Institute of Technology',
  degree: 'Combined Bachelor of Science and Master of Science in Computer Science',
  location: 'Rochester, NY',
  date: 'August 2021 — May 2026',
  bullets: [
    'Cumulative GPA: 3.89/4.0',
    'Master’s Thesis: Unified Graph Representations for Multimodal Mathematical Information Retrieval',
    'Relevant coursework: Information Retrieval, Computer Vision, Graph Databases, Machine Learning, Computational Geometry, Parallel and Distributed Systems, Programming Language Concepts, Principles of Database Management, Intro to AI, Analysis of Algorithms, Mechanics of Programming, Intro to Software Engineering, CS Theory',
    'Activities: RIT Philharmonic Orchestra (Principal Oboe), RIT Chamber Orchestra (Principal Oboe), RIT Fabrick (Co-Founder and President)',
  ],
};

export const Skills = {
  sections: [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'TypeScript', icon: <BiLogoTypescript /> },
        { name: 'JavaScript', icon: <BiLogoJavascript /> },
        { name: 'Python', icon: <BiLogoPython /> },
        { name: 'Java', icon: <BiLogoJava /> },
        { name: 'C#', icon: <SiCsharp /> },
        { name: 'C', icon: <SiC /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'HTML/CSS', icon: <BiLogoHtml5 /> },
        { name: 'SQL', icon: <HiDatabase /> },
      ],
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'React', icon: <BiLogoReact /> },
        { name: 'Next.js', icon: <RiNextjsFill /> },
        { name: 'Angular', icon: <BiLogoAngular /> },
        { name: '.NET', icon: <SiDotnet /> },
        { name: 'Node.js', icon: <BiLogoNodejs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'Tailwind CSS', icon: <BiLogoTailwindCss /> },
        { name: 'Spring', icon: <BiLogoSpringBoot /> },
      ],
    },
    {
      name: 'AI/ML',
      skills: [
        { name: 'PyTorch', icon: <SiPytorch /> },
        { name: 'Hugging Face', icon: <SiHuggingface /> },
        { name: 'OpenCV', icon: <SiOpencv /> },
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'NumPy', icon: <SiNumpy /> },
        { name: 'Jupyter Notebook', icon: <SiJupyter /> },
        { name: 'Pandas', icon: <SiPandas /> },
      ],
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Supabase', icon: <SiSupabase /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'AWS', icon: <BiLogoAws /> },
        { name: 'Docker', icon: <BiLogoDocker /> },
        { name: 'Jenkins', icon: <SiJenkins /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'PostgreSQL', icon: <BiLogoPostgresql /> },
        { name: 'Oracle', icon: <SiOracle /> },
        { name: 'MariaDB', icon: <SiMariadb /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Figma', icon: <SiFigma /> },
      ],
    },
    {
      name: 'Interests/Hobbies',
      skills: [
        { name: 'Web Development', icon: <MdComputer /> },
        { name: 'Game Development', icon: <IoGameController /> },
        { name: 'Graphic Design', icon: <RiPenNibFill /> },
        { name: '3D Art', icon: <PiCubeTransparent /> },
        { name: 'Fashion', icon: <GiSewingNeedle /> },
        { name: 'Music Production', icon: <IoMusicalNotes /> },
        { name: 'Rock Climbing', icon: <GiStoneBlock /> },
        { name: 'Oboe', icon: <GiClarinet /> },
        { name: 'Guitar', icon: <GiGuitar /> },
        { name: 'Photography', icon: <IoCameraSharp /> },
      ],
    },
  ],
};

export const Contact = {
  links: [
    {
      url: 'mailto:jy9726@rit.edu',
      text: 'jy9726@rit.edu',
    },
    {
      url: 'https://www.linkedin.com/in/jaacobyoon/',
      text: 'LinkedIn',
    },
    {
      url: 'https://github.com/jyoon926/',
      text: 'GitHub',
    },
    {
      url: 'https://www.instagram.com/jaacobyoon/',
      text: 'Instagram',
    },
  ],
};

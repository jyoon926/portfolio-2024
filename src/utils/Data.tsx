import { BiLogoAngular, BiLogoAws, BiLogoDocker, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import ContactSection from '../components/Contact';
import EducationSection from '../components/Education';
import ExperienceSection from '../components/Experience';
import IntroSection from '../components/Intro';
import ProjectsSection from '../components/Projects';
import SkillsSection from '../components/Skills';
import { SiC, SiCplusplus, SiCsharp, SiDotnet, SiExpress, SiFigma, SiFirebase, SiHuggingface, SiJenkins, SiMariadb, SiMongodb, SiMysql, SiNumpy, SiOracle, SiPandas, SiPostman, SiPytorch, SiSupabase, SiTensorflow } from 'react-icons/si';
import { RiNextjsFill, RiPenNibFill } from 'react-icons/ri';
import { MdComputer } from 'react-icons/md';
import { PiCubeTransparent } from 'react-icons/pi';
import { IoCameraSharp, IoGameController, IoMusicalNotes } from 'react-icons/io5';
import { GiClarinet, GiGuitar, GiSewingNeedle, GiStoneBlock } from 'react-icons/gi';
import { HiDatabase } from 'react-icons/hi';

export const Sections = [
  { title: 'Intro', component: IntroSection },
  { title: 'Projects', component: ProjectsSection },
  { title: 'Experience', component: ExperienceSection },
  { title: 'Education', component: EducationSection },
  { title: 'Skills', component: SkillsSection },
  // { title: 'Creative Works', component: CreativeWorksSection },
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

export const Intro = {
  intros: [
    {
      label: 'For Anyone',
      text: "Hi! I am a software engineer who cares about making beautiful and impactful digital products.",
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
  ],
  bio: `I am a fifth-year BS/MS student in computer science at RIT. Drawing from my passion for art and design, I craft digital experiences by blending technical expertise with creative vision. I thrive on technical challenges and approach software development as a continuous journey of innovation, always pushing the boundaries of what's possible through code.`
};

export const Projects = [
  {
    projectUrl: 'motion-planning-visualizer',
    title: 'Motion Planning Visualizer',
    caption: 'React, Zustand, Tailwind CSS',
    date: 'October 2025 - December 2025',
    description: `The Motion Planning Visualizer is a web application created for the course Computational Geometry (CSCI 716). This visualizer demonstrates two conceptually different approaches to solving the motion planning problem—finding a path for an agent from a start point to a goal point while avoiding obstacles. The application allows users to draw obstacles and see the path-finding algorithms computed step-by-step. A "Compare" mode is included to showcase the trade-off between the visibility graph (shortest path) and voronoi graph (maximum clearance) approaches.`,
    technologies: ['React', 'Zustand', 'Tailwind CSS', 'Firebase'],
    images: [
      '/projects/motion-planning-visualizer-1.png',
      '/projects/motion-planning-visualizer-2.png',
      '/projects/motion-planning-visualizer-5.png',
      '/projects/motion-planning-visualizer-4.png',
      '/projects/motion-planning-visualizer-3.png',
      '/projects/motion-planning-visualizer.png',
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
    description: `After experimenting with the Spotify Web API last year, I set out to create a more innovative and immersive way to explore music. This led to Audio Spheres, an app that allows users to discover songs through an interactive, tree-like interface. Each 'sphere' begins with a seed track and branches out into hyper-specific representations of the user's music tastes. I've developed a proof of concept where users can intuitively navigate the tree by panning and zooming, adding new nodes that represent tracks inspired by the ancestry of their branch. Recently, I connected the app to a Firestore database, enabling users to create and manage their spheres seamlessly. This improvement allows users to save their progress and return to their personalized music exploration anytime. Looking ahead, I plan to incorporate OpenAI's API to generate creative elements like titles, labels, descriptions, and playlist covers, further enhancing the personalization and creativity of the experience.`,
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
      "Inspired Playlists was a personal project designed to explore the potential of the Spotify Web API and the Cohere API (LLM). I was intrigued by how Spotify's recommendation algorithms, like those behind 'Discover Weekly,' 'Daylist,' and features like DJ and suggested songs, often felt like an echo chamber—reinforcing familiar tastes and making it harder to discover fresh music. I built this website to break that pattern, offering a more intentional and liberating way to discover new artists and songs.",
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
      'I designed and implemented an intelligent LLM-powered conversational assistant that transforms how patients find healthcare providers on hospital websites. Using .NET frameworks and Azure infrastructure, I built a workflow capable of handling real-time queries and developed interactive React components for seamless user experiences. The project involved creating a comprehensive evaluation framework across 100+ conversation scenarios to drive improvements in agent design and prompting. Due to the success of this primary project, I was assigned an additional challenge to engineer an experiment pipeline to evaluate the effectiveness of assistant responses to patient questions when augmented with organization-specific knowledge base content. This will be used to help determine whether healthcare organizations should invest in building custom knowledge base infrastructure, or whether current large language models suffice for typical patient queries.',
  },
  {
    company: 'Dassault Systèmes BIOVIA',
    role: 'Software Engineer Intern',
    date: 'June 2024 — December 2024',
    description:
      'During my second internship at Dassault Systèmes, I developed full-stack automation tools using Angular and Node.js to integrate Jira with internal issue tracking software, streamlining the project management process and eliminating 15+ hours of manual work weekly for project teams. Additionally, I implemented full-stack user stories and bug fixes with .NET C# and Angular, contributing to the development of the 3DEXPERIENCE platform for enterprise users.',
  },
  {
    company: 'Dassault Systèmes BIOVIA',
    role: 'Software Engineer Intern',
    date: 'May 2023 — December 2023',
    description:
      'In my first internship at Dassault Systèmes, I overhauled the search functionality in a legacy application using Angular and .NET, resulting in a 90% improvement in search performance. Additionally, I developed .NET endpoints to optimize interactions with Oracle, significantly reducing data retrieval times. I also built internal tools using Angular, Node.js, and Express to automate the creation of demo data in application environments.',
  },
  {
    company: 'RIT Department of Computer Science',
    role: 'Student Lab Instructor',
    date: 'August 2022 — December 2022',
    description:
      'I guided 24 students through hands-on programming assignments in Python and Java, covering core concepts like object-oriented programming, algorithms, and data structures. I provided detailed feedback on projects and assignments while also tutoring over 100 students at the GCCIS Tutoring Center, helping strengthen foundational CS skills.',
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
    'Activities: RIT Philharmonic Orchestra (Principal Oboe), RIT Fabrick (Co-Founder and President)'
  ]
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
      ]
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
      ]
    },
    {
      name: 'AI/ML',
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'PyTorch', icon: <SiPytorch /> },
        { name: 'Hugging Face', icon: <SiHuggingface /> },
        { name: 'NumPy', icon: <SiNumpy /> },
        { name: 'Pandas', icon: <SiPandas /> },
      ]
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
      ]
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
      ]
    }
  ]
}

export const CreativeWorks = [
  {
    caption: 'Beyond Fashion 2024',
    image: '/creative-works/beyond-fashion-2024-1.jpg',
  },
  {
    caption: 'Beyond Fashion 2024',
    image: '/creative-works/beyond-fashion-2024-2.jpeg',
  },
  {
    caption: 'Beyond Fashion 2024',
    image: '/creative-works/beyond-fashion-2024-3.jpg',
  },
  {
    caption: 'Beyond Fashion 2023',
    image: '/creative-works/beyond-fashion-2023-1.jpeg',
  },
  {
    caption: 'Beyond Fashion 2024',
    image: '/creative-works/beyond-fashion-2023-2.jpeg',
  },
  {
    caption: 'Line Woman',
    image: '/creative-works/line-woman.jpg',
  },
  {
    caption: 'Disassociation',
    image: '/creative-works/disassociation.jpg',
  },
]

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

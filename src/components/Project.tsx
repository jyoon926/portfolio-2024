import { Link, useParams } from 'react-router-dom';
import { Projects } from '../utils/Data';
import { useEffect, useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos, MdOpenInNew } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import Slideshow from './Slideshow';
import useDocumentTitle from '../utils/useDocumentTitle';

interface Project {
  projectUrl: string;
  title: string;
  caption: string;
  date: string;
  description: string;
  technologies: string[];
  images: string[];
  link: string;
  github: string;
}

export default function Project() {
  const { projectUrl } = useParams();
  const [project, setProject] = useState<Project>();
  const [index, setIndex] = useState(-1);
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [slideshowId, setSlideshowId] = useState(0);

  useEffect(() => {
    const proj = Projects.find((project) => project.projectUrl === projectUrl);
    setProject(proj);
    if (proj) setIndex(Projects.indexOf(proj));
  }, [projectUrl]);

  const handlePhotoClick = (id: number) => {
    setIsSlideshowOpen(true);
    setSlideshowId(id);
  };

  useDocumentTitle(`Project — ${project?.title}`);

  return (
    <div className="absolute top-0 left-0 z-40 w-full min-h-screen p-5 pb-24 flex flex-col justify-start items-start gap-10">
      <Link
        className="fixed top-0 left-0 w-full p-3.5 flex flex-row gap-1 border-b z-40 backdrop-blur bg-background/50"
        to="/"
      >
        <MdArrowBackIos className="text-sm" /> Home
      </Link>
      {project ? (
        <>
          <div className="w-full flex flex-col items-center gap-3 mt-24">
            <p className="opacity-60 text-center">Project Overview</p>
            <p className="text-4xl text-center">{project.title}</p>
            <p className="text-center">{project.date}</p>
            <button
              className="my-10 lg:w-3/4 border bg-foreground/15 backdrop-blur p-5 lg:p-10 duration-300 hover:bg-foreground/25"
              onClick={() => handlePhotoClick(0)}
            >
              <img className="w-full" src={project.images[0]} alt={`Main project image for '${project.title}'.`} />
            </button>
            <div className="w-full mb-8 flex flex-col md:flex-row justify-center gap-3">
              <p className="md:w-1/4 max-w-[200px] opacity-60">About</p>
              <p className="md:w-3/4 max-w-[600px] leading-normal whitespace-pre-line">{project.description}</p>
            </div>
            <div className="w-full mb-10 flex flex-col md:flex-row justify-center gap-3">
              <p className="md:w-1/4 max-w-[200px] opacity-60">Technologies</p>
              <p className="md:w-3/4 max-w-[600px] leading-normal">{project.technologies.join(', ')}</p>
            </div>
            <div className="w-full mb-10 flex flex-row justify-center gap-5">
              <Link
                className="bg-foreground/15 backdrop-blur py-3 w-32 flex flex-row items-center justify-center gap-2 border duration-300 hover:bg-foreground/15"
                to={project.link}
                target="_blank"
              >
                <MdOpenInNew className="text-xl" />
                Visit Site
              </Link>
              <Link
                className="bg-foreground/15 backdrop-blur py-3 w-32 flex flex-row items-center justify-center gap-2 border duration-300 hover:bg-foreground/15"
                to={project.github}
                target="_blank"
              >
                <FaGithub className="text-xl" />
                GitHub
              </Link>
            </div>
            <div
              className="w-full flex flex-col md:grid gap-5"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))' }}
            >
              {project.images.slice(1).map((image, index) => (
                <button
                  className="border bg-foreground/15 backdrop-blur p-5 md:p-8 duration-300 hover:bg-foreground/25"
                  key={index}
                  onClick={() => handlePhotoClick(index + 1)}
                >
                  <img className="w-full" src={image} alt={`Project image for '${project.title}'.`} />
                </button>
              ))}
            </div>
            <div className="w-full flex flex-row justify-between pt-20 pl-3 pr-1">
              <div>
                {index > 0 && (
                  <Link className="flex flex-row items-center gap-5" to={`/project/${Projects[index - 1].projectUrl}`}>
                    <MdArrowBackIos className="text-xl" />
                    <div className="flex flex-col gap-1">
                      <p className="opacity-60">Previous Project</p>
                      <p className="md:text-2xl">{Projects[index - 1].title}</p>
                    </div>
                  </Link>
                )}
              </div>
              <div>
                {index < Projects.length - 1 && (
                  <Link className="flex flex-row items-center gap-5" to={`/project/${Projects[index + 1].projectUrl}`}>
                    <div className="flex flex-col gap-1 items-end">
                      <p className="opacity-60">Next Project</p>
                      <p className="md:text-2xl">{Projects[index + 1].title}</p>
                    </div>
                    <MdArrowForwardIos className="text-xl" />
                  </Link>
                )}
              </div>
            </div>
          </div>
          <Slideshow
            selected={slideshowId}
            photos={project.images}
            isOpen={isSlideshowOpen}
            onClose={() => setIsSlideshowOpen(false)}
          />
        </>
      ) : (
        "Project doesn't exist!"
      )}
    </div>
  );
}

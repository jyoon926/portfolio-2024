import { Link, useParams } from 'react-router-dom';
import { Projects } from '../Data';
import { useEffect, useState } from 'react';
import { MdArrowBack, MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

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

  useEffect(() => {
    const proj = Projects.find((project) => project.projectUrl === projectUrl);
    setProject(proj);
    if (proj) setIndex(Projects.indexOf(proj));
  }, [projectUrl]);

  return (
    <div className="absolute top-0 left-0 bg-background z-40 w-full min-h-screen p-10 pb-20 flex flex-col justify-start items-start gap-10">
      <Link className="mb-10 flex flex-row items-center gap-2 transition-opacity opacity-60 hover:opacity-100" to="/">
        <MdArrowBack className="text-lg" /> Home
      </Link>
      {project ? (
        <>
          <div className="w-full flex flex-col items-center">
            <p className="opacity-60 mb-5 text-center">Project Overview</p>
            <p className="text-8xl mb-3 text-center">{project.title}</p>
            <p className="text-3xl text-center">{project.date}</p>
            <div className="my-20 w-3/4 rounded-xl border bg-foreground/10 p-20" key={index}>
              <img className="w-full rounded-lg shadow-lg" src={project.images[0]} alt="" />
            </div>
            <div className="w-full mb-10 flex flex-row justify-center gap-10">
              <p className="w-1/4 max-w-[200px] opacity-60">About</p>
              <p className="w-3/4 max-w-[600px] leading-snug">{project.description}</p>
            </div>
            <div className="w-full mb-20 flex flex-row justify-center gap-10">
              <p className="w-1/4 max-w-[200px] opacity-60">Technologies</p>
              <p className="w-3/4 max-w-[600px] leading-snug">{project.technologies.join(', ')}</p>
            </div>
            <div className="w-full mb-20 flex flex-row justify-center gap-5">
              <Link
                className="bg-foreground/10 py-4 w-32 text-center border rounded duration-300 hover:bg-foreground/15"
                to={project.link}
                target="_blank"
              >
                Visit Site
              </Link>
              <Link
                className="bg-foreground/10 py-4 w-32 text-center border rounded duration-300 hover:bg-foreground/15"
                to={project.github}
                target="_blank"
              >
                GitHub
              </Link>
            </div>
            <div className="w-full grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(600px, 1fr))' }}>
              {project.images.slice(1).map((image, index) => (
                <div className="rounded-lg border bg-foreground/10 p-10" key={index}>
                  <img className="w-full rounded-md shadow-md" src={image} alt={image} />
                </div>
              ))}
            </div>
            <div className="w-full flex flex-row justify-between pt-20 my-12">
              <div>
                {index > 0 && (
                  <Link className="flex flex-row items-center gap-5" to={`/project/${Projects[index - 1].projectUrl}`}>
                    <MdArrowBackIos className="text-xl" />
                    <div className="flex flex-col gap-1">
                      <p className="opacity-60">Previous Project</p>
                      <p className="text-2xl">{Projects[index - 1].title}</p>
                    </div>
                  </Link>
                )}
              </div>
              <div>
                {index < Projects.length - 1 && (
                  <Link className="flex flex-row items-center gap-5" to={`/project/${Projects[index + 1].projectUrl}`}>
                    <div className="flex flex-col gap-1 items-end">
                      <p className="opacity-60">Next Project</p>
                      <p className="text-2xl">{Projects[index + 1].title}</p>
                    </div>
                    <MdArrowForwardIos className="text-xl" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        "Project doesn't exist!"
      )}
    </div>
  );
}

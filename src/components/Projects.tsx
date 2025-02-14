import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Projects } from '../utils/Data';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const projectRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            toggleActions: 'play none none none',
          },
        }
      );
    }

    projectRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="border-t flex flex-col items-start justify-start mx-5 py-24">
      <p className="text-4xl mb-10" ref={headerRef}>Latest Projects</p>
      <div
        className="w-full flex flex-col md:grid gap-x-5 gap-y-8"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))' }}
      >
        {Projects.map((project, index) => (
          <Link
            className="flex flex-col gap-3 opacity-0" // Initial opacity 0
            key={index}
            to={`/project/${project.projectUrl}`}
            ref={(el) => (projectRefs.current[index] = el)}
          >
            <div className="border duration-300 bg-foreground/15 hover:bg-foreground/25 p-5 md:p-8">
              <img src={project.images[0]} alt={`Project thumbnail for '${project.title}'`} />
            </div>
            <div className="grow flex flex-col leading-snug text-nowrap">
              <p>{project.title}</p>
              <p className="opacity-50">{project.caption}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Experience } from '../utils/Data';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
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

    experienceRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
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
    <div className="flex flex-col items-start justify-start mx-5 border-t py-24">
      <p className="text-4xl text-center mb-12" ref={headerRef}>Experience</p>
      <div className="w-full flex flex-col gap-12">
        {Experience.map((job, index) => (
          <div
            className="flex flex-col md:flex-row gap-3 justify-start items-start leading-snug opacity-0" // Initial opacity 0
            key={index}
            ref={(el) => (experienceRefs.current[index] = el)}
          >
            <div className="flex flex-col w-full gap-1 md:w-1/3">
              <p className="font-bold">{job.company}</p>
              <p className="opacity-50">{job.date}</p>
            </div>
            <div className="flex flex-col w-full gap-1 md:w-2/3 max-w-[600px]">
              <p className="font-bold">{job.role}</p>
              <p className="opacity-50">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

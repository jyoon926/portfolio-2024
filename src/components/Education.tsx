import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Education } from '../utils/Data';

gsap.registerPlugin(ScrollTrigger);

export default function EducationSection() {
  const educationRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    // Fade in the header
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
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Fade in the education section content
    if (educationRef.current) {
      gsap.fromTo(
        educationRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: educationRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-start justify-start mx-5 border-t py-24">
      <p
        className="text-4xl text-center mb-12 opacity-0"
        ref={headerRef} // Reference the header for fade-in effect
      >
        Education
      </p>
      <div className="w-full flex flex-col gap-12">
        <div
          className="flex flex-col md:flex-row gap-3 justify-start items-start leading-snug opacity-0"
          ref={educationRef} // Reference the content for fade-in effect
        >
          <div className="flex flex-col w-full gap-1 md:w-1/3">
            <p className="font-bold">{Education.school}</p>
            <p className="opacity-60">{Education.location}</p>
          </div>
          <div className="flex flex-col w-full gap-1 md:w-2/3 max-w-[600px]">
            <p className="font-bold">{Education.degree}</p>
            <p className="opacity-60">{Education.date}</p>
            {Education.bullets.map((bullet) => (
              <p className="opacity-60 mt-3" key={bullet}>{bullet}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

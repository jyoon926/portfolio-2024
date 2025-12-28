import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Skills } from '../utils/Data';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]); // To track each skills section
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]); // To track individual skill items

  useEffect(() => {
    // Fade in the "Skills & Interests" header
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

    // Fade in each skills section header with staggered delay
    sectionsRef.current.forEach((sectionRef, index) => {
      if (sectionRef) {
        gsap.fromTo(
          sectionRef,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.2, // Stagger delay based on the section's index
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    // Fade in each skill item with staggered delay
    skillRefs.current.forEach((skillRef, index) => {
      if (skillRef) {
        gsap.fromTo(
          skillRef,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.02,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: skillRef,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="border-t flex flex-col items-start justify-start mx-5 py-24">
      <div className="w-full flex flex-col">
        <p
          className="text-4xl mb-12 opacity-0"
          ref={headerRef} // Reference the "Skills & Interests" header for fade-in effect
        >
          Skills & Interests
        </p>
        <div className="flex flex-col gap-7">
          {Skills.sections.map((section, sectionIndex) => (
            <div
              className="flex flex-col gap-2 opacity-0"
              key={section.name}
              ref={(el) => (sectionsRef.current[sectionIndex] = el)} // Reference each section header
            >
              <p>{section.name}</p>
              <div className="flex flex-row gap-x-5 gap-y-2 flex-wrap">
                {section.skills.map((skill) => (
                  <div
                    className="flex flex-row items-center justify-start gap-1.5 leading-none opacity-0"
                    key={skill.name}
                    ref={(el) => skillRefs.current.push(el)} // Reference each individual skill item
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="pt-0.5">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

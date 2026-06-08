import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdKeyboardArrowDown, MdOpenInNew } from 'react-icons/md';
import { Research } from '../utils/Data';

gsap.registerPlugin(ScrollTrigger);

function Abstract({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  const fadeMask = 'linear-gradient(to bottom, black 60%, transparent 100%)';

  return (
    <div className="flex flex-col gap-1 mb-2">
      <p
        className={`opacity-60 whitespace-pre-line overflow-hidden ${expanded ? 'max-h-none mb-2' : 'max-h-[7.5em]'}`}
        style={
          expanded
            ? undefined
            : { maskImage: fadeMask, WebkitMaskImage: fadeMask }
        }
      >
        {text}
      </p>
      <button
        className="w-fit flex flex-row items-center gap-0.5 opacity-60 hover:opacity-80 duration-300"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? 'Read less' : 'Read more'}
        <MdKeyboardArrowDown className={`text-2xl mt-[-0.1em] duration-300 ${expanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}

export default function ResearchSection() {
  const researchRefs = useRef<(HTMLDivElement | null)[]>([]);
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
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    researchRefs.current.forEach((el) => {
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
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-start justify-start mx-5 border-t py-24">
      <p className="text-4xl text-center mb-12" ref={headerRef}>
        Research
      </p>
      <div className="w-full flex flex-col gap-12">
        {Research.map((paper, index) => (
          <div
            className="flex flex-col md:flex-row gap-3 justify-start items-start leading-snug opacity-0"
            key={index}
            ref={(el) => (researchRefs.current[index] = el)}
          >
            <div className="flex flex-col w-full gap-1 md:w-1/3">
              <p className="font-bold mb-2">{paper.subtitle}</p>
              <p className="opacity-60">{paper.date}</p>
              {paper.meta.map((line) => (
                <p className="opacity-60" key={line}>
                  {line}
                </p>
              ))}
            </div>
            <div className="flex flex-col w-full gap-3 md:w-2/3 max-w-[600px]">
              <p className="font-bold mb-2">{paper.title}</p>
              <Abstract text={paper.abstract} />
              {paper.link && (
                <a
                  className="bg-foreground/15 backdrop-blur py-2 px-4 w-fit flex flex-row items-center justify-center gap-2 border duration-300 hover:bg-foreground/25 leading-none"
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdOpenInNew className="text-xl" />
                  View publication
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

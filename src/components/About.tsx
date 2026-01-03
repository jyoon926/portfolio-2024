import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Intro } from '../utils/Data';
import { IoArrowDownSharp } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  onTabClick: (index: number) => void;
}

export default function AboutSection({ onTabClick }: Props) {
  const headerRef = useRef<HTMLParagraphElement | null>(null);
  const bioRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLButtonElement | null>(null);

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
    // Fade in the bio
    if (bioRef.current) {
      gsap.fromTo(
        bioRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 0.6,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bioRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
    // Fade in the button
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 0.6,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-start justify-start mx-5 border-t py-24">
      <p className="text-4xl text-center mb-12" ref={headerRef}>
        About
      </p>
      <p className="text-lg md:text-2xl leading-snug opacity-60 whitespace-pre-line mb-8 max-w-[1500px]" ref={bioRef}>{Intro.bio}</p>
      <button className="text-lg md:text-2xl button" onClick={() => onTabClick(6)} ref={ctaRef}>
        Contact me <IoArrowDownSharp />
      </button>
    </div>
  );
}

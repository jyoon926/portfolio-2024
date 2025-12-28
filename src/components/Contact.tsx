import { useEffect, useRef } from 'react';
import { Contact } from '../utils/Data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const fadeInRefs = useRef<(HTMLDivElement | HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    fadeInRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: index * 0.04,
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
    <div className="flex flex-col md:flex-row mx-5 py-5 gap-5 border-t">
      <div className="grow flex flex-col justify-between gap-5">
        <div className="leading-snug">
          <div className="flex flex-row gap-3 items-center pb-1" ref={(el) => fadeInRefs.current.push(el)}>
            <div className="live">
              <div className="dot" />
              <div className="radius" />
            </div>
            <p ref={(el) => fadeInRefs.current.push(el)}>Available for work</p>
          </div>
          <p className="opacity-60" ref={(el) => fadeInRefs.current.push(el)}>
            I am currently looking for full time software engineering roles starting in 2026. I hope to hear from you!
          </p>
        </div>
        <div className="flex flex-row gap-8">
          {Contact.links.map((link) => (
            <a
              className="border-b pb-0.5"
              href={link.url}
              target="_blank"
              key={link.url}
              ref={(el) => fadeInRefs.current.push(el)}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
      <img
        className="w-80 mix-blend-luminosity"
        src="/portraits/bw-headshot-2.jpg"
        alt="A portrait of Jacob Yoon. Shot by Sam Su."
        ref={(el) => fadeInRefs.current.push(el)}
      />
    </div>
  );
}

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Intro } from '../utils/Data';
import { IoArrowDownSharp } from 'react-icons/io5';

interface Props {
  isLoaded: boolean;
  onTabClick: (index: number) => void;
}

export default function IntroSection({ isLoaded, onTabClick }: Props) {
  const [currentTab, setCurrentTab] = useState(0);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  // Tabs scroll gradient behavior
  useEffect(() => {
    const tabContainer = tabContainerRef.current;
    if (tabContainer) {
      const updateGradientVisibility = () => {
        setShowLeftGradient(tabContainer.scrollLeft > 2);
        setShowRightGradient(tabContainer.scrollLeft < tabContainer.scrollWidth - tabContainer.clientWidth - 2);
      };
      updateGradientVisibility();
      tabContainer.addEventListener('scroll', updateGradientVisibility);
      return () => tabContainer.removeEventListener('scroll', updateGradientVisibility);
    }
  }, []);

  // Fade-in animation when isLoaded becomes true
  useEffect(() => {
    if (isLoaded && introRef.current) {
      const elements = introRef.current.children;
      gsap.fromTo(
        elements,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, stagger: 0.15, ease: 'power2.out' }
      );
    }
  }, [isLoaded]);

  const handleTabClick = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div className="relative">
      <div className="min-h-screen w-full flex flex-col items-center p-5 pt-32 pb-24">
        <div ref={introRef} className="max-w-[800px] w-full flex flex-col items-start justify-start overflow-hidden">
          {/* Tabs */}
          <div className="w-full relative pb-5 z-[1]">
            <div className={`gradient-left ${!showLeftGradient && 'opacity-0'}`}></div>
            <div className={`gradient-right ${!showRightGradient && 'opacity-0'}`}></div>
            <div
              ref={tabContainerRef}
              className="flex flex-row gap-1 text-nowrap overflow-x-auto overflow-y-hidden scrollbar-hidden"
            >
              {Intro.intros.map((intro, index) => (
                <div key={index}>
                  <button
                    className={`pr-1 whitespace-nowrap transition-opacity hover:opacity-100 ${currentTab !== index && 'opacity-50'}`}
                    onClick={() => handleTabClick(index)}
                  >
                    {intro.label}
                  </button>
                  {index < Intro.intros.length - 1 && <span className="opacity-50">/</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-[800px] leading-[1.15] pb-10 text-2xl md:text-3xl z-[1]">{Intro.intros[currentTab].text}</div>
          <p className="leading-snug pb-10 max-w-[600px] z-[1]">{Intro.bio}</p>
          <div className="flex flex-row gap-5 pb-10 z-[1]">
            <button className="button" onClick={() => onTabClick(1)}>
              View Projects <IoArrowDownSharp />
            </button>
            <a className="button" href="/documents/Jacob_Yoon_Resume.pdf" target="_blank">
              Resume <IoArrowDownSharp className="rotate-[-135deg]" />
            </a>
          </div>
          <img className="w-[300px] mix-blend-luminosity z-[1]" src="/portraits/bw-headshot.jpg" alt="A portrait of Jacob Yoon. Shot by Sam Su." />
        </div>
      </div>
    </div>
  );
}

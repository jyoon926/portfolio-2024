import { useState, useRef, useEffect } from 'react';
import { Intros } from '../utils/Data';
import { IoArrowDownSharp } from 'react-icons/io5';

interface Props {
  onTabClick: (index: number) => void;
}

export default function IntroSection({ onTabClick }: Props) {
  const [currentTab, setCurrentTab] = useState(0);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(false);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tabContainer = tabContainerRef.current;

    if (tabContainer) {
      // Function to check and update gradient visibility
      const updateGradientVisibility = () => {
        setShowLeftGradient(tabContainer.scrollLeft > 2);
        setShowRightGradient(tabContainer.scrollLeft < tabContainer.scrollWidth - tabContainer.clientWidth - 2);
      };

      // Initial check
      updateGradientVisibility();

      // Event listener for scrolling
      tabContainer.addEventListener('scroll', updateGradientVisibility);

      // Cleanup the event listener
      return () => {
        tabContainer.removeEventListener('scroll', updateGradientVisibility);
      };
    }
  }, []);

  return (
    <div className="relative">
      <div className="min-h-screen w-full flex flex-col items-center p-5 pt-32 pb-24">
        <div className="w-full max-w-[700px] flex flex-col items-start justify-start gap-5 overflow-hidden">
          <div className="w-full relative">
            {/* Gradients */}
            <div className={`gradient-left ${!showLeftGradient && 'opacity-0'}`}></div>
            <div className={`gradient-right ${!showRightGradient && 'opacity-0'}`}></div>
            {/* Tabs */}
            <div
              ref={tabContainerRef}
              className="flex flex-row gap-1 text-nowrap overflow-x-auto overflow-y-hidden scrollbar-hidden"
            >
              {Intros.map((intro, index) => (
                <div key={index}>
                  <button
                    className={`pr-1 whitespace-nowrap transition-opacity hover:opacity-100 ${currentTab !== index && 'opacity-50'}`}
                    onClick={() => setCurrentTab(index)}
                  >
                    {intro.label}
                  </button>
                  {index < Intros.length - 1 && <span className="opacity-50">/</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="leading-snug pb-5">{Intros[currentTab].text}</div>
          <p className="leading-snug">
            I am a fourth-year BS/MS student in computer science at RIT. My academic foundation is reinforced by real-world experience from two six-month software engineering co-ops at Dassault Systèmes, where I honed my full stack development skills. Drawing from my passion for art and design, I craft digital experiences by blending technical expertise with creative vision. I thrive on technical challenges and approach software development as a continuous journey of innovation, always pushing the boundaries of what's possible through code.
          </p>
          <div className="flex flex-row gap-5 pb-5">
            <button className="button" onClick={() => onTabClick(1)}>
              View Projects <IoArrowDownSharp />
            </button>
            <a className="button" href="/Jacob_Yoon_Resume.pdf" target="_blank">
              Resume <IoArrowDownSharp className="rotate-[-135deg]" />
            </a>
          </div>
          <img className="w-[300px] mix-blend-luminosity" src="/bw-headshot-abstract.jpg" alt="" />
        </div>
      </div>
      {/* <Star /> */}
    </div >
  );
}

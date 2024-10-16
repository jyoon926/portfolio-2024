import { useState, useRef, useEffect } from 'react';
import { Intros } from '../Data';
import { IoArrowDownSharp } from 'react-icons/io5';
import Star from './Star';

interface Props {
  onTabClick: (index: number) => void;
}

export default function Intro({ onTabClick }: Props) {
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
        setShowRightGradient(
          tabContainer.scrollLeft < tabContainer.scrollWidth - tabContainer.clientWidth - 2
        );
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
    <div className='relative'>
      <div className="min-h-screen w-full flex flex-col md:flex-row items-start justify-start gap-10 p-3 pt-20">
        <div className="w-full md:w-1/3 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="relative">
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
                    {index < Intros.length - 1 && (
                      <span className='opacity-50'>/</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="leading-snug">{Intros[currentTab].text}</div>
          </div>
          <img className="w-56 mix-blend-luminosity rounded-md border" src="/headshot.jpg" alt="" />
        </div>
        <div className="w-full md:w-2/3 flex flex-col items-start gap-3 pb-20">
          <p className="max-w-[800px] leading-snug">
            I am a fourth-year computer science student at RIT pursuing a combined BS/MS degree. I've cultivated a strong
            foundation in both theoretical knowledge and practical application. My academic journey has been complemented
            by two six-month co-ops as a software engineer intern at Dassault Systèmes, where I gained extensive hands-on industry experience
            in full stack development. My love for art and design enhances my ability to create digital experiences that
            are not only functionally robust but also visually compelling. Whether it's building responsive web
            applications or solving complex technical challenges, I approach every project with a growth mindset,
            continuously seeking to improve and innovate.
          </p>
          <button className='button' onClick={() => onTabClick(1)}>View Projects <IoArrowDownSharp /></button>
        </div>
      </div>
      <Star />
    </div>
  );
}

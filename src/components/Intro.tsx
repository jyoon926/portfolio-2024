import { useState, useRef, useEffect } from 'react';
import { Intro } from '../utils/Data';
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

  const handleTabClick = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div className="relative">
      <div className="min-h-screen w-full flex flex-col items-center p-5 pt-32 pb-24">
        <div className="w-full max-w-[800px] flex flex-col items-start justify-start overflow-hidden">
          {/* Tabs */}
          <div className="w-full relative pb-5">
            {/* Gradients */}
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
          <div className="leading-snug pb-10">{Intro.intros[currentTab].text}</div>
          <p className="leading-snug pb-10">{Intro.bio}</p>
          <div className="flex flex-row gap-5 pb-10">
            <button className="button" onClick={() => onTabClick(1)}>
              View Projects <IoArrowDownSharp />
            </button>
            <a className="button" href="/Jacob_Yoon_Resume.pdf" target="_blank">
              Resume <IoArrowDownSharp className="rotate-[-135deg]" />
            </a>
          </div>
          <img className="w-[300px] mix-blend-luminosity" src="/portraits/bw-headshot.jpg" alt="A portrait of Jacob Yoon. Shot by Sam Su." />
        </div>
      </div>
      {/* <Star /> */}
    </div >
  );
}

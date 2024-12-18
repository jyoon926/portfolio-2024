import { useState } from 'react';
import { Sections } from '../Data';

interface Props {
  currentSection: number;
  onTabClick: (index: number) => void;
}

export default function Menu({ currentSection, onTabClick }: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleTabClick = (index: number) => {
    onTabClick(index);
  };

  return (
    <>
      <div className="fixed w-full flex flex-row gap-6 py-3.5 px-5 items-center justify-between z-40 backdrop-blur-lg bg-background/70 border-b text-nowrap">
        <button onClick={() => handleTabClick(0)}>Jacob Yoon<span className='hidden sm:inline opacity-50'> — Software Engineer</span></button>
        <div className="hidden sm:flex flex-row gap-1 items-start overflow-x-scroll overflow-y-hidden scrollbar-hidden">
          {Sections.map((section, index) => (
            <div key={index}>
              <button
                className={`pr-1 transition-opacity hover:opacity-100 ${index !== currentSection && 'opacity-50'}`}
                onClick={() => handleTabClick(index)}
              >
                {section.title}
              </button>
              {index < Sections.length - 1 && (
                <span className='opacity-50'>/</span>
              )}
            </div>
          ))}
        </div>
        <button className="inline sm:hidden" onClick={() => setShowMenu(prev => !prev)}>{showMenu ? 'Close' : 'Menu'}</button>
      </div>
      <div className={`fixed inset-0 z-20 bg-background/70 backdrop-blur-lg flex flex-col justify-start items-start text-2xl gap-1 px-5 py-20 duration-300 ${showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {Sections.map((section, index) => (
          <button className={index !== currentSection ? 'opacity-50' : ''} onClick={() => {
            handleTabClick(index);
            setShowMenu(false);
          }}>
            {section.title}
          </button>
        ))}
      </div>
    </>
  );
}

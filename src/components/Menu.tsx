import React from 'react';
import { ColorSchemes, Sections } from '../Data';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

interface Props {
  onThemeChange: (value: number) => void;
  currentSection: number;
  onTabClick: (index: number) => void;
  colorScheme: number;
}

export default function Menu({ onThemeChange, currentSection, onTabClick, colorScheme }: Props) {
  const handleTabClick = (index: number) => {
    onTabClick(index);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onThemeChange(parseFloat(event.target.value));
  };

  return (
    <div className="fixed w-72 h-full flex flex-col p-5 md:p-10 items-start justify-between">
      <div className="flex flex-col gap-10 text-nowrap">
        <div className="text-2xl cursor-default">Jacob Yoon</div>
        <div className="hidden md:flex flex-col gap-2 items-start">
          {Sections.map((section, index) => (
            <button
              className={`transition-opacity hover:opacity-100 ${index !== currentSection && 'opacity-60'}`}
              onClick={() => handleTabClick(index)}
              key={index}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
      <div className="color-slider w-9 h-96 flex flex-col justify-start items-center rounded-full bg-foreground/15 overflow-hidden backdrop-blur z-40">
        <div className="notches grow flex flex-col justify-between items-center p-2 gap-1 pointer-events-none">
          <div className="w-5 h-5 flex justify-center items-center">
            <IoMdSunny className="text-lg opacity-80" />
          </div>
          {ColorSchemes.slice(0, -2).map((_, index) => (
            <div className="w-5 h-5 flex justify-center items-center dot" key={index}>
              <div className="w-2 h-2 bg-foreground/25 rounded-full" />
            </div>
          ))}
          <div className="w-5 h-5 flex justify-center items-center">
            <IoMdMoon className="text-lg opacity-80" />
          </div>
        </div>
        <input
          type="range"
          min="0"
          max={ColorSchemes.length - 1}
          step="0.1"
          value={colorScheme}
          onChange={handleSliderChange}
          className="slider absolute w-9 h-96 p-1"
        />
      </div>
    </div>
  );
}

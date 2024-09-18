import React, { useRef, useState, useEffect } from 'react';
import './App.scss';
import Menu from './components/Menu';
import { ColorSchemes, Sections } from './Data';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  // const [colorScheme, setColorScheme] = useState<number>(parseFloat(localStorage.getItem('theme')!) || 0);
  const [colorScheme, setColorScheme] = useState<number>(0);
  const refs = useRef(Sections.map(() => React.createRef<HTMLDivElement>()));

  const handleThemeChange = (value: number) => {
    setColorScheme(value);
    // localStorage.setItem('theme', value.toString());
  };

  const handleTabClick = (index: number) => {
    refs.current[index].current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentSection(index);
          }
        },
        { threshold: 0.5 }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return observer;
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const blendColors = (color1: string, color2: string, factor: number): string => {
    const [r1, g1, b1] = color1.split(',').map(Number);
    const [r2, g2, b2] = color2.split(',').map(Number);

    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));

    return `${r}, ${g}, ${b}`;
  };

  const getBlendedColors = () => {
    const lowerIndex = Math.floor(colorScheme);
    const upperIndex = Math.ceil(colorScheme) % ColorSchemes.length;
    const blendFactor = colorScheme - lowerIndex;

    const lowerScheme = ColorSchemes[lowerIndex];
    const upperScheme = ColorSchemes[upperIndex];

    return {
      background: blendColors(lowerScheme.background, upperScheme.background, blendFactor),
      foreground: blendColors(lowerScheme.foreground, upperScheme.foreground, blendFactor),
    };
  };

  return (
    <div
      className="bg-background text-foreground"
      style={
        {
          '--background': getBlendedColors().background,
          '--foreground': getBlendedColors().foreground,
        } as React.CSSProperties
      }
    >
      <Menu
        onThemeChange={handleThemeChange}
        currentSection={currentSection}
        onTabClick={handleTabClick}
        colorScheme={colorScheme}
      />
      {Sections.map((section, index) => (
        <div key={index} ref={refs.current[index]}>
          <section.component />
        </div>
      ))}
    </div>
  );
}

export default App;

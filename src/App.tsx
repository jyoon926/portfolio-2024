import { useState, useEffect, useRef } from 'react';
import './App.scss';
import Menu from './components/Menu';
import { ColorSchemes, Sections } from './Data';
import Loader from './components/Loader';
import { Route, Routes } from 'react-router-dom';
import Project from './components/Project';
import ScrollToTop from './components/ScrollToTop';
import ColorSlider from './components/ColorSlider';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [colorScheme, setColorScheme] = useState<number>(parseFloat(localStorage.getItem('theme')!) || 2.3);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const offset = windowHeight / 2;

    for (let i = 0; i < sectionRefs.current.length; i++) {
      const section = sectionRefs.current[i];
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop - offset && scrollPosition < sectionBottom - offset) {
          setCurrentSection(i);
          return;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleThemeChange = (value: number) => {
    setColorScheme(value);
    localStorage.setItem('theme', value.toString());
  };

  const blendColors = (color1: string, color2: string, factor: number): string => {
    const [r1, g1, b1] = color1.split(',').map(Number);
    const [r2, g2, b2] = color2.split(',').map(Number);
    return `${Math.round(r1 + factor * (r2 - r1))}, 
            ${Math.round(g1 + factor * (g2 - g1))}, 
            ${Math.round(b1 + factor * (b2 - b1))}`;
  };

  const getBlendedColors = () => {
    try {
      const lowerIndex = Math.floor(colorScheme);
      const upperIndex = Math.ceil(colorScheme) % ColorSchemes.length;
      const blendFactor = colorScheme - lowerIndex;

      const lowerScheme = ColorSchemes[lowerIndex];
      const upperScheme = ColorSchemes[upperIndex];
      const background = blendColors(lowerScheme.background, upperScheme.background, blendFactor);
      const foreground = blendFactor < 0.5 ? lowerScheme.foreground : upperScheme.foreground;

      return { background, foreground };
    } catch (e) {
      console.log(e);
      handleThemeChange(0);
      return getBlendedColors();
    }
  };

  const blendedColors = getBlendedColors();

  useEffect(() => {
    const html = document.documentElement;
    html.style.setProperty('--background', blendedColors.background);
    html.style.setProperty('--foreground', blendedColors.foreground);
  }, [blendedColors]);

  const Home = () => (
    <div>
      {Sections.map((section, index) => (
        <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
          <section.component onTabClick={handleTabClick} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="text-foreground">
      <ScrollToTop />
      <Loader />
      <Menu
        currentSection={currentSection}
        onTabClick={handleTabClick}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectUrl" element={<Project />} />
      </Routes>
      <ColorSlider colorScheme={colorScheme} onThemeChange={handleThemeChange} />
    </div>
  );
}

export default App;

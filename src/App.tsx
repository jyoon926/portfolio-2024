import { useState, useEffect, useRef, useCallback } from 'react';
import './App.scss';
import Menu from './components/Menu';
import { ColorSchemes, Sections } from './Data';
import Loader from './components/Loader';
import { Route, Routes } from 'react-router-dom';
import Project from './components/Project';
import ScrollToTop from './components/ScrollToTop';
import ColorSlider from './components/ColorSlider';

interface BlendedColors {
  background: string;
  foreground: string;
}

// Custom hooks
const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<number>(() =>
    parseFloat(localStorage.getItem('theme') || '2.3')
  );

  const handleThemeChange = useCallback((value: number) => {
    setColorScheme(value);
    localStorage.setItem('theme', value.toString());
  }, []);

  return { colorScheme, handleThemeChange };
};

const useScrollTracking = (sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>) => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const offset = windowHeight * 0.6;

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
  }, [sectionRefs]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return currentSection;
};

// Color utilities
const blendColors = (color1: string, color2: string, factor: number): string => {
  const [r1, g1, b1] = color1.split(',').map(Number);
  const [r2, g2, b2] = color2.split(',').map(Number);

  return [
    Math.round(r1 + factor * (r2 - r1)),
    Math.round(g1 + factor * (g2 - g1)),
    Math.round(b1 + factor * (b2 - b1))
  ].join(', ');
};

const getBlendedColors = (colorScheme: number): BlendedColors => {
  try {
    const lowerIndex = Math.floor(colorScheme);
    const upperIndex = Math.ceil(colorScheme) % ColorSchemes.length;
    const blendFactor = colorScheme - lowerIndex;

    const lowerScheme = ColorSchemes[lowerIndex];
    const upperScheme = ColorSchemes[upperIndex];

    return {
      background: blendColors(lowerScheme.background, upperScheme.background, blendFactor),
      foreground: blendFactor < 0.5 ? lowerScheme.foreground : upperScheme.foreground
    };
  } catch (error) {
    console.error('Error blending colors:', error);
    return getBlendedColors(0);
  }
};

const Home = ({ sectionRefs, onTabClick }: {
  sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  onTabClick: (index: number) => void
}) => (
  <div>
    {Sections.map((section, index) => (
      <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
        <section.component onTabClick={onTabClick} />
      </div>
    ))}
  </div>
);

function App() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { colorScheme, handleThemeChange } = useColorScheme();
  const currentSection = useScrollTracking(sectionRefs);

  const handleTabClick = useCallback((index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Apply theme colors
  useEffect(() => {
    const blendedColors = getBlendedColors(colorScheme);
    const html = document.documentElement;
    html.style.setProperty('--background', blendedColors.background);
    html.style.setProperty('--foreground', blendedColors.foreground);
  }, [colorScheme]);

  return (
    <div className="text-foreground">
      <ScrollToTop />
      <Loader />
      <Menu currentSection={currentSection} onTabClick={handleTabClick} />
      <Routes>
        <Route path="/" element={<Home sectionRefs={sectionRefs} onTabClick={handleTabClick} />} />
        <Route path="/project/:projectUrl" element={<Project />} />
      </Routes>
      <ColorSlider colorScheme={colorScheme} onThemeChange={handleThemeChange} />
    </div>
  );
}

export default App;

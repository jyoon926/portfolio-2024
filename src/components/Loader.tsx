import { useState, useEffect } from 'react';

const AnimatedLoader = () => {
  const [textVisible, setTextVisible] = useState(true);
  const [backgroundVisible, setBackgroundVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setTextVisible(false), 1500);
      setTimeout(() => setBackgroundVisible(false), 2000);
    };

    if (document.readyState === 'complete') handleLoad();
    else window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div
      className={`loading-screen fixed inset-0 flex flex-col items-start justify-center p-10 bg-background z-50 duration-1000 ${!backgroundVisible && 'loaded'}`}
    >
      <div className={`loading-text text-6xl ${!textVisible && 'loaded'}`}>
        <div>Jacob Yoon —</div>
        <div>Software Engineer</div>
      </div>
    </div>
  );
};

export default AnimatedLoader;

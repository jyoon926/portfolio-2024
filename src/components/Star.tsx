import { useState, useEffect } from "react";

export default function Star() {
  const [scrollFactor, setScrollFactor] = useState(9);

  useEffect(() => {
    const handleScroll = () => {
      const newProgress = 1 - window.scrollY / window.innerHeight;
      const factor = newProgress * 7 + 2;
      setScrollFactor(factor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute top-0 w-full h-full z-[-1] flex items-end justify-end overflow-hidden opacity-20">
      {(new Array(40).fill(0)).map((_, i) => (
        <div className={`absolute w-[500%] origin-right h-0 border-t border-foreground`} style={{ 'transform': `rotate(${i * scrollFactor}deg)` }} key={i}></div>
      ))}
    </div>
  )
}
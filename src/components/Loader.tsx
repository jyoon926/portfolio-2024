import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import LoadingDots from './LoadingDots';

interface Props {
  onLoaded: () => void;
}

export default function Loader({ onLoaded }: Props) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isFadedIn, setIsFadedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fadeOut = () => {
      onLoaded();
      gsap.to(textRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.5,
      });
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 1,
        onComplete: () => {
          if (loaderRef.current) loaderRef.current.style.display = 'none';
        },
      });
    };

    if (!isFadedIn || !isLoaded) return;
    fadeOut();
  }, [isFadedIn, isLoaded]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        delay: 0.5,
        onComplete: () => {
          setIsFadedIn(true);
        },
      }
    );

    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      setIsLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div ref={loaderRef} className="fixed inset-0 flex flex-col items-center justify-center p-3 bg-background z-50">
      <div ref={textRef} className="flex flex-col items-center gap-6">
        <div className="text-xl md:text-3xl">
          Jacob Yoon<span className="opacity-60"> — Software Engineer</span>
        </div>
        <LoadingDots />
      </div>
    </div>
  );
}

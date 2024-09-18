import { useState } from 'react';
import { Intros } from '../Data';

export default function Intro() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="grow flex flex-col ml-72 mr-10">
      <div className="w-full h-screen max-w-[1000px] flex flex-col items-start justify-start pt-28 gap-5">
        <div className="flex flex-row gap-5 text-nowrap">
          {Intros.map((intro, index) => (
            <button
              className={`transition-opacity hover:opacity-100 ${currentTab !== index && 'opacity-60'}`}
              onClick={() => setCurrentTab(index)}
              key={index}
            >
              {intro.label}
            </button>
          ))}
        </div>
        <div className="text-6xl cursor-default">{Intros[currentTab].text}</div>
      </div>
      <div className="flex flex-col justify-start items-start py-32 border-t border-b">
        <p className="grow max-w-[600px] ml-[50%] leading-normal cursor-default">
          I am a fourth-year computer science student at RIT pursuing a combined BS/MS degree. I've cultivated a strong
          foundation in both theoretical knowledge and practical application. My academic journey has been complemented
          by two six-month co-ops as a software engineer intern, where I gained extensive hands-on industry experience
          in full stack development. My love for art and design enhances my ability to create digital experiences that
          are not only functionally robust but also visually compelling. Whether it's building responsive web
          applications or solving complex technical challenges, I approach every project with a growth mindset,
          continuously seeking to improve and innovate.
        </p>
      </div>
    </div>
  );
}

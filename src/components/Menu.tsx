import { Sections } from '../Data';

interface Props {
  currentSection: number;
  onTabClick: (index: number) => void;
}

export default function Menu({ currentSection, onTabClick }: Props) {
  const handleTabClick = (index: number) => {
    onTabClick(index);
  };

  return (
    <div className="fixed w-full flex flex-row gap-6 p-3 items-start justify-between z-40 backdrop-blur bg-background/50 border-b text-nowrap">
      <button onClick={() => handleTabClick(0)}>Jacob Yoon<span className='hidden sm:inline opacity-50'> — Software Engineer</span></button>
      <div className="flex flex-row gap-1 items-start">
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
    </div>
  );
}

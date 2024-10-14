import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { ColorSchemes } from '../Data';

interface Props {
  colorScheme: number;
  onThemeChange: (value: number) => void;
}

export default function ColorSlider({colorScheme,onThemeChange}: Props) {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onThemeChange(parseFloat(event.target.value));
  };

  return (
    <div className="fixed bottom-3 right-3 color-slider w-9 h-96 flex flex-col justify-start items-center rounded-full bg-background/70 border overflow-hidden backdrop-blur z-40">
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
  );
}
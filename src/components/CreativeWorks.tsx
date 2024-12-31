import { useState } from "react";
import { CreativeWorks } from "../utils/Data";
import Slideshow from "./Slideshow";

export default function CreativeWorksSection() {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [slideshowId, setSlideshowId] = useState(0);

  const handlePhotoClick = (id: number) => {
    setIsSlideshowOpen(true);
    setSlideshowId(id);
  };

  return (
    <div className="border-t flex flex-col items-start justify-start mx-5 py-24">
      <div className="w-full flex flex-col">
        <p className="text-4xl mb-12">Creative Works</p>
        <div
          className="w-full flex flex-col md:grid gap-x-5 gap-y-8"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}
        >
          {CreativeWorks.map((work, index) => (
            <button className="w-full flex flex-col" onClick={() => handlePhotoClick(index)} key={index}>
              <div className="w-full aspect-[3/4] bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url(${work.image})` }} />
            </button>
          ))}
        </div>
      </div>
      <Slideshow
        selected={slideshowId}
        photos={CreativeWorks.map((work) => work.image)}
        isOpen={isSlideshowOpen}
        onClose={() => setIsSlideshowOpen(false)}
      />
    </div>
  )
}
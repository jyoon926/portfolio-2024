import { Education } from '../Data';

export default function EducationSection() {
  return (
    <div className="flex flex-col items-start justify-start mx-5 border-t py-24">
      <p className="text-4xl text-center mb-12">Education</p>
      <div className="w-full flex flex-col gap-12">
        <div className="flex flex-col md:flex-row gap-3 justify-start items-start leading-snug">
          <div className="flex flex-col w-full gap-1 md:w-1/3">
            <p className="font-bold">{Education.school}</p>
            <p className="opacity-50">{Education.location}</p>
          </div>
          <div className="flex flex-col w-full gap-1 md:w-2/3 max-w-[600px]">
            <p className="font-bold">{Education.degree}</p>
            <p className="opacity-50">{Education.date}</p>
            {Education.bullets.map((bullet) => (
              <p className='opacity-50 mt-3' key={bullet}>{bullet}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

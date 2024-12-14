import { Experience } from '../Data';

export default function ExperienceSection() {
  return (
    <div className="flex flex-col items-start justify-start mx-5 border-t py-24">
      <p className="text-4xl text-center mb-12">Experience</p>
      <div className="w-full flex flex-col gap-12">
        {Experience.map((job, index) => (
          <div className="flex flex-col md:flex-row gap-3 justify-start items-start leading-snug" key={index}>
            <div className="flex flex-col w-full gap-1 md:w-1/3">
              <p className="font-bold">{job.company}</p>
              <p className="opacity-50">{job.date}</p>
            </div>
            <div className="flex flex-col w-full gap-1 md:w-2/3 max-w-[600px]">
              <p className="font-bold">{job.role}</p>
              <p className="opacity-50">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

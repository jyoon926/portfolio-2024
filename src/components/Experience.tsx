import { Jobs } from '../Data';

export default function Experience() {
  return (
    <div className="flex flex-col items-start justify-start mx-5 md:ml-72 md:mr-10 py-32">
      <p className="text-4xl md:text-6xl mb-20">Experience</p>
      <div className="w-full flex flex-col gap-20">
        {Jobs.map((job, index) => (
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-start items-start" key={index}>
            <div className="flex flex-col gap-2 md:gap-3 w-full md:w-1/3">
              <p className="font-bold">{job.company}</p>
              <p className="opacity-60">{job.date}</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3 w-full md:w-2/3">
              <p className="font-bold">{job.role}</p>
              <p className="opacity-60 leading-snug max-w-[600px]">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

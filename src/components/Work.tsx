import { Link } from 'react-router-dom';
import { Projects } from '../Data';

export default function Work() {
  return (
    <div className="flex flex-col items-start justify-start mx-5 md:ml-72 md:mr-10 py-32 border-b">
      <p className="text-4xl md:text-6xl mb-20">Latest Projects</p>
      <div
        className="w-full flex flex-col md:grid gap-x-5 gap-y-8"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))' }}
      >
        {Projects.map((project, index) => (
          <Link className="flex flex-col gap-5" key={index} to={`/project/${project.projectUrl}`}>
            <div className="rounded-lg border bg-foreground/10 p-5 md:p-10">
              <img className="rounded-md shadow-md" src={project.images[0]} alt="" />
            </div>
            <div className="grow flex flex-col gap-2 text-nowrap">
              <p className="font-bold">{project.title}</p>
              <p className="opacity-60">{project.caption}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

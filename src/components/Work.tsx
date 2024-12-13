import { Link } from 'react-router-dom';
import { Projects } from '../Data';

export default function Work() {
  return (
    <div className="border-t flex flex-col items-start justify-start mx-5 py-24">
      <p className="text-4xl mb-10">Latest Projects</p>
      <div
        className="w-full flex flex-col md:grid gap-x-5 gap-y-8"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))' }}
      >
        {Projects.map((project, index) => (
          <Link className="flex flex-col gap-3" key={index} to={`/project/${project.projectUrl}`}>
            <div className='border bg-foreground/15 p-5 md:p-8'>
              <img src={project.images[0]} alt="" />
            </div>
            <div className="grow flex flex-col leading-snug text-nowrap">
              <p>{project.title}</p>
              <p className="opacity-50">{project.caption}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

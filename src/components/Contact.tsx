export default function Contact() {
  return (
    <div className="flex flex-row ml-72 mr-10 py-10 gap-10 border-t">
      <div className="grow flex flex-col justify-between">
        <div>
          <div className="flex flex-row gap-3 items-center pb-2">
            <div className="live">
              <div className="dot" />
              <div className="radius" />
            </div>
            <p className="opacity-60">Available for work</p>
          </div>
          <p className="text-2xl">
            I am currently looking for Summer 2025 internship opportunities in software engineering. I hope to hear from
            you!
          </p>
        </div>
        <div className="flex flex-row gap-10">
          <a className="border-b pb-0.5" href="mailto:jy9726@rit.edu">
            jy9726@rit.edu
          </a>
          <a className="border-b pb-0.5" href="https://www.linkedin.com/in/jaacobyoon/" target="_blank">
            LinkedIn
          </a>
          <a className="border-b pb-0.5" href="https://github.com/jyoon926/" target="_blank">
            GitHub
          </a>
        </div>
      </div>
      <img className="w-72 rounded-lg border" src="/headshot.jpg" alt="" />
    </div>
  );
}

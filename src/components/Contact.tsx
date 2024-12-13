export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row mx-5 py-5 gap-5 border-t">
      <div className="grow flex flex-col justify-between gap-5">
        <div className="leading-snug">
          <div className="flex flex-row gap-3 items-center pb-1">
            <div className="live">
              <div className="dot" />
              <div className="radius" />
            </div>
            <p>Available for work</p>
          </div>
          <p className="opacity-50">
            I am currently looking for full time software engineering roles starting in 2026. I hope to hear from
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
      <img className="w-80 mix-blend-luminosity" src="/bw-headshot-abstract-2.jpg" alt="" />
    </div>
  );
}

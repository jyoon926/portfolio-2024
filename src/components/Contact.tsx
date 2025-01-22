import { Contact } from "../utils/Data";

export default function ContactSection() {
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
        <div className="flex flex-row gap-8">
          {Contact.links.map((link) => (
            <a className="border-b pb-0.5" href={link.url} target="_blank" key={link.url}>
              {link.text}
            </a>
          ))}
        </div>
      </div>
      <img className="w-80 mix-blend-luminosity" src="/portraits/bw-headshot-2.jpg" alt="A portrait of Jacob Yoon. Shot by Sam Su." />
    </div>
  );
}

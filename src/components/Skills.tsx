import { Skills } from "../utils/Data";

export default function SkillsSection() {
  return (
    <div className="border-t flex flex-col items-start justify-start mx-5 py-24">
      <div className="w-full flex flex-col">
        <p className="text-4xl mb-12">Skills & Interests</p>
        <div className="flex flex-col gap-7">
          {Skills.sections.map((section) => (
            <div className="flex flex-col gap-2" key={section.name}>
              <p>{section.name}</p>
              <div className="flex flex-row gap-x-5 gap-y-2 flex-wrap opacity-50">
                {section.skills.map((skill) => (
                  <div className="flex flex-row items-center justify-start gap-1.5 leading-none" key={skill.name}>
                    <span className="text-xl">{skill.icon}</span>
                    <span className="pt-0.5">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
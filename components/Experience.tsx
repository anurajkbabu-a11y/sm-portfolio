import { experience } from "@/content/site";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-wide text-teal-700">Experience</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
        Professional experience
      </h2>
      <div className="mt-10 space-y-8 border-l-2 border-slate-200 pl-8">
        {experience.map((role) => (
          <div key={`${role.org}-${role.dates}`} className="relative">
            <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-teal-700 ring-4 ring-white" />
            <p className="font-mono text-xs uppercase tracking-wide text-slate-500">
              {role.dates}
            </p>
            <h3 className="mt-1 text-lg font-bold text-slate-900">
              {role.role} · {role.org}
            </h3>
            <p className="mt-2 max-w-2xl text-slate-600">{role.detail}</p>
            {role.highlights.length > 0 && (
              <ul className="mt-3 max-w-2xl space-y-2">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-700" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

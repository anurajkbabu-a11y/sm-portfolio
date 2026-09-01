import { skillGroups } from "@/content/site";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-wide text-teal-700">Skills</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Core competencies</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-mono text-xs uppercase tracking-wide text-slate-500">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="border-b border-slate-100 pb-3 text-sm text-slate-700 last:border-b-0 last:pb-0"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

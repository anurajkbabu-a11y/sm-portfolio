import { about } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-wide text-teal-700">{about.eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{about.heading}</h2>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 text-slate-600">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <ul className="divide-y divide-slate-200">
            {about.snapshot.map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                <span className="text-sm text-slate-700">{item.label}</span>
                <span className="font-mono text-xs uppercase tracking-wide text-slate-500">
                  {item.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

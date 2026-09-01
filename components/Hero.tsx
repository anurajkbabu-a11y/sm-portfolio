import { hero, person } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-20">
      <p className="mb-6 inline-block rounded-full border border-teal-200 bg-teal-50 px-4 py-2 font-mono text-xs uppercase tracking-wide text-teal-800">
        {hero.statusPill}
      </p>
      <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
        {hero.headingLine1}
        <br />
        {hero.headingLine2}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-600">{hero.subtext}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={hero.ctaPrimary.href}
          className="rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800"
        >
          {hero.ctaPrimary.label}
        </a>
        <a
          href={hero.ctaGhost.href}
          className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-teal-700 hover:text-teal-800"
        >
          {hero.ctaGhost.label}
        </a>
      </div>
      <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {hero.factsStrip.map((fact) => (
          <div
            key={fact.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <dt className="font-mono text-xs uppercase tracking-wide text-slate-500">
              {fact.label}
            </dt>
            <dd className="mt-2 text-sm font-bold text-slate-900">{fact.value}</dd>
          </div>
        ))}
      </dl>
      <p className="sr-only">{person.name} — {person.role}</p>
    </section>
  );
}

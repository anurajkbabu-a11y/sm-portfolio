import { credentials } from "@/content/site";

export default function Credentials() {
  return (
    <section id="credentials" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-xs uppercase tracking-wide text-teal-700">
          {credentials.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          {credentials.heading}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-mono text-xs uppercase tracking-wide text-slate-500">
              Certifications
            </h3>
            <ul className="mt-4 space-y-3">
              {credentials.certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 text-sm text-slate-700 last:border-b-0 last:pb-0"
                >
                  <span>{cert.name}</span>
                  <span className="font-mono text-xs uppercase tracking-wide text-slate-500">
                    {cert.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-mono text-xs uppercase tracking-wide text-slate-500">
              Education
            </h3>
            <ul className="mt-4 space-y-3">
              {credentials.education.map((edu) => (
                <li key={edu.program} className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                  <p className="m-0 text-sm font-semibold text-slate-800">{edu.program}</p>
                  <p className="m-0 text-sm text-slate-600">{edu.institution}</p>
                  {edu.note && <p className="m-0 text-xs text-slate-500">{edu.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

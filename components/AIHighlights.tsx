import { aiHighlights } from "@/content/site";

export default function AIHighlights() {
  return (
    <section id="ai-highlights" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-xs uppercase tracking-wide text-teal-700">
          AI-Augmented Delivery
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          AI-augmented delivery highlights
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiHighlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-2xl">{item.icon}</span>
              <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{item.description}</p>
              <dl className="mt-4 space-y-2 border-t border-slate-200 pt-4">
                {item.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-baseline justify-between gap-3">
                    <dt className="text-xs text-slate-500">{metric.label}</dt>
                    <dd className="font-mono text-sm font-bold text-teal-800">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

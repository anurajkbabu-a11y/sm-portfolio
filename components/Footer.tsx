import { footer } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 text-xs uppercase tracking-wide text-slate-500">
        <p className="m-0">{footer.copyright}</p>
        <p className="m-0">{footer.tagline}</p>
      </div>
    </footer>
  );
}

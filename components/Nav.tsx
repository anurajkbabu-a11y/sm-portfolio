const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "AI Highlights", href: "#ai-highlights" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="font-mono text-sm font-bold text-slate-900">
          Anuraj K B
        </a>
        <div className="flex flex-wrap items-center gap-6">
          <ul className="flex flex-wrap items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-teal-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/Anuraj_K_B_Resume.docx"
            download
            className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Download Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

import { contact, person } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-wide text-teal-700">{contact.eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{contact.heading}</h2>
      <p className="mt-4 max-w-xl text-slate-600">{person.relocation}</p>
      <ul className="mt-8 max-w-md divide-y divide-slate-200">
        {contact.socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="flex items-center justify-between py-4 text-sm font-semibold text-slate-700 hover:text-teal-800"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

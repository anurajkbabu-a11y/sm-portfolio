import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="sr-only focus:not-sr-only" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <About />
      </main>

      <Footer />
    </>
  );
}

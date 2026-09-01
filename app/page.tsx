import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="sr-only focus:not-sr-only" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main">{/* section components are added here task-by-task */}</main>

      <Footer />
    </>
  );
}

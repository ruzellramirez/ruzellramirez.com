import {
  Navbar,
  Hero,
  Features,
  Testimonials,
  CTA,
  Footer,
} from "../components/";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

import {
  Navbar,
  Hero,
  Features,
  Testimonials,
  CTA,
  Footer,
} from "../components/";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ruzell Ramirez</title>
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

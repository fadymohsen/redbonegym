import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Subscriptions from "@/components/Subscriptions";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar locale="en" />
      <main>
        <Hero locale="en" />
        <Features locale="en" />
        <About locale="en" />
        <Gallery locale="en" />
        <Subscriptions locale="en" />
        {/* <Activities locale="en" /> */}
        <Contact locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}

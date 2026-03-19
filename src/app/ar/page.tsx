import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Subscriptions from "@/components/Subscriptions";
import Activities from "@/components/Activities";
import MobileApp from "@/components/MobileApp";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ArabicHome() {
  return (
    <>
      <Navbar locale="ar" />
      <main>
        <Hero />
        {/* <Features locale="ar" /> */}
        <About locale="ar" />
        <Gallery locale="ar" />
        <Subscriptions locale="ar" />
        {/* <Activities locale="ar" /> */}
        <MobileApp locale="ar" />
        <Contact locale="ar" />
      </main>
      <Footer locale="ar" />
    </>
  );
}

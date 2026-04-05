import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageContent from "@/components/AboutPageContent";

export default function AboutPage() {
  return (
    <>
      <Navbar locale="en" />
      <main>
        <AboutPageContent locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}

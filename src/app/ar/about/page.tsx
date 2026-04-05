import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageContent from "@/components/AboutPageContent";

export default function AboutPage() {
  return (
    <>
      <Navbar locale="ar" />
      <main>
        <AboutPageContent locale="ar" />
      </main>
      <Footer locale="ar" />
    </>
  );
}

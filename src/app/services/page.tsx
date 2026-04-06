import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPageContent from "@/components/ServicesPageContent";

export default function ServicesPage() {
  return (
    <>
      <Navbar locale="en" />
      <main>
        <ServicesPageContent locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}

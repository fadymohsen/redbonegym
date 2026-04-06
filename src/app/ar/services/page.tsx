import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPageContent from "@/components/ServicesPageContent";

export default function ServicesPage() {
  return (
    <>
      <Navbar locale="ar" />
      <main>
        <ServicesPageContent locale="ar" />
      </main>
      <Footer locale="ar" />
    </>
  );
}

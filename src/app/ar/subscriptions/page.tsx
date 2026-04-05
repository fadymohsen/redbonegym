import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscriptionsPageContent from "@/components/SubscriptionsPageContent";

export default function SubscriptionsPage() {
  return (
    <>
      <Navbar locale="ar" />
      <main>
        <SubscriptionsPageContent locale="ar" />
      </main>
      <Footer locale="ar" />
    </>
  );
}

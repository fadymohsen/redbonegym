import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscriptionsPageContent from "@/components/SubscriptionsPageContent";

export default function SubscriptionsPage() {
  return (
    <>
      <Navbar locale="en" />
      <main>
        <SubscriptionsPageContent locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}

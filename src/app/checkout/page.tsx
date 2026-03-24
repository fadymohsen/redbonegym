import { Suspense } from "react";
import CheckoutClient from "@/components/CheckoutClient";

export const metadata = {
  title: "Subscribe | RedBone Gym",
};

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutClient />
    </Suspense>
  );
}

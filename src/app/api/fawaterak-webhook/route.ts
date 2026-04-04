import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // Verify the payment server-side
    const verifyResponse = await fetch(
      `${process.env.FAWATERAK_API_URL}/getInvoiceData/${payload.invoice_id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.FAWATERAK_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const invoiceData = await verifyResponse.json();

    if (invoiceData?.data?.status === "paid") {
      // Payment confirmed — you can add logic here
      // e.g., send a notification, update a database, etc.
      console.log("Payment confirmed for invoice:", payload.invoice_id);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ received: false }, { status: 500 });
  }
}

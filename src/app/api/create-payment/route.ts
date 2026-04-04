import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { planName, amount, customer, paymentMethodId } = body;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const response = await fetch(
      `${process.env.FAWATERAK_API_URL}/invoiceInitPay`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.FAWATERAK_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payment_method_id: paymentMethodId,
          cartTotal: amount,
          currency: "EGP",
          customer: {
            first_name: customer.firstName,
            last_name: customer.lastName,
            email: customer.email,
            phone: customer.phone,
            address: customer.address || "Cairo, Egypt",
          },
          redirectionUrls: {
            successUrl: `${baseUrl}/payment/success`,
            failUrl: `${baseUrl}/payment/fail`,
            pendingUrl: `${baseUrl}/payment/pending`,
          },
          cartItems: [
            {
              name: planName,
              price: amount,
              quantity: "1",
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || "Payment creation failed" },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Fawaterak error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

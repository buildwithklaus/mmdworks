import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    // TODO: Integrate email service (Resend, SendGrid, Nodemailer, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: "MD Works Website <noreply@mdworks.com>",
    //   to: "info@mdworks.com",
    //   subject: `New Quote Request from ${result.data.name}`,
    //   html: `<p>Name: ${result.data.name}</p><p>Email: ${result.data.email}</p>...`,
    // });

    console.log("New contact submission:", result.data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
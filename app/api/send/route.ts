import ContactMeEmail from "../../emails/contact-form-email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend("re_25wPcd9b_69czXXeaLBLu6uRAi5pNFwBS");

const sendRouteSchema = z.object({
  name: z.string().min(2),
  emailAddress: z.string().email(),
  content: z.string().min(2),
});

export async function POST(req: NextRequest) {
  const { name, emailAddress, content } = await req
    .json()
    .then((body) => sendRouteSchema.parse(body));

  const data = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["marzyeh.advand@gmail.com"],
    subject: `${name} has sent a message!`,
    react: ContactMeEmail({ name, emailAddress, content }),
  });

  return NextResponse.json({ data, error: null }, { status: 200 });
}

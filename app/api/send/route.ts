import ContactMeEmail from "../../emails/contact-form-email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend("re_6kGcYb5f_AmHGk21SBSDPZ44ToF57FTGQ");

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
    to: ["s.patowary@yahoo.com"],
    subject: `${name} has a message!`,
    react: ContactMeEmail({ name, emailAddress, content }),
  });

  console.log(data);

  return NextResponse.json({ data, error: null }, { status: 200 });
}

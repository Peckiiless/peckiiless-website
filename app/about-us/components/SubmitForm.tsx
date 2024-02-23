"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Text15rem, Text2rem, Text2, Text1125rem } from "@/app/components/Text";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email must be in proper format",
  }),
  content: z.string().min(10, {
    message: "Content must be at least 10 characters.",
  }),
});

export default function SubmitForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        emailAddress: values.email,
        content: values.content,
      }),
    });
    if (data.status === 200) {
      toast.success("Email sent!");
      reset();
      return;
    } else {
      toast.error("Something went wrong!");
    }
  }
  return (
    <div className="max-w-[90rem] mx-auto mt-4 px-4 sm:px-10">
      <div className="mx-auto">
        <Text2rem>
          We are interested in collaborating with industry, academia, and the
          healthcare industry. Are you curious about Peckiiless? We’d love to
          hear from you.
        </Text2rem>
        <div className="flex gap-8 sm:gap-20 justify-around mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] pb-8 mb-4">
            <div className="flex gap-6 mb-6">
              <div className="w-full md:w-1/2 mb-0 md:mb-4">
                <label className="block text-gray-700 mb-2">
                  <Text1125rem>First Name</Text1125rem>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 md:py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="First name"
                  {...register("name")}
                />
                {errors?.name && (
                  <p className="px-1 text-xs text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="w-full md:w-1/2 mb-0 md:mb-4">
                <label className="block text-gray-700 mb-2">
                  <Text1125rem>Last Name</Text1125rem>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 md:py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="mb-1 md:mb-6">
              <label className="block text-gray-700 mb-2">
                <Text1125rem>E-mail</Text1125rem>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 md:py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="email"
                {...register("email")}
              />
              {errors?.email && (
                <p className="px-1 text-xs text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-1 md:mb-6">
              <textarea
                className="shadow appearance-none border rounded w-full py-1 md:py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                placeholder="Write your message here."
                rows={6}
                {...register("content")}
              />
              {errors?.content && (
                <p className="px-1 text-xs text-red-600">
                  {errors.content.message}
                </p>
              )}
            </div>
            <div className="">
              <button
                disabled={isSubmitting}
                type="submit"
                className="inline-block bg-primary-700 font-medium md:text-[1.625rem] xs:text-[1.25rem] text-[.75rem] text-white rounded-[0.84125rem] py-3 px-16 transition-colors hover:bg-primary-900 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-2 xs:gap-6">
            <div className="font-medium">
              <Text2>Contact Us</Text2>
            </div>
            <div className="flex gap-1 xs:gap-4 items-center">
              <Image
                src="/images/email.svg"
                width={40}
                height={40}
                alt="logo"
                priority={true}
                quality={100}
                className="w-[30px] sm:w-[40px]"
              />

              <Text15rem>info@peckiiless.com</Text15rem>
            </div>
            <div className="flex gap-1 xs:gap-4 items-center">
              <Image
                src="/images/linkedin.svg"
                width={40}
                height={40}
                alt="logo"
                priority={true}
                quality={100}
                className="w-[30px] sm:w-[40px]"
              />

              <Text15rem>Peckiiless</Text15rem>
            </div>
            <div className="flex gap-1 xs:gap-4 items-center">
              <Image
                src="/images/location.svg"
                width={40}
                height={40}
                alt="logo"
                priority={true}
                quality={100}
                className="w-[30px] sm:w-[40px]"
              />
              <Text15rem>
                <div className="max-w-[18rem] leading-none">
                  Chalmersplatsen 4, 412 96 Göteborg
                </div>
              </Text15rem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

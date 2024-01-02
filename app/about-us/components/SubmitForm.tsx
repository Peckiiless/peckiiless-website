"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import CustomButton from "@/app/components/CustomButton";
import FadeIn from "@/app/components/FadeIn";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email must be in proper format",
  }),
  content: z.string().min(2, {
    message: "Content must be at least 2 characters.",
  }),
});

export default function SubmitForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: implement
    console.log(values);

    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        emailAddress: values.email,
        content: values.content,
      }),
    });
  }
  return (
    <FadeIn className="max-w-[80rem] mx-auto mt-20 px-10">
      <div className="mx-auto">
        <p className="text-[2rem]">
          We are interested in collaborating with industry, academia, and the
          healthcare industry. Are you curious about Peckiiless? We’d love to
          hear from you.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[70%] shadow-md rounded px-8 mt-6 pb-8 mb-4"
        >
          <div className="flex gap-10 mb-6">
            <div className="w-full md:w-1/2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

            <div className="w-full md:w-1/2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              E-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
          <div className="mb-6">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
            {/* <div className="pt-5">
              <CustomButton
                title="Submit"
                containerStyles="bg-primary-700 font-medium md:text-[1.625rem] xs:text-[1.25rem] text-[.75rem] text-white rounded-[2.5rem] py-3 px-24"
              />
            </div> */}
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </FadeIn>
  );
}

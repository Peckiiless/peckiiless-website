"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
    <div className="max-w-[90rem] mx-auto mt-20 px-10">
      <div className="mx-auto">
        <Text2rem>
          We are interested in collaborating with industry, academia, and the
          healthcare industry. Are you curious about Peckiiless? We’d love to
          hear from you.
        </Text2rem>
        <div className="flex gap-4 justify-around mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="w-[55%] pb-8 mb-4">
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
            <div className="flex gap-2 xs:gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px]"
              >
                <rect width="50" height="50" rx="6" fill="#B2335E" />
                <path
                  d="M34.3328 14H15.6673C13.1 14 11 15.65 11 17.6671V32.3329C11 34.3514 13.1 36 15.6673 36H34.3328C36.9 36 39 34.3514 39 32.3329V17.6671C39 15.65 36.9 14 34.3328 14ZM34.3328 16.75C34.5515 16.75 34.758 16.7995 34.9347 16.8861L24.9983 23.3404L15.0635 16.8861C15.2403 16.7995 15.4467 16.75 15.6655 16.75H34.331H34.3328ZM15.6673 33.25C15.6148 33.25 15.5623 33.2472 15.5115 33.2418L21.6803 26.518L20.8805 25.8896L14.5 30.9029V17.773L25 27.75L35.5 17.773V30.9029L29.1195 25.8896L28.3197 26.518L34.4885 33.2418C34.4377 33.2472 34.3853 33.25 34.3345 33.25H15.669H15.6673Z"
                  fill="#FEFEFE"
                />
              </svg>

              <Text15rem>Email</Text15rem>
            </div>
            <div className="flex gap-2 xs:gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px]"
              >
                <rect width="50" height="50" rx="6" fill="#B2335E" />
                <path
                  d="M21 20H26.534V22.836H26.614C27.384 21.454 29.268 20 32.078 20C37.92 20 39 23.636 39 28.366V38H33.23V29.46C33.23 27.424 33.188 24.802 30.23 24.802C27.226 24.802 26.766 27.02 26.766 29.312V38H21V20Z"
                  fill="white"
                />
                <path d="M11 20H17V38H11V20Z" fill="white" />
                <path
                  d="M17 15C17 16.656 15.656 18 14 18C12.344 18 11 16.656 11 15C11 13.344 12.344 12 14 12C15.656 12 17 13.344 17 15Z"
                  fill="white"
                />
              </svg>

              <Text15rem>Peckiiless</Text15rem>
            </div>
            <div className="flex gap-2 xs:gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px]"
              >
                <rect width="50" height="50" rx="6" fill="#B2335E" />
                <path
                  d="M25 7C18.3736 7 13 12.1669 13 18.5385C13 30.0769 25 43.9231 25 43.9231C25 43.9231 37 30.0769 37 18.5385C37 12.1669 31.6264 7 25 7ZM25 25.4615C21.0232 25.4615 17.8 22.3623 17.8 18.5385C17.8 14.7146 21.0232 11.6154 25 11.6154C28.9768 11.6154 32.2 14.7146 32.2 18.5385C32.2 22.3623 28.9768 25.4615 25 25.4615Z"
                  fill="white"
                />
              </svg>
              <Text15rem><div>Chalmersplatsen 4,</div> <div>412 96 Göteborg</div></Text15rem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

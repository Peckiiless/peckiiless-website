"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

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
        <p className="text-[2rem]">
          We are interested in collaborating with industry, academia, and the
          healthcare industry. Are you curious about Peckiiless? We’d love to
          hear from you.
        </p>
        <div className="flex gap-4 justify-between mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="w-[55%] pb-8 mb-4">
            <div className="flex gap-6 mb-6">
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
            <p className="text-[2rem] font-medium">Contact Us</p>
            <div className="flex gap-2 xs:gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <rect width="50" height="50" rx="6" fill="#B2335E" />
                <path
                  d="M34.3328 14H15.6673C13.1 14 11 15.65 11 17.6671V32.3329C11 34.3514 13.1 36 15.6673 36H34.3328C36.9 36 39 34.3514 39 32.3329V17.6671C39 15.65 36.9 14 34.3328 14ZM34.3328 16.75C34.5515 16.75 34.758 16.7995 34.9347 16.8861L24.9983 23.3404L15.0635 16.8861C15.2403 16.7995 15.4467 16.75 15.6655 16.75H34.331H34.3328ZM15.6673 33.25C15.6148 33.25 15.5623 33.2472 15.5115 33.2418L21.6803 26.518L20.8805 25.8896L14.5 30.9029V17.773L25 27.75L35.5 17.773V30.9029L29.1195 25.8896L28.3197 26.518L34.4885 33.2418C34.4377 33.2472 34.3853 33.25 34.3345 33.25H15.669H15.6673Z"
                  fill="#FEFEFE"
                />
              </svg>

              <p className="">Email</p>
            </div>
            <div className="flex gap-2 xs:gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <rect width="50" height="50" rx="6" fill="#B2335E" />
                <path
                  d="M30.4006 31.7483L33.039 29.1088C33.3944 28.7577 33.844 28.5174 34.3333 28.417C34.8225 28.3166 35.3304 28.3605 35.7952 28.5432L39.0108 29.8276C39.4805 30.0184 39.8833 30.3439 40.1684 30.7633C40.4534 31.1827 40.608 31.6771 40.6127 32.1843V38.0759C40.6099 38.4209 40.5374 38.7618 40.3995 39.078C40.2617 39.3943 40.0612 39.6793 39.8103 39.916C39.5594 40.1527 39.2632 40.3361 38.9396 40.4553C38.616 40.5745 38.2716 40.6269 37.9271 40.6094C15.3947 39.2071 10.8482 20.1182 9.98834 12.8125C9.94843 12.4537 9.9849 12.0906 10.0953 11.7469C10.2058 11.4033 10.3877 11.0869 10.6292 10.8187C10.8706 10.5504 11.1661 10.3363 11.4962 10.1905C11.8263 10.0447 12.1835 9.97049 12.5443 9.9727H18.2333C18.741 9.97421 19.2366 10.1276 19.6564 10.4132C20.0762 10.6988 20.401 11.1035 20.5891 11.5752L21.8729 14.7921C22.0617 15.2553 22.1098 15.7638 22.0114 16.2542C21.9129 16.7446 21.6722 17.1951 21.3193 17.5494L18.6809 20.1889C18.6809 20.1889 20.2004 30.4757 30.4006 31.7483Z"
                  fill="white"
                />
              </svg>

              <p className="">031-772 10 00</p>
            </div>
            <div className="flex gap-2 xs:gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
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

              <p className="">Peckiiless</p>
            </div>
            <div className="flex gap-2 xs:gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <rect width="50" height="50" rx="6" fill="#B2335E" />
                <path
                  d="M25 7C18.3736 7 13 12.1669 13 18.5385C13 30.0769 25 43.9231 25 43.9231C25 43.9231 37 30.0769 37 18.5385C37 12.1669 31.6264 7 25 7ZM25 25.4615C21.0232 25.4615 17.8 22.3623 17.8 18.5385C17.8 14.7146 21.0232 11.6154 25 11.6154C28.9768 11.6154 32.2 14.7146 32.2 18.5385C32.2 22.3623 28.9768 25.4615 25 25.4615Z"
                  fill="white"
                />
              </svg>
              <p className="">Chalmersplatsen 4, 412 96 Göteborg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import CustomButton from "@/app/components/CustomButton";
import FadeIn from "@/app/components/FadeIn";

export default function SubmitForm() {
  return (
    <FadeIn className="max-w-[80rem] mx-auto mt-20 px-10">
      <div className="mx-auto">
        <p className="text-[2rem]">
          We are interested in collaborating with industry, academia, and the
          healthcare industry. Are you curious about Peckiiless? We’d love to
          hear from you.
        </p>
        <form className="w-[70%] shadow-md rounded px-8 mt-6 pb-8 mb-4">
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
              />
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
            />
          </div>
          <div className="mb-6">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              placeholder="Write your message here."
              rows={6}
            />
          </div>
          <div className="">
            <div className="pt-5">
              <CustomButton
                title="Submit"
                containerStyles="bg-primary-700 font-medium md:text-[1.625rem] xs:text-[1.25rem] text-[.75rem] text-white rounded-[2.5rem] py-3 px-24"
              />
            </div>
          </div>
        </form>
      </div>
    </FadeIn>
  );
}

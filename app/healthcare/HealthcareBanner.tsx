import Image from "next/image";

export default function HealthcareBanner() {
  return (
    <>
      <div className="bg-healthcare bg-cover bg-center bg-no-repeat h-[calc(65vh-4.6875rem)]" />

      <div className="px-20 py-2 mx-auto bg-primary-200 rounded-[3.125rem]">
        <p className="font-medium text-[3.5rem] text-primary-800 leading-[3.5rem] w-[85%] pb-5">
          Over 500 million people suffer from type some form of diabetes.
        </p>
        <p className="text-[1.5rem] font-medium w-[85%]">
          Both the number of cases and the prevalence of diabetes have been
          steadily increasing over the past few decades. Testing and monitoring
          of these illnesses have gotten stuck in development for years upon
          years, it’s time to globalize an easier option for monitoring your
          glucose testing in an easy, effecient way.
        </p>
      </div>
    </>
  );
}

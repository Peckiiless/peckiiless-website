import Image from "next/image";

export default function HealthcareBanner() {
  return (
    <>
      <div className="bg-healthcare bg-contain bg-center bg-no-repeat h-[calc(100vh-4.6875rem)]" />

      <div className="p-20 mx-auto bg-primary-200 rounded-[3.125rem]">
        <p className="font-medium text-[3.75rem] text-primary-800 leading-[3.75rem] w-[70%] pb-10">
          Over 500 million people suffer from type some form of diabetes.
        </p>
        <p className="text-[1.625rem] font-medium w-[60%]">
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

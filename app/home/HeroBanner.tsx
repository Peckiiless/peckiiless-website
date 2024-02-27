import MotionWrapper from "../components/MotionWrapper";

export default function Banner() {
  return (
    <MotionWrapper>
      <section className="text-center text-nav font-medium max-w-[59rem] mx-auto px-2 my-10 md:mt-10 md:mb-20">
        <div>
          <p className="sm:text-[4.25rem] text-[2.4rem] pb-2">
            Welcome to Peckiiless
          </p>

          <p className="sm:text-[2.5rem] text-[1.5rem]">
            Where we breathe life into gas monitoring and reveal the secrets of
            gases with revolutionizing real time multi gas monitoring solutions.
          </p>
        </div>
      </section>
    </MotionWrapper>
  );
}
